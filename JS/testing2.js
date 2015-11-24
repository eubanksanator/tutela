$(document).ready(function(){
  $('.c-content').hide();

  $('.c-title-box').hover(
    function(){$('.c-content', $(this)).slideDown(500); },
      function(){$('.c-content', $(this)).slideUp(500);
      });

});

