<!DOCTYPE html>
<!--[if lt IE 7 ]><html class="ie ie6" lang="en"> <![endif]-->
<!--[if IE 7 ]><html class="ie ie7" lang="en"> <![endif]-->
<!--[if IE 8 ]><html class="ie ie8" lang="en"> <![endif]-->
<!--[if (gte IE 9)|!(IE)]><!--><html lang="en"> <!--<![endif]-->
<head>
<meta charset="utf-8">
<title><?php wp_title(' | ', true, 'right'); ?></title>
<meta name="description" content="<?php bloginfo( 'description' ) ?>">
<link rel="shortcut icon" href="/assets/img/favicon.ico">
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">

<!--[if lt IE 9]>
<script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
<![endif]-->

<script src="//use.typekit.net/wtq6lgl.js"></script>
<script>try{Typekit.load();}catch(e){}</script>

<?php wp_head(); ?>
</head>

<body <?php body_class('fs-grid'); ?>>
  <div class="wrapper">
    <header id="head" class="main-nav">
      <div class="fs-row">
        <?php
          $menuParameters = array(
            'container'       => false,
            'echo'            => false,
            'items_wrap'      => '%3$s',
            'theme_location'  => 'main-menu',
            'walker'          => new MV_Cleaner_Walker_Nav_Menu(),
            'depth'           => 0,
          );
        ?>
        <nav id="logo-wrap" class="fs-cell fs-lg-1 fs-md-1 fs-sm-1">Logo</nav>
        <nav id="primary-nav" class="fs-cell fs-lg-10 fs-md-hide fs-sm-hide"><?php echo strip_tags(wp_nav_menu( $menuParameters ), '<a>' ); ?></nav>
        <nav id="logo-wrap" class="fs-cell fs-lg-1 fs-md-1 fs-sm-1 fs-right"><a href="#" class="primary-button">Donate</a></nav>
      </div>
    </header>