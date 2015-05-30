<?php Themewrangler::setup_page();get_header('splash'/***Template Name: Homepage */); ?>

<!--<h4 id="splash--handle">Navigation</h4>-->
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
<<<<<<< HEAD
=======
<div id="splash--video-overlay"></div>
<div id="splash--video" class="fullscreen cover" style="opacity:0"></div>
<!--
<nav id="splash--nav" data-navigation-handle="#splash--handle" data-navigation-content="#splash--wrapper">
  <a href="#">Home</a>
  <a href="#">About</a>
  <a href="#">Contact</a>
</nav>
-->
</div>

<script>
  $(document).ready(function(){
    //Big Video
  var BV = new $.BigVideo();
  BV.init();

  if (Modernizr.touch) {
    //BV.show('/assets/vid/video-poster.jpg');
  } else {
    BV.show('/assets/vid/lamm-vid.mp4',{
      ambient:true,
    });
  }
  });
</script>
>>>>>>> parent of 71bbccd... Thingies

<?php get_footer(); ?>
