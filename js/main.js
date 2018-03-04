(function($) {
  "use strict";
  $(window).on("load", function() { // makes sure the whole site is loaded
    //preloader
    $("#status").fadeOut(); // will first fade out the loading animation
    $("#preloader").delay(450).fadeOut("slow"); // will fade out the white DIV that covers the website.

    //masonry
    $('.grid').masonry({
      itemSelector: '.grid-item'

    });
  });
  $( ".skill_category" ).click(function() {
    var skills = {
          "Front-End" : { "Angular" : 75, "jQuery" : 65, "CSS": 60 }
       ,  "Back-End" : { "Java : 6,7 & 8, Spring" : 70, "Python : Djano" : 58, "Nodejs": 45, "C": 50 }
       ,  "Data":  { "SQL : PL/SQL, Psql, Mysql " : 75, "MongoDB" :30}
       ,  "Buisness Intelligence":  { "D3JS" : 78, "Tableau Software" : 35 }
       ,  "Ops":  { "Amazon" : 45, "Docker" : 60 }
       ,  "Agile methodology":  { "Scrum" : 70, "Spotify Squad framework" : 60 }
       ,  "Practices":  { "TDD" : 70, "BDD" : 60 , "DDD" : 40 }
     };

    for (var category in skills) {
      $( ".skillst" ).empty()


      for (var skill in skills[category])
      {
        console.log(typeof skills[category][skill]);
        var title = '<div class="title head-sm">'+skill+'</div>'
        var countbar = '<div class="count-bar"><div class="count"></div></div>'
        var skillbar = '<div class="skillbar" data-percent="'+skills[category][skill]+'%">'+title+countbar+'</div>'

        $(".skillst").append(skillbar)
      }
    }

    jQuery('.skillbar').each(function() {
      animateSkills(jQuery(this))
    });
  });

  function animateSkills(element) {
    jQuery(element).appear(function() {
      jQuery(element).find('.count-bar').animate({
        width:jQuery(element).attr('data-percent')
      },3000);
      var percent = jQuery(element).attr('data-percent');
      jQuery(element).find('.count').html('<span>' + percent + '</span>');
    });              // The function returns the product of p1 and p2
  }

  $(document).ready(function(){

    //active menu
    $(document).on("scroll", onScroll);

    $('a[href^="#"]').on('click', function (e) {
      e.preventDefault();
      $(document).off("scroll");

      $('a').each(function () {
        $(this).removeClass('active');
      })
      $(this).addClass('active');

      var target = this.hash;
      $target = $(target);
      $('html, body').stop().animate({
        'scrollTop': $target.offset().top+2
      }, 500, 'swing', function () {
        window.location.hash = target;
        $(document).on("scroll", onScroll);
      });
    });


    //scroll js
    smoothScroll.init({
      selector: '[data-scroll]', // Selector for links (must be a valid CSS selector)
      selectorHeader: '[data-scroll-header]', // Selector for fixed headers (must be a valid CSS selector)
      speed: 500, // Integer. How fast to complete the scroll in milliseconds
      easing: 'easeInOutCubic', // Easing pattern to use
      updateURL: true, // Boolean. Whether or not to update the URL with the anchor hash on scroll
      offset: 0, // Integer. How far to offset the scrolling anchor location in pixels
      callback: function ( toggle, anchor ) {} // Function to run after scrolling
    });

    //menu
    var bodyEl = document.body,
    content = document.querySelector( '.content-wrap' ),
    openbtn = document.getElementById( 'open-button' ),
    closebtn = document.getElementById( 'close-button' ),
    isOpen = false;

    function inits() {
      initEvents();
    }

    function initEvents() {
      openbtn.addEventListener( 'click', toggleMenu );
      if( closebtn ) {
        closebtn.addEventListener( 'click', toggleMenu );
      }

      // close the menu element if the target it´s not the menu element or one of its descendants..
      content.addEventListener( 'click', function(ev) {
        var target = ev.target;
        if( isOpen && target !== openbtn ) {
          toggleMenu();
        }
      } );
    }

    function toggleMenu() {
      if( isOpen ) {
        classie.remove( bodyEl, 'show-menu' );
      }
      else {
        classie.add( bodyEl, 'show-menu' );
      }
      isOpen = !isOpen;
    }

    inits();


    //typed js
    $(".typed").typed({
        strings: ["My Name is G.Pellevoizin", "I'm a Fullstack Developper", "Love Simplicity"],
        typeSpeed: 100,
        backDelay: 900,
        // loop
        loop: true
    });

    //owl carousel
    $('.owl-carousel').owlCarousel({
      autoPlay: 3000, //Set AutoPlay to 3 seconds

      items : 1,
      itemsDesktop : [1199,1],
      itemsDesktopSmall : [979,1],
      itemsTablet : [768,1],
      itemsMobile : [479,1],

      // CSS Styles
      baseClass : "owl-carousel",
      theme : "owl-theme"
    });

    $('.owl-carousel2').owlCarousel({
      autoPlay: 3000, //Set AutoPlay to 3 seconds

      items : 1,
      itemsDesktop : [1199,1],
      itemsDesktopSmall : [979,1],
      itemsTablet : [768,1],
      itemsMobile : [479,1],
      autoPlay : false,

      // CSS Styles
      baseClass : "owl-carousel",
      theme : "owl-theme"
    });

    //contact
    $('input').blur(function() {

      // check if the input has any value (if we've typed into it)
      if ($(this).val())
        $(this).addClass('used');
      else
        $(this).removeClass('used');
    });

    //pop up porfolio
    $('.portfolio-image li a').magnificPopup({
      type: 'image',
      gallery: {
        enabled: true
      }
      // other options
    });



    //Skill
    jQuery('.skillbar').each(function() {
      animateSkills(jQuery(this))
    });

  });


  //header
  function inits() {
    window.addEventListener('scroll', function(e){
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = 300,
            header = document.querySelector(".for-sticky");
        if (distanceY > shrinkOn) {
            classie.add(header,"opacity-nav");
        } else {
            if (classie.has(header,"opacity-nav")) {
                classie.remove(header,"opacity-nav");
            }
          }
      });
    }

  window.onload = inits();

  //nav-active
  function onScroll(event){
    var scrollPosition = $(document).scrollTop();
    $('.menu-list a').each(function () {
      var currentLink = $(this);
      var refElement = $(currentLink.attr("href"));
      if (refElement.position().top <= scrollPosition && refElement.position().top + refElement.height() > scrollPosition) {
        $('.menu-list a').removeClass("active");
        currentLink.addClass("active");
      }
      else{
        currentLink.removeClass("active");
      }
    });
  }

})(jQuery);
