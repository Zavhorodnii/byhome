$(document).ready(function () {
    function video() {
        let _this = $('.js-paste-video');
        // console.log(_this);

        setTimeout
        (
            function()
            {
                _this.each
                (
                    function(index)
                    {
                        // let $element = $(this);

                        // $(this).html('<iframe width="' + $(this).attr('data-iframe-w') + '" height="' + $(this).attr('data-iframe-h') + '" src="https://www.youtube.com/embed/' + $(this).attr('data-js-paste-iframe') + '" title="YouTube video player" frameborder="0"  allowfullscreen></iframe>')
                        $(this).html('<iframe src="https://www.youtube.com/embed/' + $(this).attr('data-js-paste-iframe') + '" title="YouTube video player" frameborder="0"  allowfullscreen></iframe>')

                    }
                );
            },
            4000
        )
    }

    video()

    $('.js_send_form').click(function(event){
        event.preventDefault()
        let form_info = $(this).closest('.js_get_form_info');
        let data = new FormData();

        let name = form_info.find('.js_get_name');
        if(name.val().length < 2){
            if (!name.hasClass('_error')) {
                $('.name_error').append('<div class="form__error">Обязательное поле</div>')
            }
            name.addClass('_error')
            form_info.find('.validate').addClass('validate__show')
            return;
        }
        name.removeClass('_error');

        let phone = form_info.find('.js_get_phone').val().replace(/\D/g, '');
        if (phone.length < 11) {
            if (!form_info.find('.js_get_phone').hasClass('_error'))
                $('.phone_error').append('<div class="form__error">Обязательное поле</div>')
            form_info.find('.js_get_phone').addClass('_error');
            form_info.find('.validate').addClass('validate__show')
            return;
        }
        form_info.find('.js_get_phone').removeClass('_error');

        data.append('action', 'ajax_send_form');
        data.append('name', name.val())
        data.append('phone', phone)
        data.append('title', $('.get_page_title').text())
        data.append('url', window.location.href)

        $.ajax({
            url: window.ajaxUrl,
            type: 'POST',
            dataType: 'json',
            processData: false,
            contentType: false,
            data: data,
            success: function (data) {
                // console.log('data' + data);
                // console.log('data = ' + data.status);
                if(data.result == 'ok'){
                    name.val('');
                    form_info.find('.js_get_phone').val('');
                    document.querySelector('.js_show_form').click()
                    setTimeout
                    (
                        function()
                        {
                            window.location.replace(document.querySelector('.js_thank_page').getAttribute('href'));
                        },
                        1000
                    )
                }
            },
            error: function (jqXHR, status, errorThrown) {
                console.log('ОШИБКА AJAX запроса: ' + status, jqXHR);
            }
        })
    })

    $('.menu__btn').click(function (event){
        $('.menu__close').click();
    })

});