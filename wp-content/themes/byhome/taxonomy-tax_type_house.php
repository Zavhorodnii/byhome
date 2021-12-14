<?php
get_header();
$this_page_id = get_the_ID();
?>


<main class="page">

    <?php
    $category = get_queried_object();
    $category_id = $category->term_id;
    $args = array(
        'post_type'         => 'house',
        'posts_per_page'    => -1,
        'fields'            => 'ids',
        'tax_query'         => array(
            array(
                'taxonomy' => 'tax_type_house',
                'field'    => 'slug',
                'terms'    => $category->slug,
            )
        )
    );
    $query = new WP_Query( $args );
    wp_reset_postdata();
    ?>

    <section class="heading">
        <div class="heading__container">
            <h2 class="heading__title get_page_title"><?php echo $category->name ?></h2>

            <a href="<?php echo get_home_url() ?>" class="heading__logo">
                <img src="<?php echo get_field('logo', 'options')['url'] ?>"
                     alt="<?php echo get_field('logo', 'options')['alt'] ?>">
            </a>
        </div>
    </section>
    <section class="products">
        <div class="products__container">
            <ul class="products__list">
                <?php
                while ( $query->have_posts() ) {
                    $query->the_post();
                    ?>
                    <li class="products__item product">
                        <a href="<?php the_permalink(); ?>" class="product__links">
                            <div class="product__top">
                                <div class="product__img _ibg">
                                    <img src="<?php echo get_the_post_thumbnail( get_the_ID() ); ?>" alt="<?php echo get_post_meta( get_post_thumbnail_id(), '_wp_attachment_image_alt', true); ?>">
                                    <a href="#" class="product__link"><img src="<?php echo get_template_directory_uri() ?>/img/icons/arrow-prodict.svg?_v=1638712607198" alt=""></a>
                                </div>
                            </div>
                        </a>
                        <div class="product__bottom">
                            <div class="product__number"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></div>
                            <div class="product__size"><?php echo get_post_meta( get_the_ID(), 'square', true) ?> кв.м. </div>
                            <div class="product__prices">
                                <div class="product__icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 199 200" fill="none">
                                        <path d="M6 105L104 7C108 3 113 0 119 0H179C190 0 199 9 199 20V80C199 85 197 90 194 93L95 193C91 197 86 200 80 200C74 200 68 197 65 193L8 136C3 132 1 127 1 121C-1 114 2 109 6 105ZM149 70C160 70 169 61 169 50C169 39 160 30 149 30C138 30 129 39 129 50C129 61 138 70 149 70Z" fill="#D5E24A"></path>
                                    </svg>
                                </div>
                                <div class="product__price"> <?php echo number_format(get_post_meta( get_the_ID(), 'price', true), 0, ',', ' ') ?> ₽ </div>
                            </div>
                        </div>
                    </li>
                    <?php
                }
                wp_reset_postdata();
                ?>

            </ul>
            <div class="products__buttons">
                <a href="<?php echo get_field('all_house', 'options') ?>" class="products__btn-link btn btn--white">Все дома</a>
                <?php
                next_link($category_id); ?>
            </div>
        </div>
    </section>
</main>

<?php

function next_link($category_id){
    $menu_items = wp_get_nav_menu_items('Menu');
    $index = 0;
    foreach ($menu_items as $menu_item) {
        if( $menu_item->url == get_term_link($category_id) ){
            if ( $index + 1 <= count($menu_items) - 1 ){
                ?>
                <a href="<?php echo $menu_items[$index + 1]->url ?>"
                   class="products__btn-link btn"><?php echo $menu_items[$index + 1]->title ?></a>
                <?php
            }
            else{
                ?>
                <a href="<?php echo $menu_items[0]->url ?>"
                   class="products__btn-link btn"><?php echo $menu_items[0]->title ?></a>
                <?php
            }
        }
        ?>
        <?php
        $index++;
    }
}

get_footer();
?>
