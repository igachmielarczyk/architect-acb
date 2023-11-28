const swiperCooperation = new Swiper(".swiper-cooperation", {
  slidesPerView: 1,
  spaceBetween: 10,
  centeredSlides: true,
  speed: 2000,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
  },
});