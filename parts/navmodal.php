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

<div id="modal-nav" class="fs-grid fs-grid-fluid toggle_target closed">
  <div class="fs-row">
    <div class="fs-cell fs-all-full">
      <a id="menuBtn" class="toggle btn btn-nav btn-last" href="#" data-swap-target=".toggle_target">
        <span>
          <span></span>
          <span></span>
          <span></span>
        </span>
      </a>
    </div>
  </div>
  <nav class="fs-row nav-target">
    <div class='fs-cell fs-lg-8 fs-md-6 fs-sm-3'>
      <?php echo strip_tags(wp_nav_menu( $menuParameters ), '<a>' ); ?>
      <a class="toggle boom" data-swap-target=".nav-target">Boom</a>
    </div>
  </nav>
</div>