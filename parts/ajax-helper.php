<?php
$page_object = get_queried_object();
$page_id     = get_queried_object_id();
?>

<script type="text/javascript">
var ajaxurl = '<?php echo admin_url('admin-ajax.php'); ?>';
var page_id = <?php echo $page_id; ?>;
</script>