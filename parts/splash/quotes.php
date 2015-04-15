<?php

// check if the repeater field has rows of data
if( have_rows('quotes') ):

  echo '<div id="quotes">';

  // loop through the rows of data
    while ( have_rows('quotes') ) : the_row(); ?>

        <div class="quote"><?php the_sub_field('quote');?></div>

    <?php endwhile;

    echo '</div>';

else :

    // no rows found

endif;

?>