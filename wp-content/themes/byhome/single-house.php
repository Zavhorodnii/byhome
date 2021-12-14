<?php
get_header();
$this_page_id = get_the_ID();
?>


    <main class="page">
        <section class="head">
            <div class="head__container">
                <div class="head__box">
                    <div class="head__label">Модульный дом</div>
                    <div class="head__row">
                        <div class="head__namber get_page_title"><?php echo the_title() ?></div>
                        <div class="head__size"><?php echo get_post_meta( $this_page_id, 'square', true) ?> <span>кв.м</span></div>
                        <div class="head__price"><?php echo number_format(get_post_meta( $this_page_id, 'price', true), 0, ',', ' ') ?> <span>₽</span></div>
                        <a href="#" data-da=".head__container, 479" data-hystmodal="#order" class="head__btn btn">Хочу такой
                            дом</a>
                    </div>
                </div>
                <div class="head__main-img _ibg">
                    <img src="<?php echo get_the_post_thumbnail( $this_page_id ); ?>"
                         alt="<?php echo get_post_meta( get_post_thumbnail_id(), '_wp_attachment_image_alt', true); ?>">
                </div>
            </div>
        </section>
        <section class="galery">
            <div class="galery__container">
                <h2 class="galery__title _title _title--black">Галерея</h2>
                <div class="galery__box">
                    <?php
                    $gallery = get_field('gallery');
                    foreach ($gallery as $item){
                        ?>
                        <div class="galery__item">
                            <a data-fslightbox="lightbox" href="<?php echo $item['url'] ?>" class="galery__link _ibg">
                                <img src="<?php echo $item['url'] ?>" alt="<?php echo $item['alt'] ?>">
                            </a>
                        </div>
                        <?php
                    }
                    ?>
                </div>
            </div>
        </section>
        <section class="information">
            <div class="information__container">
                <h2 class="information__title _title _title--black"><?php echo get_field('block_title_1') ?></h2>
                <div class="information__box">
                    <div class="information__left">

                        <div class="information__col">
                            <?php
                            $green_select = get_field('green_select');
                            if( is_array($green_select) ){
                                foreach ($green_select as $item ){
                                    ?>
                                    <div class="information__item">
                                        <div class="information__number">
                                            <strong><span><?php echo $item['part_1'] ?></span></strong>
                                            <?php echo $item['part_2'] ?>
                                        </div>
                                        <div class="information__text"><?php echo $item['description'] ?></div>
                                    </div>
                                    <?php
                                }
                            }
                            ?>
                        </div>
                        <div class="information__col">
                            <?php
                            $green_select = get_field('simple_select');
                            if( is_array($green_select) ){
                                foreach ($green_select as $item ){
                                    ?>
                                    <div class="information__item">
                                        <div class="information__number"><strong><?php echo $item['part_1'] ?></strong><?php echo $item['part_2'] ?></div>
                                        <div class="information__text"><?php echo $item['description'] ?></div>
                                    </div>
                                    <?php
                                }
                            }
                            ?>
                        </div>
                    </div>
                    <div class="information__right">
