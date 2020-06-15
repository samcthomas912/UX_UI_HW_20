$(function() {
    $('.aboutlink').hover(function() {
      $('.1').addClass("spinblock").css("background-color","#BD4F6C");
      $('.2').addClass("spinblock").css("background-color","#BD4F6C");
      $('.aboutlink.nav-item a').css("color", "#BD4F6C");
    }, function() {
      // on mouseout, reset the background colour
      $('.1').removeClass("spinblock").css("background-color","");
      $('.2').removeClass("spinblock").css("background-color","");
      $('.aboutlink.nav-item a').css("color", "");
    });
  });

  $(function() {
    $('.researchlink').hover(function() {
      $('.2').addClass("spinblock").css("background-color","#BD4F6C");
      $('.3').addClass("spinblock").css("background-color","#BD4F6C");
      $('.researchlink.nav-item a').css("color", "#BD4F6C");
    }, function() {
      // on mouseout, reset the background colour
      $('.2').removeClass("spinblock").css("background-color","");
      $('.3').removeClass("spinblock").css("background-color","");
      $('.researchlink.nav-item a').css("color", "");
    });
  });

  $(function() {
    $('.deflink').hover(function() {
      $('.3').addClass("spinblock").css("background-color","#BD4F6C");
      $('.4').addClass("spinblock").css("background-color","#BD4F6C");
      $('.deflink.nav-item a').css("color", "#BD4F6C");
    }, function() {
      // on mouseout, reset the background colour
      $('.3').removeClass("spinblock").css("background-color","");
      $('.4').removeClass("spinblock").css("background-color","");
      $('.deflink.nav-item a').css("color", "");
    });
  });

  $(function() {
    $('.idealink').hover(function() {
      $('.4').addClass("spinblock").css("background-color","#BD4F6C");
      $('.5').addClass("spinblock").css("background-color","#BD4F6C");
      $('.idealink.nav-item a').css("color", "#BD4F6C");
    }, function() {
      // on mouseout, reset the background colour
      $('.4').removeClass("spinblock").css("background-color","");
      $('.5').removeClass("spinblock").css("background-color","");
      $('.idealink.nav-item a').css("color", "");
    });
  });

  $(function() {
    $('.prototypelink').hover(function() {
      $('.5').addClass("spinblock").css("background-color","#BD4F6C");
      $('.6').addClass("spinblock").css("background-color","#BD4F6C");
      $('.prototypelink.nav-item a').css("color", "#BD4F6C");
    }, function() {
      // on mouseout, reset the background colour
      $('.5').removeClass("spinblock").css("background-color","");
      $('.6').removeClass("spinblock").css("background-color","");
      $('.prototypelink.nav-item a').css("color", "");
    });
  });

  $(function() {
    $('.testinglink').hover(function() {
      $('.6').addClass("spinblock").css("background-color","#BD4F6C");
      $('.7').addClass("spinblock").css("background-color","#BD4F6C");
      $('.testinglink.nav-item a').css("color", "#BD4F6C");
    }, function() {
      // on mouseout, reset the background colour
      $('.6').removeClass("spinblock").css("background-color","");
      $('.7').removeClass("spinblock").css("background-color","");
      $('.testinglink.nav-item a').css("color", "");
    });
  });

  $(function() {
    $('.conclusionlink').hover(function() {
      $('.7').addClass("spinblock").css("background-color","#BD4F6C");
      $('.8').addClass("spinblock").css("background-color","#BD4F6C");
      $('.conclusionlink.nav-item a').css("color", "#BD4F6C");
    }, function() {
      // on mouseout, reset the background colour
      $('.7').removeClass("spinblock").css("background-color","");
      $('.8').removeClass("spinblock").css("background-color","");
      $('.conclusionlink.nav-item a').css("color", "");
    });
  });


  $(function(){
    $('.section-header').hover(function(){
      $(".headblock").addClass("spinblock");
    }, function(){
      $(".headblock").removeClass("spinblock");
    })
  })


  //Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}