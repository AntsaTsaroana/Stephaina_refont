//? LOCOMOTIVE SCROLL --------------------
// const scroll = new LocomotiveScroll({
//   el: document.querySelector('.main'),
//   smooth: true
// });

//? LENIS
const lenis = new Lenis()

// lenis.on('scroll', (e) => {
//   console.log(e)
// })

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)

//? NAVIGATION --------------------
//* BURGER MENU 

const hamburgerBtn = document.querySelector(".toggle-nav");

const navigation = document.querySelector(".nav-mobile");
const navigationActive = document.querySelector(".nav-mobile");

const linkApparition = document.querySelectorAll(".hideElement a");
const linkDesktop = document.querySelectorAll(".innerNav ul li a");

hamburgerBtn.addEventListener("click", toggleNav);

function toggleNav() {
  hamburgerBtn.classList.toggle("active");
  navigation.classList.toggle("active");

  if (hamburgerBtn.classList.contains("active")) {

    linkApparition.forEach((element) => {
      element.style.top = "0%";
      element.classList.add = "active";
    });
  } else {

    linkApparition.forEach((element) => {
      element.style.top = "85%";
      element.classList.remove = "active";
    });
  }
}

linkApparition.forEach((element) => {
  element.addEventListener("click", () => {
    hamburgerBtn.classList.toggle("active");
    navigation.classList.toggle("active");
  });
});

linkDesktop.forEach((link) => {
  link.addEventListener("click", () => {
    linkDesktop.forEach((lien) => {
      lien.classList.remove("active");
    });
    link.classList.add("active");
  });
});

