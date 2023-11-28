// import Swiper, { Navigation, Pagination } from 'swiper';
// import 'swiper/swiper.min.css';

// Swiper.use([Navigation, Pagination]);
// import Swiper from 'swiper';
// import { Navigation, Pagination } from 'swiper/modules';
// // import Swiper and modules styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// const mainSlider = new Swiper('.swiper-container', {
//   slidesPerView: 1,
//   spaceBetween: 10,
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true,
//   },
//   on: {
//     init: function () {
//       showLoader();
//       preloadImages(this).then(() => {
//         hideLoader();
//         updateSlideBackgrounds(this);
//       });
//     },
//     slideChange: function () {
//       updateSlideBackgrounds(this);
//     },
//   },
// });

// function showLoader() {
//   const preloader = document.querySelector('.preloader');
//   preloader.style.display = 'block';
//   preloader.classList.add('show');
// }

// function hideLoader() {
//   setTimeout(() => {
//     const preloader = document.querySelector('.preloader');
//     preloader.classList.add('hide');
//     preloader.classList.remove('show');
//     setTimeout(() => {
//       preloader.classList.remove('hide');
//       preloader.style.display = 'none';
//     }, 1500);
//   }, 5000);
// }

// function preloadImages(swiper) {
//   return new Promise((resolve) => {
//     var slides = swiper.el.querySelectorAll('.swiper-slide');
//     var imagesToLoad = slides.length;
//     var imagesLoaded = 0;

//     function imageLoaded() {
//       imagesLoaded++;
//       if (imagesLoaded === imagesToLoad) {
//         resolve();
//       }
//     }

//     slides.forEach(function (slide) {
//       var imageSrc = slide.getAttribute('data-image');
//       var image = new Image();
//       image.src = imageSrc;
//       image.onload = imageLoaded;
//       image.onerror = imageLoaded;
//     });
//   });
// }

// function updateSlideBackgrounds(swiper) {
//   var slides = swiper.el.querySelectorAll('.swiper-slide');

//   slides.forEach(function (slide) {
//     var image = slide.getAttribute('data-image');
//     slide.style.backgroundImage = 'url(' + image + ')';
//   });
// }

// init Swiper:
const swiper = new Swiper(".swiper-header", {
  slidesPerView: 1,
  centeredSlides: true,
  speed: 2000,
  direction: "vertical",
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
