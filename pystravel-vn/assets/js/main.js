$(".partner .owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  dots: false,
  nav: true,
  navText: [
    "<i class='fa fa-angle-left' aria-hidden='true'></i>",
    "<i class='fa fa-angle-right' aria-hidden='true'></i>",
    ,
  ],

  responsive: {
    0: {
      items: 3,
    },
    600: {
      items: 5,
    },
    1000: {
      items: 7,
    },
  },
});

$(".slider .owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  dots: false,
  nav: true,
  navText: [
    "<i class='fa fa-arrow-circle-left' aria-hidden='true'></i>",
    "<i class='fa fa-arrow-circle-right' aria-hidden='true'></i>",
    ,
  ],

  responsive: {
    0: {
      items: 1,
    },

    1000: {
      items: 2,
    },
  },
});
