<?php Themewrangler::setup_page();get_header('splash'/***Template Name: Homepage */); ?>

<div id="splash--wrapper">

  <div id="splash--meta" class="fullscreen absolute-center text-center">
    <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
    <h1><?php bloginfo( 'name' ) ?></h1>
    <h4 class="red"><?php the_field('sub_title'); ?></h4>
    <p><?php the_field('next_show_dates'); ?></p>
    <?php endwhile; endif; ?>
  </div>

  <div id="splash--video-overlay"></div>
  <div id="splash--video" class="fullscreen cover" style="opacity:0"></div>

  <?php include locate_template('parts/mailchimp.php' ); ?>
  <?php include locate_template('parts/ajax-helper.php' ); ?>

</div>

<?php get_footer(); ?>
