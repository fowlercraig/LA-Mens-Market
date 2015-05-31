// @codekit-prepend "_modalnav.js"
// @codekit-prepend "_pronto.js"

$(function(){

  function about(){
    $("#quotes").carousel({
      show: 1,
      autoAdvance: true,
      pagination: true,
      controls: false
    });
    $("#brands").carousel({
      show: {
        "320px" : 1,
        "960px" : 4
      },
      infinite: true,
      controls: false,
    });
  }
  about();
  $("select").dropdown();
  $("#splash--nav").navigation({
    labels: {
      closed: '',
      open: '',
    }
  });

  // External Links New Window

  $('a').each(function() {
   var a = new RegExp('/' + window.location.host + '/');
   if(!a.test(this.href)) {
       $(this).click(function(event) {
           event.preventDefault();
           event.stopPropagation();
           window.open(this.href, '_blank');
       });
   }
});

  setTimeout(function(){
    $('#splash--video').animate({
      opacity: 1,
    }, 1200);
  }, 2000);

  $('.popup').magnificPopup({
    type: 'inline',
    preloader: false,
    focus: '#name',
    mainClass: 'my-mfp-slide-bottom',

    // When elemened is focused, some mobile browsers in some cases zoom in
    // It looks not nice, so we disable it:
    callbacks: {
      beforeOpen: function() {
        if($(window).width() < 700) {
          this.st.focus = false;
        } else {
          this.st.focus = '#name';
        }

      },
      open: function() {
        $("#quotes").carousel({
      show: 1,
      autoAdvance: true,
      pagination: false,
    });
    $("#brands").carousel();
      }
    }
  });

  $('.modal').magnificPopup({
    type: 'ajax',
    mainClass: 'content-page',
    callbacks : {
      parseAjax: function(mfpResponse) {
        mfpResponse.data = $(mfpResponse.data).find('#content');

      },
      ajaxContentAdded: function() {
        about();
      }
    },
    //alignTop: center,
    overflowY: 'scroll' // as we know that popup content is tall we set scroll overflow by default to avoid jump
  });

  // $(window).load(function () {
  //       // retrieved this line of code from http://dimsemenov.com/plugins/magnific-popup/documentation.html#api
  //       $.magnificPopup.open({
  //           items: {
  //             src: '#splash--signup',
  //             type: 'inline'
  //           },
  //           preloader: false,
  //           mainClass: 'my-mfp-slide-bottom',

  //         // You may add options here, they're exactly the same as for $.fn.magnificPopup call
  //         // Note that some settings that rely on click event (like disableOn or midClick) will not work here
  //       }, 0);
  //   });


});