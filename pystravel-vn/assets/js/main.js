const nav = document.querySelector(".header__nav");
const section1 = document.querySelector(".infos");

const initialCoords = section1.getBoundingClientRect();

window.addEventListener("scroll", function (e) {
  if (this.window.scrollY > initialCoords.top) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
});

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
