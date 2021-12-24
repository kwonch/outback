
   $(function(){

    $('.menu>li').mouseover(function(){

      $(this).children('.sub').stop().slideDown();

    }).mouseout(function(){

      $('.sub').stop().slideUp();

    });

  });
  var i=0;
  function slide(){
  i++;
  if (i > $('.review_slide p:last').index()){
  i=0;
  }
  $('.review_slide p').eq(i).stop().fadeIn('slow');
  $('.review_slide p').eq(i-1).stop().fadeOut();
  
  }
  
  setInterval(slide,3000);