<!--                        --><?php //echo get_post_meta(get_the_ID(), 'description', true) ?>
                        <?php echo get_field('description') ?>
                    </div>
                </div>
            </div>
        </section>
        <section class="price-list">
            <div class="price-list__container">
                <h2 class="price-list__title"><?php echo get_post_meta(get_the_ID(), 'block_title_2', true) ?> <span><?php echo number_format(get_post_meta( $this_page_id, 'price', true), 0, ',', ' ') ?> ₽</span></h2>
                <p class="price-list__subtitle"><?php echo get_post_meta( $this_page_id, 'subtitle', true) ?></p>
                <div class="price-list__box">
                    <div class="price-list__label">Сюда входит:</div>
                    <ul class="price-list__list">
                        <?php
                        $include_1 = get_field('include_1');
                        if( is_array($include_1) ){
                            foreach ($include_1 as $item){
                                ?>
                                <li class="price-list__item">
                                    <h3 class="price-list__caption"><?php echo $item['title'] ?></h3>
                                    <ul class="price-list__sublist">
                                        <?php
                                        if( is_array($item['points'])){
                                            foreach ($item['points'] as $point){
                                                ?>
                                                <li class="price-list__subitem"><?php echo $point['element'] ?></li>
                                                <?php
                                            }
                                        }
                                        ?>
                                    </ul>
                                </li>
                                <?php
                            }
                        }
                        ?>
                    </ul>
                </div>
                <div class="price-list__bottom list-price">
                    <div class="list-price__label">Дополнительно:</div>
                    <ul class="list-price__list">
                        <?php
                        $addition = get_field('addition');
                        if( is_array($addition) ){
                            foreach ($addition as $item){
                                ?>
                                <li class="list-price__item">
                                    <h3 class="list-price__caption"><?php echo $item['title'] ?></h3>
                                    <div class="list-price__text">
                                        <?php echo $item['description'] ?>
                                    </div>
                                </li>
                                <?php
                            }
                        }
                        ?>

                    </ul>
                </div>
            </div>
        </section>

        <section class="layout">
            <div class="layout__container">
                <div class="layout__list">
                    <div class="layout__item">
                        <div class="layout__title _title _title--black"><?php echo get_post_meta($this_page_id, 'block_title_3', true) ?></div>
                        <?php
                        $floors = get_field('floors');
                        if( is_array($floors) )
                            foreach ($floors as $floor){
                                ?>
                                <div class="layout__subtitle"><?php echo $floor['title'] ?></div>
                                <div class="layout__img">
                                    <?php
                                    if( is_array($floor['gallery']) ){
                                        foreach ($floor['gallery'] as $item){
                                            ?>
                                            <img src="<?php echo $item['url'] ?>" alt="<?php echo $item['alt'] ?>">
                                            <?php
                                        }
                                    }
                                    ?>
                                </div>
                                <?php
                            }
                        ?>
                    </div>
                    <div class="layout__item">
                        <div class="layout__title _title _title--black"><?php echo get_post_meta($this_page_id, 'block_title_4', true) ?></div>
                        <div class="layout__subtitle"><?php echo get_post_meta($this_page_id, 'block_title_4_subtitle', true) ?></div>
                        <div class="layout__img">
                            <?php
                            $block_title_4_gallery = get_field('block_title_4_gallery');
                            if( is_array($block_title_4_gallery) ){
                                foreach ($block_title_4_gallery as $item){
                                    ?>
                                    <img src="<?php echo $item['url'] ?>" alt="<?php echo $item['alt'] ?>">
                                    <?php
                                }
                            }
                            ?>
                        </div>
                    </div>
                </div>

            </div>
        </section>
        <section class="feature">
            <div class="feature__container">
                <h2 class="feature__title _title _title--black"><?php echo get_post_meta($this_page_id, 'block_title_5', true) ?></h2>
                <ul class="feature__list">
                    <?php
                    $peculiarities = get_field('peculiarities');
                    if(is_array($peculiarities)){
                        foreach ($peculiarities as $peculiarity){
                            ?>
                            <li class="feature__item">
                                <h3 class="feature__caption"><?php echo $peculiarity['title'] ?></h3>
                                <div class="feature__text">
                                    <?php echo $peculiarity['description'] ?>
                                </div>
                            </li>
                            <?php
                        }
                    }
                    ?>

                </ul>
                <div class="feature__btn"><a data-hystmodal="#order" href="#" class="btn btn--white">Оставить заявку</a></div>
            </div>
        </section>

        <section class="qustion">
            <div class="qustion__container">
                <h2 class="qustion__title _title _title--black">Популярные вопросы</h2>
                <div data-spollers class="spollers">
                    <?php
                    $questions = get_field('questions', 'options');
                    foreach ($questions as $question){
                        ?>
                        <div class="spollers__item">
                            <button type="button" data-spoller class="spollers__title"><?php echo $question['question'] ?><span><svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
										<g stroke="none" stroke-width="1px" fill="none" fill-rule="evenodd" stroke-linecap="square">
											<g transform="translate(1.000000, 1.000000)" stroke="#171717">
												<path d="M0,11 L22,11"></path>
												<path d="M11,0 L11,22"></path>
											</g>
										</g>
									</svg></span>
                            </button>
                            <div class="spollers__body">
                                <div class="qustion__box">
                                    <?php echo $question['answer'] ?>
                                </div>
                            </div>
                        </div>
                        <?php
                    }
                    ?>
                </div>
            </div>
        </section>

        <section class="send-in">
            <div class="send-in__container">
                <h2 class="send-in__title">Понравился дом?<br>Оставьте заявку!</h2>
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