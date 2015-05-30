<?php Themewrangler::setup_page();get_header('splash'/***Template Name: Homepage */); ?>

<div id="splash--wrapper">

  <div id="splash--meta" class="fullscreen absolute-center text-center">
    <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
    <h1><?php bloginfo( 'name' ) ?></h1>
    <h4 class="red"><?php the_field('sub_title'); ?></h4>
    <p><?php the_field('next_show_dates'); ?></p>
    <?php endwhile; endif; ?>
  </div>

  <div id="splash--signup" class="zoom-anim-dialog mfp-hide text-center">
    <?php the_post_thumbnail('original', array('class' => 'img-responsive')); ?>
    <div class="wrapper">
      <h3>Join the mailing list and we'll keep you up to date.</h3>
      <?php echo do_shortcode('[epm_mailchimp]' ); ?>
    </div>
  </div>

  <div id="splash--video-overlay"></div>
  <div id="splash--video" class="fullscreen cover" style="opacity:0"></div>

</div>

<?php get_footer(); ?>
