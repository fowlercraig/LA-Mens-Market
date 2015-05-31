<?php

$isASAP = (isset($_GET["fs-asap"]) && $_GET["fs-asap"] == "true");
ob_start();

if (have_posts()) :
    while (have_posts()) :
        the_post();

        if (!$isASAP) :
?>
<article id="content" class="myPageWrapper">
<?php
        endif;

        the_content();

        if (!$isASAP) :
?>
</article>
<?php
        endif;
    endwhile;
endif;

if ($isASAP) :
    // If ASAP request, return json object with page pieces
    $page_content = ob_get_clean();

    $asap_content = json_encode(array(
        ".myPageWrapper" => $page_content
    ));

    header("Content-length: " . strlen($asap_content));
    die($asap_content);
endif;
?>