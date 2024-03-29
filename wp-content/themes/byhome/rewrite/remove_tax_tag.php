<?php

add_filter('request', 'rudr_change_term_request', 1, 1 );

function rudr_change_term_request($query){

    $tax_name = 'tax_type_house'; // specify you taxonomy name here, it can be also 'category' or 'post_tag'

    // Request for child terms differs, we should make an additional check
    if( $query['attachment'] ) :
        $include_children = true;
        $name = $query['attachment'];
    else:
        $include_children = false;
        $name = $query['name'];
    endif;


    $term = get_term_by('slug', $name, $tax_name); // get the current term to make sure it exists

    if (isset($name) && $term && !is_wp_error($term)): // check it here

        if( $include_children ) {
            unset($query['attachment']);
            $parent = $term->parent;
            while( $parent ) {
                $parent_term = get_term( $parent, $tax_name);
                $name = $parent_term->slug . '/' . $name;
                $parent = $parent_term->parent;
            }
        } else {
            unset($query['name']);
        }

        switch( $tax_name ):
            case 'category':{
                $query['category_name'] = $name; // for categories
                break;
            }
            case 'post_tag':{
                $query['tag'] = $name; // for post tags
                break;
            }
            default:{
                $query[$tax_name] = $name; // for another taxonomies
                break;
            }
        endswitch;

    endif;

    return $query;
}

add_filter( 'term_link', 'rudr_term_permalink', 10, 3 );

function rudr_term_permalink( $url, $term, $taxonomy ){

    $taxonomy_name = 'tax_type_house'; // your taxonomy name here
    $taxonomy_slug = 'tax_type_house'; // the taxonomy slug can be different with the taxonomy name (like 'post_tag' and 'tag' )

    // exit the function if taxonomy slug is not in URL
    if ( strpos($url, $taxonomy_slug) === FALSE || $taxonomy != $taxonomy_name ) return $url;

    $url = str_replace('/' . $taxonomy_slug, '', $url);

    return $url;
}

function na_remove_slug( $post_link, $post, $leavename ) {

    if ( 'house' != $post->post_type || 'publish' != $post->post_status ) {
        return $post_link;
    }

    $post_link = str_replace( '/' . $post->post_type . '/', '/', $post_link );

    return $post_link;
}
add_filter( 'post_type_link', 'na_remove_slug', 10, 3 );

function na_parse_request( $query ) {

    if ( ! $query->is_main_query() || 2 != count( $query->query ) || ! isset( $query->query['page'] ) ) {
        return;
    }

    if ( ! empty( $query->query['name'] ) ) {
        $query->set( 'post_type', array( 'post', 'house', 'page' ) );
    }
}
add_action( 'pre_get_posts', 'na_parse_request' );