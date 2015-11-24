$(document).ready(function(){
  $('.biz-hover').hide();

  $('.biz-list li').hover(
    function() { $('.biz-hover', $(this)).show(); },
    function() { $('.biz-hover', $(this)).hide(); }
    );
});


//    JAVASCRIPT FOR INDEX2.HTML
//
//


// $(document).ready(function(){
//   $('.panel-body').hide();

//   $('.panel-heading').hover(
//     function() { $('panel-body', $(this)).show(); },
//     function() { $('panel-body', $(this)).hide(); }
//     );
// });

// $(document).ready(function(){
//   $('.business-list > img').hover(
//     function(){
//       $('.business-list-content').show(
//         function(){
//           $('.business-list-content').addClass('animated bounceOutUp');
//         });
//     });
// });


$(document).ready(function(){
  $('.b-ul li p').hide();

  $('.b-ul li').click(
    function() { $('.b-ul li p', $(this)).show(); },
    function() { $('.b-ul li p', $(this)).hide(); }
    );
});


// $(document).ready(function(){
//   $('.c-list-container2').hide();

//   $('.c-list-title').click(
//     function() { $('.c-list-container2').show(); },
//     function() { $('.b-ul li p').hide(); }
//     );
// });

// $(".c-list-title").hover(
//   function(){
//     $('c-list-container2').collapse('show');
//   }, function() {
//     $('c-list-container2').collapse('hide');
//   });


// $('.c-list-title1').hover(
//   function(){ $('c-list-container1').show(); },
//   function(){ $('c-list-container1').hide(); }
//   );

