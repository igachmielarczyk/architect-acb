let mm = gsap.matchMedia();

gsap.to(".preloader", { delay:4, height: "100px", duration: 1.5, ease: "none", zIndex: 0});
gsap.to("#main-logo", { delay:4, height: "100px", width: "300px", duration: 1.5, ease: "none"});

mm.add("(max-width: 992px)", () => {

  gsap.to(".preloader", { delay:4, height: "70px", duration: 1.5, ease: "none", zIndex: 0});
gsap.to("#main-logo", { delay:4, height: "70px", width: "300px", duration: 1.5, ease: "none"});
});
