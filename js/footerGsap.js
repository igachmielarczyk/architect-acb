


ScrollTrigger.matchMedia({
  "(min-width: 1200px)": function () {
    gsap.to('.f1', {
      yPercent: -10,
      scrollTrigger: {
          trigger: 'footer',
          start: '-50% 50%',
          end: '100% 50%',
          scrub: 1,
      }
    });
    gsap.to('.f2', {
      yPercent: 30,
      scrollTrigger: {
          trigger: 'footer',
          start: '-50% 50%',
          end: '100% 50%',
          scrub: 1,
      }
    });
    gsap.to('.f3', {
      yPercent: -10,
      scrollTrigger: {
          trigger: 'footer',
          start: '-50% 50%',
          end: '100% 50%',
          scrub: 1,
      }
    });
    gsap.to('.f4', {
      yPercent: 30,
      scrollTrigger: {
          trigger: 'footer',
          start: '-50% 50%',
          end: '100% 50%',
          scrub: 1,
      }
    });
    
  },
});