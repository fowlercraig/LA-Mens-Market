<?php


if( have_rows('brands') ):

  echo '<div id="brands">';

  // loop through the rows of data
    while ( have_rows('brands') ) : the_row();?>

        <div class="brand">
        <?php the_sub_field('brand');?>
        </div>

    <?php endwhile;

    echo '</div>';

else :

    // no rows found

endif;

?>