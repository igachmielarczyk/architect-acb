const swiperRealization = new Swiper(".swiper-realization", {
  slidesPerView: 1,
  spaceBetween: 10,
  centeredSlides: true,
  speed: 2000,
  loop: true,
  grab: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});