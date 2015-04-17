<?php


if( have_rows('brands') ):

  echo '<div id="brand-list">';
  echo '<div class="fs-row">';

  // loop through the rows of data
    while ( have_rows('brands') ) : the_row();?>

        <div class="brand fs-cell-contained fs-lg-4 fs-md-6 fs-sm-3 text-center">
          <a href="#" class="ss-gizmo ss-navigateright"><?php the_sub_field('brand');?></a>
        </div>

    <?php endwhile;

    echo '</div>';
    echo '</div>';

else :

    // no rows found

endif;

?>