document.querySelectorAll(".slider").forEach((n, i) => {
  window[`slider${i + 1}`] = new Swiper(n, {
    freeMode: true,
    centeredSlides: true,
    direction: "vertical",
    mousewheel: true,
    slidesPerView: 1.75,
    slidesOffsetBefore: -125,
  });
});

bindSwipers(slider1, slider2, slider3, slider4);

function handleScroll() {
  // Pin the main-wrapper based on its height
  gsap.to(".main-wrapper", {
    scrollTrigger: {
      trigger: ".main-wrapper",
      start: "top top",
      end: "+=" + document.querySelector(".main-wrapper").offsetHeight,
      pin: true,
      pinSpacing: false,
    },
  });

  // Animate the third div (pink-600) to appear after scrolling past the main-wrapper
  gsap.from(".bg-pink-600", {
    scrollTrigger: {
      trigger: ".main-wrapper",
      start: "top top",
      end: "+=200%", // Adjust the value based on when you want the animation to start
      toggleActions: "play none none reverse",
    },
    opacity: 0,
    duration: 1,
  });
}

// Call the function when the DOM is loaded
document.addEventListener("DOMContentLoaded", handleScroll);
