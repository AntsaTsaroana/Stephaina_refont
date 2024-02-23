// Anime l'élément ".left-elem" en fonction de sa position dans la fenêtre
gsap.to(".left-elem, .right-elem", {
    // Utilise un déclencheur pour animer l'élément lorsque la condition est remplie
    scrollTrigger: {
        // Définit le déclencheur de l'animation
        trigger: "#pinService",
        // Active la fonctionnalité de pin
        pin: true,
        // markers: true,
        // Définit le point de départ de l'animation
        start: "top 5%",
        // Définit le point d'arrêt de l'animation
        end: "bottom bottom",
        // Définit l'élément qui déclenche l'arrêt de l'animation
        endTrigger: ".last",
        // Définit la durée de l'animation en fonction de la distance parcourue sur l'axe des y
        scrub: 0.5,
    },
    // Définit la distance de déplacement de l'élément en y-axe
    y: "-300%",
    // Définit l'éasing de l'animation
    ease: Power1,
});

