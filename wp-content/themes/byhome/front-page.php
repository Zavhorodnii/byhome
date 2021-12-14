<?php
get_header();
$this_page_id = get_the_ID();
?>

<main class="page">
<!--    <h1 class="sr-only">ByHome теплые модульные полы</h1>-->
    <section class="hero">
        <div class="hero__mobile-img">
            <img src="<?php echo get_the_post_thumbnail_url( $this_page_id ); ?>" alt="<?php echo get_post_meta( get_post_thumbnail_id(), '_wp_attachment_image_alt', true); ?>">
        </div>
        <div class="hero__container">
            <?php
            $main_screen = get_field('main_screen');
            ?>
            <div class="get_page_title" style="display: none"><?php the_content() ?></div>
            <div class="hero__inner">
                <h2 class="hero__title"><?php the_content(); ?></h2>
                <ul class="hero__list">
                    <?php
                    foreach ($main_screen['points'] as $point){
                        ?>
                        <li class="hero__item"><?php echo $point['point'] ?></li>
                        <?php
                    }
                    ?>
                </ul>
                <a href="#" data-hystmodal="#order" class="hero__btn btn">Бесплатная консультация</a>
            </div>
            <style>
                .hero__container::before {
                    background: url("<?php echo get_the_post_thumbnail_url( $this_page_id ); ?>") center/cover no-repeat;
                }
            </style>
        </div>
    </section>
    <section class="about">
        <div data-section="0.7">
            <div class="about__container">
                <div class="about__left">
                    <div class="about__body">
                        <?php
                        $quote_1 = get_field('quote_1');
                        ?>
                        <div class="about__img">
                            <div class="about__decor"></div>
                            <img src="<?php echo $quote_1['image']['url'] ?>" alt="<?php echo $quote_1['image']['alt'] ?>">
                        </div>
                        <div class="about__box">
                            <div class="about__name"><?php echo $quote_1['full_name'] ?></div>
                            <a href="<?php echo $quote_1['instagram_link'] ?>" target="_blank" class="about__link">Смотреть профиль
                                Instagram</a>
                            <ul class="about__list">
                                <?php foreach ($quote_1['position'] as $item ){
                                    ?>
                                    <li class="about__item"><?php echo $item['item'] ?></li>
                                    <?php
                                } ?>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="about__rigth">
                    <div class="about__text">
                        <?php echo $quote_1['text'] ?>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="products">
        <div class="products__container">
            <?php
            $houses = get_field('house');
            ?>
            <h2 class="products__title _title _title--black"><?php echo $houses['title'] ?></h2>
            <ul class="products__list">
                <?php
                foreach ($houses['houses'] as $house){
                    ?>
                    <li class="products__item product">
                        <a href="<?php echo get_permalink($house->ID) ?>" class="product__links">
                            <div class="product__top">
                                <div class="product__img _ibg">
                                    <img src="<?php echo get_the_post_thumbnail( $house->ID ); ?>"
                                         alt="<?php echo get_post_meta( get_post_thumbnail_id(), '_wp_attachment_image_alt', true); ?>">
                                    <div class="product__link">
                                        <img src="<?php echo get_template_directory_uri() ?>/img/icons/arrow-prodict.svg?_v=1638712607198" alt="">
                                    </div>
                                </div>
                            </div>
                        </a>
                        <div class="product__bottom">
                            <div class="product__number"><a href="<?php echo get_permalink($house->ID) ?>"><?php echo $house->post_title ?></a></div>
                            <div class="product__size"><?php echo get_post_meta( $house->ID, 'square', true) ?> кв.м. </div>
                            <div class="product__prices">
                                <div class="product__icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 199 200" fill="none">
                                        <path d="M6 105L104 7C108 3 113 0 119 0H179C190 0 199 9 199 20V80C199 85 197 90 194 93L95 193C91 197 86 200 80 200C74 200 68 197 65 193L8 136C3 132 1 127 1 121C-1 114 2 109 6 105ZM149 70C160 70 169 61 169 50C169 39 160 30 149 30C138 30 129 39 129 50C129 61 138 70 149 70Z" fill="#D5E24A"></path>
                                    </svg>
                                </div>
                                <div class="product__price"> <?php echo number_format(get_post_meta( $house->ID, 'price', true), 0, ',', ' ') ?> ₽ </div>
                            </div>
                        </div>
                    </li>
                    <?php
                }
                ?>
            </ul>
        </div>
    </section>
    <section class="advantage">
        <div class="advantage__container">
            <?php
            $dignity = get_field('dignity');
            ?>
            <h2 class="advantage__title _title"><?php echo $dignity['title'] ?></h2>
            <ul class="advantage__list">
                <?php
                foreach ( $dignity['list'] as $item ){
                    ?>
                    <li class="advantage__item card">
                        <div class="card__top">
                            <h3 class="card__title"><?php echo $item['title'] ?></h3>
                            <div class="card__counter"></div>
                        </div>
                        <div class="card__body">
                            <p><?php echo $item['description'] ?></p>
                        </div>
                    </li>
                    <?php
                }
                ?>

            </ul>
        </div>
    </section>
    <section class="video">
        <div class="video__container">
            <?php
            parse_str(parse_url(get_field('video'), PHP_URL_QUERY), $my_array_of_vars);
            ?>
            <div class="video__box _ibg js-paste-video" data-js-paste-iframe="<?php echo $my_array_of_vars['v'] ?>">
