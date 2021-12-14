<?php
/**
 * Template Name: Спасибо
 * Template Post Type: Page
 */
get_header();
?>


<main class="page">
    <div class="request">
        <div class="request__container">
            <div class="request__caption get_page_title"><?php echo get_post_meta(get_the_ID(), 'title', true) ?></div>
            <p class="request__p"><?php echo get_post_meta(get_the_ID(), 'subtitle', true) ?></p>
            <?php
            $owner = get_field('owner');
            ?>
            <div class="request__box">
                <div class="request__img">
                    <img src="<?php echo $owner['image']['url'] ?>" alt="<?php echo $owner['image']['alt'] ?>">
                </div>
                <div class="request__right">
                    <div class="request__name"><?php echo $owner['full_name'] ?></div>
                    <div class="request__positon"><?php echo $owner['position'] ?></div>
                </div>
            </div>
            <div class="request__inner">
                <div class="request__info">
                    <?php the_content(); ?>
                </div>
                <div class="request__links">
                    <div class="request__link-box">
                        <a href="<?php echo get_field('social', 'options')[0]['link'] ?>" class="request__youTube">Перейти в YouTube</a></div>
                    <div class="request__link-box">
                        <a href="<?php echo get_field('social', 'options')[1]['link'] ?>" class="request__instagram">Перейти в Instagram</a></div>
                </div>
            </div>
            <div class="request__btns">
                <a href="<?php echo get_home_url() ?>" class="request__btn btn">Вернутся на главную страницу</a>
            </div>
        </div>
    </div>
</main>

<?php
get_footer();
?>
