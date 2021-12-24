
   $(function(){

    $('.menu>li').mouseover(function(){

      $(this).children('.sub').stop().slideDown();

    }).mouseout(function(){

      $('.sub').stop().slideUp();

    });

  });
  var slideIndex = 0;
  showSlides();
  
  function showSlides() {
    var i;
    var slides = document.getElementsByClassName("review_slide");
 
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
   
    
   
    slides[slideIndex-1].style.display = "block";  
    
    setTimeout(showSlides, 2000); // Change image every 2 seconds
  }