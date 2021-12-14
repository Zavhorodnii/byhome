<footer class="footer">
    <div class="footer__container">
        <div class="footer__top">
            <div class="footer__col footer__one">
                <a href="/" class="footer__logo">
                    <img src="<?php echo get_field('logo', 'options')['url'] ?>"
                         alt="<?php echo get_field('logo', 'options')['alt'] ?>">
                </a>
            </div>
            <div class="footer__col footer__contacts">
                <div class="footer__title">Контакты для связи</div>
                <div class="footer__body">
                    <a href="tel:<?php echo trim(get_field('phone_number', 'options')) ?>" class="footer__phone"><?php echo get_field('phone_number', 'options') ?></a>
                    <a href="mailto:<?php echo get_field('email', 'options') ?>" class="footer__mail"><?php echo get_field('email', 'options') ?></a>
                </div>
            </div>
            <div class="footer__col footer__soc">
                <div class="footer__title">Наши соц сети</div>
                <div class="footer__body">
                    <div class="footer__soc-list">
                        <?php
                        $social = get_field('social', 'options');
                        foreach ($social as $item){
                            ?>
                            <a href="<?php echo $item['link'] ?>" target="_blank" class="footer__link">
                                <?php echo $item['svg'] ?>
                            </a>
                            <?php
                        }
                        ?>
                    </div>
                </div>
            </div>
            <div class="footer__col footer__menus">
                <div class="footer__title">Модельный ряд</div>
                <div class="footer__body">
                    <ul class="footer__menu menu-footer">
                        <?php
                        $menu_items = wp_get_nav_menu_items('Menu');
                        foreach ($menu_items as $menu_item) {
                            ?>
                            <li class="menu-footer__item"><a href="<?php echo $menu_item->url ?>"
                                                      class="menu-footer__link"><?php echo $menu_item->title ?></a></li>
                            <?php
                        }
                        ?>
                    </ul>
                </div>
                <a href="<?php echo get_field('all_house', 'options') ?>" class="footer__link-all">Все дома</a>
            </div>
        </div>
        <div class="footer__bottom">
            <div class="footer__info"><?php echo get_field('copyright', 'options') ?></div>
            <button class="footer__btn-up">
<!--                --><?//xml version="1.0" encoding="UTF-8"?><!-- -->
                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                    <path d="M59.5 30C59.5 13.7076 46.2924 0.5 30 0.5C13.7076 0.5 0.5 13.7076 0.5 30C0.5 46.2924 13.7076 59.5 30 59.5C46.2924 59.5 59.5 46.2924 59.5 30Z" stroke="white"></path>
                    <path d="M38.8275 27.4072L30.5199 19.2045C30.3889 19.075 30.1992 19 30 19C29.8008 19 29.6111 19.074 29.4801 19.2045L21.1725 27.4072C20.9201 27.657 20.9478 28.0365 21.2354 28.2558C21.522 28.4751 21.9598 28.451 22.2123 28.2012L29.2638 21.2385V40.8985C29.2638 41.2307 29.5739 41.5 29.9563 41.5C30.3388 41.5 30.6488 41.2307 30.6488 40.8985V21.1534L37.7877 28.2021C37.924 28.3372 38.1158 28.4066 38.3076 28.4066C38.4695 28.4066 38.6336 28.3576 38.7646 28.2567C39.0522 28.0365 39.0799 27.6561 38.8275 27.4072Z" fill="white"></path>
                </svg>
            </button>
        </div>
    </div>
</footer>
</div>
<div class="hystmodal" id="order" aria-hidden="true">
    <div class="hystmodal__wrap">
        <button data-hystclose class="hystmodal__close">Закрыть</button>
        <div class="hystmodal__window" role="dialog" aria-modal="true">
            <div class="order-pop">

                <div class="order-pop__title" style="font-weight: 600;">
                    <?php
                    if ( !is_tax()) {
                        if (get_post_type() == 'house') {
                            echo 'Модульный дом ' . get_the_title();
                            ?>
                            <div class="t702__descr t-descr t-descr_xs" style="font-size:24px;
                                    line-height: 1.55; font-weight: 300; margin-top: 40px">
                                Заполните форму ниже и мы свяжемся с вами для консультации
                            </div>
                            <?php
                        }
                        if (get_post_type() == 'page'){
                            echo 'Заполните форму ниже и получите бесплатную консультацию';
                        }
                    }
                    else
                        echo 'Заполните форму ниже и получите бесплатную консультацию';
                    ?>

                </div>
                <form action="#" class="order-pop__form js_get_form_info">
                    <div class="order-pop__row name_error">
                        <input autocomplete="off" type="text" name="form[]" placeholder="Ваше имя" data-error="Обязательное поле" data-value="" class="input js_get_name">
                    </div>
                    <div class="order-pop__row phone_error">
                        <input autocomplete="off" type="text" name="form[]" data-required data-error="Обязательное поле" class="input js_get_phone" placeholder="Ваше телефон">
                    </div>
                    <div class="order-pop__massage">Пожалуйста, заполните все обязательные поля</div>
                    <div class="order-pop__row">
                        <button type="submit" class="order-pop__btn js_send_form">Отправить</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>

<div class="hystmodal" id="massageThenk" aria-hidden="true">
    <div class="hystmodal__wrap">
        <button data-hystclose class="hystmodal__close">Закрыть</button>
        <div class="hystmodal__window" role="dialog" aria-modal="true">
            <div class="order-pop message-thenk">
                <div class="message-thenk__caption">Заполните форму ниже и получите бесплатную консультацию</div>
                <div class="message-thenk__btns">
                    <a href="#" class="message-thenk__btn">
                        Спасибо! Ваши данные отправлены.
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>
<script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>

<a href="#" data-hystmodal="#massageThenk" style="display: none" class="hero__btn js_show_form"></a>
<a href="<?php echo get_field('thankyou_page', 'options') ?>" style="display: none" class="js_thank_page"></a>
<?php wp_footer(); ?>
<!--<script src="js/app.min.js?_v=20211205155647"></script>-->
</body>

</html>
    <script>
        window.ajaxUrl = '<?php echo admin_url('admin-ajax.php'); ?>';
    </script>