<!--                <iframe src="https://www.youtube.com/embed/QyRoGKZQuw8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>-->
            </div>
        </div>
    </section>
    <section class="owner">
        <div data-section="0.5">
            <div class="owner__container">
                <?php
                $founders = get_field('founders');
                ?>
                <h2 class="owner__title _title">
                    <?php echo $founders['title'] ?>
                </h2>
                <ul class="owner__list">
                    <?php
                    foreach ( $founders['photos'] as $photo){
                        ?>
                        <li class="owner__item">
                            <div class="owner__img _ibg"><img src="<?php echo $photo['photo']['url'] ?>"
                                                              alt="<?php echo $photo['photo']['alt'] ?>"></div>
                            <div class="owner__name"><?php echo $photo['full_name'] ?></div>
                        </li>
                        <?php
                    }
                    ?>
                </ul>
                <div class="owner__box">
                    <div class="owner__text">
                        <?php echo $founders['text'] ?>
                    </div>
                    <div class="owner__logo">
                        <img src="<?php echo get_field('logo', 'options')['url'] ?>"
                            alt="<?php echo get_field('logo', 'options')['alt'] ?>">
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="about">
        <div data-section="0.7">
            <div class="about__container">
                <div class="about__left">
                    <?php
                    $quote_2 = get_field('quote_2');
                    ?>
                    <div class="about__body">
                        <div class="about__img">
                            <div class="about__decor"></div>
                            <img src="<?php echo $quote_2['image']['url'] ?>" alt="<?php echo $quote_2['image']['alt'] ?>">
                        </div>
                        <div class="about__box">
                            <div class="about__name"><?php echo $quote_2['full_name'] ?></div>
                            <a href="<?php echo $quote_2['instagram_link'] ?>" target="_blank" class="about__link">Смотреть профиль
                                Instagram</a>
                            <ul class="about__list">
                                <?php
                                foreach ( $quote_2['position'] as $item ){
                                    ?>
                                    <li class="about__item"><?php echo $item['item'] ?></li>
                                    <?php
                                }
                                ?>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="about__rigth">
                    <div class="about__text">
                        <?php
                        echo $quote_2['text'];
                        ?>
                    </div>
                    <div class="about__btns">
                        <a href="<?php echo $quote_2['youtube'] ?>" target="_blank" class="about__btn btn">Перейти в YouTube</a>
                        <a href="<?php echo $quote_2['instagram'] ?>" target="_blank" class="about__btn btn btn--white">Перейти
                            в Instagram</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="offer">
        <div class="offer__container">
            <?php
            $why_us = get_field('why_us');
            ?>
            <h2 class="offer__title _title _title--black">
                <?php echo $why_us['block_title'] ?>
            </h2>
            <ul class="offer__list">
                <?php
                foreach ( $why_us['blocks'] as $block){
                    ?>
                    <li class="offer__item">
                        <div class="offer__text">
                            <h3 class="offer__caption"><?php echo $block['title'] ?></h3>
                            <div class="offer__p">
                                <?php echo $block['description'] ?>
                            </div>
                        </div>
                        <div class="offer__img _ibg">
                            <img src="<?php echo $block['image']['url'] ?>" alt="<?php echo $block['image']['alt'] ?>">
                        </div>
                    </li>
                    <?php
                }
                ?>
            </ul>
        </div>
    </section>
    <section class="send-in">
        <div class="send-in__container">
            <h2 class="send-in__title">Понравились дома?<br>Оставьте заявку!</h2>
            <form action="#" class="send-in__form js_get_form_info">
                <div class="send-in__row name_error">
                    <input autocomplete="off" type="text" name="form[]" data-error="Обязательное поле" class="input js_get_name" placeholder="Ваше имя">
                </div>
                <div class="send-in__row phone_error">
                    <input autocomplete="off" type="text" name="form[]" data-required data-error="Обязательное поле" class="input js_get_phone" placeholder="Ваше телефон">
                </div>
                <div class="send-in__row">
                    <button type="submit" class="send-in__btn js_send_form">Оставить заявку</button>
                </div>
                <div class="validate">
                    <div class="validate__close">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <g id="close">
                                <path d="M18.717 6.697l-1.414-1.414-5.303 5.303-5.303-5.303-1.414 1.414 5.303 5.303-5.303 5.303 1.414 1.414 5.303-5.303 5.303 5.303 1.414-1.414-5.303-5.303z" />
                            </g>
                        </svg>
                    </div>
                    <div class="validate__text">Пожалуйста, заполните все обязательные поля</div>
                </div>
            </form>
        </div>
    </section>
</main>

<?php
get_footer();
?>
