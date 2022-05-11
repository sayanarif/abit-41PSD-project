$(function() {
  // Owl Carousel
  var owl = $(".owl-carousel");
  owl.owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        autoplay: true,
        smartSpeed: 600,
        dots: true,
        margin: 10,
        responsive: {
            0: {
                items: 3
            },
            600: {
                items: 4
            },
            960: {
                items: 6
            },
            1200: {
                items: 8
            }
          
        }
    });

});
//============= End Custom Sliders============//