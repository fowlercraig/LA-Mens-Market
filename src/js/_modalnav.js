//$("#menuBtn").swap();

function navIn(){
  var d= 0;
  $('nav a').each(function() {
      $(this).delay(d).transition({
        opacity: 1,
        padding: '5px 0',
      },300);
      d += 200;
  });
  $("#splash--wrapper").transition({scale: .95});
}

function navOut(){
  var d= 0;
  $($("nav a").get().reverse()).each(function() {
      $(this).delay(d).transition({
        opacity: 0,
        padding: '0',
      },300);
      d += 200;
  });
  $("#splash--wrapper").transition({scale: 1});
}

var $menu = $(".toggle");

$(".toggle").swap();

$("#menuBtn").on("activate.swap", function(){
  navIn();
});

$("#menuBtn").on("deactivate.swap", function(){
  navOut();
});

$("#modal-nav a").swap();

$('.boom').on("activate.swap", function(){
  console.log('boom');
});