//? ALL ANIMATION HERE
gsap.registerPlugin(ScrollTrigger);

//* Recrutement 
gsap.from(".recrutementText .hideElement h3, .service .hidden h2", {
    scrollTrigger: {
        trigger: ".recrutementText",
        toggleActions: "play none none reverse",
        // markers: true,
        start: "top 75%",
        end: "bottom 65%",
    },
    y: 100,
    duration: 1,
    ease: "expo.out",
})

gsap.from(".btnRecrutement", {
    scrollTrigger: {
        trigger: ".recrutementText",
        toggleActions: "play none none reverse",
        // markers: true,
        start: "top 65%",
        end: "bottom 55%",
    },
    scale: 0,
    opacity: 0,
    ease: "expo.out",
    duration: 1,
    delay: 1,
})

gsap.from(".recrutementContent", {
    scrollTrigger: {
        trigger: ".recrutementType",
        toggleActions: "play none none reverse",
        // markers: true,
        start: "top 85%",
        end: "bottom 75%",
        scrub: 2
    },
    scale: 0,
    opacity: 0,
    duration: 1,
    stagger: 0.5,
})

//* SERVICE
gsap.from(".service .hideElement h2", {
    scrollTrigger: {
        trigger: ".servH2",
        toggleActions: "play none none reverse",
        // markers: true,
        start: "top 75%",
        end: "bottom 65%",
    },
    y: 100,
    duration: 1,
    ease: "expo.out",
})

gsap.from(".service .hideElement p", {
    scrollTrigger: {
        trigger: ".servH2",
        toggleActions: "play none none reverse",
        // markers: true,
        start: "top 75%",
        end: "bottom 65%",
    },
    y: 100,
    duration: 1,
    ease: "expo.out",
    delay: 0.5
})

gsap.from("#f-right", {
    scrollTrigger: {
        trigger: "#pinService",
        toggleActions: "play none none reverse",
        // markers: true,
        start: "top 65%",
        end: "bottom 55%",
        scrub: 2
    },
    xPercent: -150,
    duration: 1,
    ease: "expo.out",
    delay: 0.5,
})

gsap.from(".f-left", {
    scrollTrigger: {
        trigger: "#pinService",
        toggleActions: "play none none reverse",
        // markers: true,
        start: "top 65%",
        end: "bottom 55%",
        scrub: 2
    },
    xPercent: 150,
    duration: 1,
    ease: "expo.out",
    delay: 0.5,
})

//* ANOTHER SECTION
gsap.from(".anotherSection .hideElement h2", {
    scrollTrigger: {
        trigger: ".anotH2",
        toggleActions: "play none none reverse",
        // markers: true,
        start: "top 75%",
        end: "bottom 65%",
    },
    y: 100,
    duration: 1,
    ease: "expo.out",
})

gsap.from(".anotherSection .hideElement p", {
    scrollTrigger: {
        trigger: ".anotH2",
        toggleActions: "play none none reverse",
        // markers: true,
        start: "top 75%",
        end: "bottom 65%",
    },
    y: 100,
    duration: 1,
    ease: "expo.out",
    delay: 0.5
})

gsap.from(".welcomeImg img", {
    scrollTrigger: {
        trigger: ".welcomeImg",
        // markers: true,
        start: "top 65%",
        end: "top 25%",
        scrub: 2
    },
    scale: 0,
    opacity: 0,
    duration: 1
})

//* LOCALISATION
gsap.from(".localisation .hideElement h2, .localisation .hideElement p", {
    scrollTrigger: {
        trigger: ".localH2",
        toggleActions: "play none none reverse",
        // markers: true,
        start: "top 75%",
        end: "bottom 65%",
    },
    y: 100,
    duration: 1,
    ease: "expo.out",
    stagger: 0.2
})

gsap.from(".test", {
    scrollTrigger: {
        trigger: ".btnLieu",
        toggleActions: "play none none reverse",
        // markers: true,
        start: "top 65%",
        end: "bottom 45%",
        scrub: 2
    },
    scale: 0,
    ease: "expo.out",
    stagger: 0.1,
})

gsap.from(".mapouter", {
    scrollTrigger: {
        trigger: ".map",
        // markers: true,
        start: "top 75%",
        end: "top 35%",
        scrub: 2
    },
    scale: 2,
    duration: 1
})

//* FOOTER
gsap.from(".foot", {
    scrollTrigger: {
        trigger: "footer",
        toggleActions: "play none none reverse",
        // markers: true,
        start: "top 95%",
        end: "25% 75%",
        scrub: 3
    },
    scale: 0,
    duration: 3,
    ease: "expo.out",
    stagger: 0.5
}) 

 
