
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

  $(function(){
    
    $(".steak_in1").click(function(){
    
      $(".steak_tbone").fadeIn("slow");
      $(".steak_tomahawk").fadeOut("slow");
      $(".steak_blacklabel").fadeOut("slow");
      $(".steak_fa").fadeOut("slow");
    });

    $(".steak_in2").click(function(){
    
        $(".steak_tbone").fadeOut("slow");
        $(".steak_tomahawk").fadeIn("slow");
        $(".steak_blacklabel").fadeOut("slow");
        $(".steak_fa").fadeOut("slow");
    });
    $(".steak_in3").click(function(){
     
      $(".steak_tbone").fadeOut("slow");
      $(".steak_tomahawk").fadeOut("slow");
      $(".steak_blacklabel").fadeIn("slow");
      $(".steak_fa").fadeOut("slow");
  });
  $(".steak_in4").click(function(){
  
    $(".steak_tbone").fadeOut("slow");
    $(".steak_tomahawk").fadeOut("slow");
    $(".steak_blacklabel").fadeOut("slow");
    $(".steak_fa").fadeIn("slow");
});

  });

  $(function(){
    
    $(".steak_in1").click(function(){
      $(".steak_in1").css({color:'#ba2b31'});
      $(".steak_in2").css({color:'white'});
      $(".steak_in3").css({color:'white'});
      $(".steak_in4").css({color:'white'});
    })
    $(".steak_in2").click(function(){
      $(".steak_in1").css({color:'white'});
      $(".steak_in2").css({color:'#ba2b31'});
      $(".steak_in3").css({color:'white'});
      $(".steak_in4").css({color:'white'});
    });
    $(".steak_in3").click(function(){
      $(".steak_in1").css({color:'white'});
      $(".steak_in2").css({color:'white'});
      $(".steak_in3").css({color:'#ba2b31'});
      $(".steak_in4").css({color:'white'});
    });
    $(".steak_in4").click(function(){
      $(".steak_in1").css({color:'white'});
      $(".steak_in2").css({color:'white'});
      $(".steak_in3").css({color:'white'});
      $(".steak_in4").css({color:'#ba2b31'});
    
  });
}); 


$(function(){
  $('.ham').click(function(){
      $('.nav3').slideToggle();
  });
});

$(window).resize(function () {

if (window.innerWidth > 1199);
  $('.nav3').hide();
      
});

$(function(){

  $('.menu3>li').click(function(){

    $('.sub3').stop().slideUp();

    $(this).find('.sub3').stop().slideToggle();

  });

});
$(function(){
  $( ".chef:nth-of-type(1)").mouseover(function(){
   $(" .chef:nth-of-type(1) .icon>i").css("display", "inline-block")
  });

  $(".chef:nth-of-type(1)").mouseout(function(){
    $(" .chef .icon>i").css("display", "none")
  });
});
$(function(){
  $( ".chef:nth-of-type(2)").mouseover(function(){
   $(" .chef:nth-of-type(2) .icon>i").css("display", "inline-block")
  });

  $(".chef:nth-of-type(2)").mouseout(function(){
    $(" .chef .icon>i").css("display", "none")
  });
});
$(function(){
  $( ".chef:nth-of-type(3)").mouseover(function(){
   $(" .chef:nth-of-type(3) .icon>i").css("display", "inline-block")
  });

  $(".chef:nth-of-type(3)").mouseout(function(){
    $(" .chef .icon>i").css("display", "none")
  });
});



  


