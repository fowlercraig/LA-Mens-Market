<<<<<<< HEAD
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

<?php
  $temp = $wp_query;
  $wp_query = null;
  $wp_query = new WP_Query();
  $wp_query->query('p=11&post_type=page'.'&paged='.$paged);

  while ($wp_query->have_posts()) : $wp_query->the_post();
?>

<div id="brands--wrapper">
  <header class='fs-row'>
    <div class="fs-cell fs-lg-12 text-center">
      <h2>Featured Brands</h2>
    </div>
  </header>
  <?php include locate_template('parts/splash/brands-list.php' );?>
</div>

<?php endwhile; ?>

<?php
  $wp_query = null;
  $wp_query = $temp;  // Reset
?>


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
=======
<?php Themewrangler::setup_page();get_header(/***Template Name: Homepage */); ?>

<div id="home--banner" class="bg green"></div>
<div id="home--schedule"></div>
<div id="home--physicians"></div>
<div id="home--howitworks" class="bg lightgray"></div>
<div id="home--legality"></div>
<div id="home--testimonials" class="bg lightgray"></div>
<div id="home--faq"></div>
>>>>>>> origin/master

<?php get_footer(); ?>
