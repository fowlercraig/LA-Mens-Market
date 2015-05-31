<?php
add_action( 'wp_ajax_load_redbull', 'load_redbull_content' );
add_action( 'wp_ajax_nopriv_load_redbull', 'load_redbull_content' );

function load_redbull_content() {
    $urls = get_post_meta($_GET['data'], 'api_info');
    if(count($urls)>=1 && $urls[0] != '') {
      $url = $urls[0];
    } else {
      return;
    }
    $api_content = file_get_contents($url);
    $api_data = json_decode($api_content);
    foreach($api_data->result as $res) {

      $featuredimage = $res->featuredimage;
      $title = $res->title;
      $publisheddate = date('F j, Y', strtotime($res->publisheddate));
      $url = $res->url;
      $teaser = $res->teaser;
    include(locate_template('parts/pages/content.php'));
    }
    die;
}