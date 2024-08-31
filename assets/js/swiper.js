// populaire swiper
var swiper = new Swiper(".populaire-swp ", {
    pagination: {
      el: ".swiper-pagination",
    },
    loop: true,
    slidesPerView:3,
    spaceBetween: 30,
    autoplay:{
      delay:2500,
    },
    breakpoints: {
      1500: {
        slidesPerView: 4,
      },
      1200: {
        slidesPerView: 3,
      },
      700: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      0: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
    },
  });