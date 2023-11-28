
// offer


ScrollTrigger.matchMedia({
  "(min-width: 768px)": function () {
    gsap.to('.offer-box:nth-child(1)', {
      yPercent: -10,
      scrollTrigger: {
          trigger: '.offer',
          start: '-40% 10%',
          end: '100% 50%',
          scrub: 1,
      }
    });
    gsap.to('.offer-box:nth-child(2)', {
      yPercent: 10,
      scrollTrigger: {
          trigger: '.offer',
          start: '-40% 10%',
          end: '100% 50%',
          scrub: 1,
      }
    });
    gsap.to('.offer-box:nth-child(3)', {
      yPercent: -10,
      scrollTrigger: {
          trigger: '.offer',
          start: '-40% 10%',
          end: '100% 50%',
          scrub: 1,
      }
    });
  },

});