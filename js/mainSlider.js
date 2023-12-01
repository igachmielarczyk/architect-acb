
const swiper = new Swiper(".swiper-header", {
  slidesPerView: 1,
  centeredSlides: true,
  speed: 2000,
  effect: "fade",
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  on: {
    init: function () {
      // Opóźnienie tylko pierwszego slajdu
      this.autoplay.stop(); // Zatrzymaj autoplay na starcie
      setTimeout(() => {
        this.autoplay.start(); // Uruchom autoplay po określonym opóźnieniu
      }, 6000); // Ustaw opóźnienie dla pierwszego slajdu (np. 2000 ms)
    },
  },
});
