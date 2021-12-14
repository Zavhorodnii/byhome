<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8">
    <meta name="format-detection" content="telephone=no">
<!--    <link rel="stylesheet" href="css/style.min.css?_v=20211205155647">-->
    <link rel="shortcut icon" href="<?php echo get_field('favicon', 'options')['url'] ?>">
    <!-- <meta name="robots" content="noindex, nofollow"> -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php wp_head(); ?>
</head>

<body>
<div class="wrapper">
    <?php
    if( is_front_page() ){
        ?>
        <header class="header _lp">
            <div class="header__container">
                <div class="header__inner">
                    <a href="<?php echo get_home_url() ?>" class="header__logo">
                        <img src="<?php echo get_field('logo', 'options')['url'] ?>"
                             alt="<?php echo get_field('logo', 'options')['alt'] ?>">
                    </a>
                    <div class="header__menus">
                        <ul class="header__list">
                            <li data-menu="burger" data-menu="open" class="header__item header__click">
                                <a href="#" class="header__link">Дома
                                    <svg xmlns="http://www.w3.org/2000/svg" width="52" height="44" viewBox="0 0 52 44" fill="none">
                                        <path d="M26 44L51.1147 0.5H0.885263L26 44Z"></path>
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <a href="tel:<?php echo trim(get_field('phone_number', 'options')) ?>" class="header__phone"><?php echo get_field('phone_number', 'options') ?></a>
                    <div class="header__burger">
                        <button data-menu="burger" data-menu="open" type="button" class="menu__icon icon-menu"><span></span></button>
                    </div>
                </div>
            </div>
        </header>
        <?php get_side_menu() ?>
        <?php
    }
    if( is_tax() ||
        get_permalink() == get_field('all_house', 'options' ) ||
        get_post_type( get_the_ID() ) == 'house'){
        ?>
        <header class="header-secondary">
            <div class="header-secondary__container">
                <a href="<?php echo get_home_url() ?>" class="header-secondary__link">
                    <div class="header-secondary__icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                            <circle cx="18" cy="18" r="17.5" stroke="white" stroke-opacity="0.15"></circle>
                            <path d="M15.9784 24.6773L10.1454 18.7697C10.0533 18.6765 10 18.5417 10 18.4C10 18.2583 10.0526 18.1235 10.1454 18.0303L15.9784 12.1227C16.1561 11.9432 16.4259 11.9628 16.5819 12.1674C16.7378 12.3712 16.7207 12.6825 16.5431 12.8621L11.5918 17.8765H25.5723C25.8085 17.8765 26 18.097 26 18.3689C26 18.6409 25.8085 18.8614 25.5723 18.8614H11.5313L16.5437 23.9379C16.6398 24.0349 16.6892 24.1712 16.6892 24.3076C16.6892 24.4228 16.6543 24.5394 16.5825 24.6326C16.4259 24.8372 16.1555 24.8568 15.9784 24.6773Z" fill="white"></path>
                        </svg>
                    </div>
                    <div class="header-secondary__text">На главную</div>
                </a>
            </div>
            <div class="header__burger">
                <button data-menu="burger" data-menu="open" type="button" class="menu__icon icon-menu"><span></span></button>
            </div>
            <?php get_side_menu() ?>
        </header>
        <?php
    }
    if(get_permalink() == get_field('thankyou_page', 'options' )){
        ?>
        <header class="header-burger">
            <div class="header__burger"><button data-menu="burger" data-menu="open" type="button" class="menu__icon icon-menu"><span></span></button></div>
            <?php get_side_menu() ?>
        </header>
        <?php
    }
    ?>

    <?php
    function get_side_menu(){
        ?>
        <div id="burger" class="menu">
            <div data-menu="burger" data-type="close" class="menu__close"><img src="<?php echo get_template_directory_uri() ?>/img/icons/close-dark.svg?_v=1638712607198" alt=""></div>
            <div class="menu__logo">
                <a href="<?php echo get_home_url() ?>" class="menu__logo--black">
                    <img src="<?php echo get_field('menu_logo', 'options')['url'] ?>"
                         alt="<?php echo get_field('menu_logo', 'options')['alt'] ?>">
                </a>
            </div>
            <nav class="menu__body">
                <ul class="menu__list">
                    <?php
                    side_menu();
                    ?>
                </ul>
            </nav>
            <ul class="menu__social-list">
                <?php
                side_social();
                ?>
            </ul>
            <div class="menu__btns"><a href="#" data-hystmodal="#order" class="menu__btn">Консультация</a></div>
        </div>
        <?php
    }
    function side_menu(){
        ?>
        <li class="menu__item"><a href="<?php echo get_field('all_house', 'options') ?>"
                                  class="menu__link">Все дома</a></li>
        <?php
        $menu_items = wp_get_nav_menu_items('Menu');
        foreach ($menu_items as $menu_item) {
            ?>
            <li class="menu__item"><a href="<?php echo $menu_item->url ?>"
                                      class="menu__link"><?php echo $menu_item->title ?></a></li>
            <?php
        }
    }
    function side_social(){
        $social = get_field('social', 'options');
        foreach ($social as $item){
            ?>
            <li class="menu__social-item">
                <a href="<?php echo $item['link'] ?>">
                    <?php echo $item['svg_menu'] ?>
                </a>
            </li>
            <?php
        }
    }
    ?>

