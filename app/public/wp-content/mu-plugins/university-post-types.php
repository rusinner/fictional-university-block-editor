<?php

function university_post_types()
{
    // event post type
    register_post_type('event', array(
        'show_in_rest' => true,
        // 'capability_type' => 'event',
        'map_meta_cap' => true,
        'supports' => array('title', 'editor', 'excerpt'),
        'rewrite' => array('slug' => 'events'),
        'has_archive' => true,
        'public' => true,
        'show_ui' => true,
        'labels' => array(
            'name' => 'Events',
            'add_new_item' => 'Add New Event',
            'edit_item' => 'Edit Event',
            'all_items' => 'All Events',
            'singular_name' => "Event"
        ),
        'menu_icon' => 'dashicons-calendar-alt'
    ));

    //program post type
    register_post_type('program', array(
        'show_in_rest' => true,
        //removed editor next to title below in the supports array beacause i don't want in the programs dashboard exist two block of text
        //i added one custom so i do not need the default one
        'supports' => array('title'),
        'rewrite' => array('slug' => 'programs'),
        'has_archive' => true,
        'public' => true,
        'show_in_rest' => true,
        'labels' => array(
            'name' => 'Programs',
            'add_new_item' => 'Add New Program',
            'edit_item' => 'Edit Programs',
            'all_items' => 'All Programs',
            'singular_name' => "Program"
        ),
        'menu_icon' => 'dashicons-awards'
    ));
    //professors post type
    register_post_type(
        'professor',
        array(
            'show_in_rest' => true,
            'supports' => array('title', 'editor', 'thumbnail'),
            'public' => true,
            'show_in_rest' => true,
            'labels' => array(
                'name' => 'Professors',
                'add_new_item' => 'Add New Professor',
                'edit_item' => 'Edit Professors',
                'all_items' => 'All Professors',
                'singular_name' => "Professor"
            ),
            'menu_icon' => 'dashicons-welcome-learn-more'
        )
    );

    // campus post type
    register_post_type('campus', array(
        'show_in_rest' => true,
        // 'capability_type' => 'campus',
        'map_meta_cap' => true,
        'supports' => array('title', 'editor', 'excerpt'),
        'rewrite' => array('slug' => 'campuses'),
        'has_archive' => true,
        'public' => true,
        'show_in_rest' => true,
        'labels' => array(
            'name' => 'Campuses',
            'add_new_item' => 'Add New Campus',
            'edit_item' => 'Edit Campus',
            'all_items' => 'All Campuses',
            'singular_name' => "Campus"
        ),
        'menu_icon' => 'dashicons-location-alt'
    ));


    // notes post type
    register_post_type('note', array(
        // 'capability_type' => 'note',
        'map_meta_cap' => true,
        'show_in_rest' => true,
        'supports' => array('title', 'editor'),
        'has_archive' => true,
        'show_ui' => true,
        'public' => false,
        'labels' => array(
            'name' => 'Notes',
            'add_new_item' => 'Add New Note',
            'edit_item' => 'Edit Note',
            'all_items' => 'All Notes',
            'singular_name' => "Note"
        ),
        'menu_icon' => 'dashicons-welcome-write-blog'
    ));

    // likes post type
    register_post_type('like', array(
        'supports' => array('title'),
        'has_archive' => true,
        'show_ui' => true,
        'public' => false,
        'labels' => array(
            'name' => 'Likes',
            'add_new_item' => 'Add New Like',
            'edit_item' => 'Edit Like',
            'all_items' => 'All Like',
            'singular_name' => "Like"
        ),
        'menu_icon' => 'dashicons-heart'
    ));

    // Homepage Slideshow Post Type
    register_post_type('homepage-slideshow', array(
        'supports' => array('title'),
        'public' => false, // not publicly visible
        'show_ui' => true, // to be visible in the admin panel
        'labels' => array(
            'name' => 'Homepage-slideshow',
            'add_new_item' => 'Add New Homepage-slide',
            'edit_item' => 'Edit Homepage-slide',
            'all_items' => 'All Homepage-slides',
            'singular_name' => 'Homepage-slide'
        ),
        'menu_icon' => 'dashicons-images-alt'
    ));
}

add_action('init', 'university_post_types');
