//? ANIMATION INTERVALE

//* ANIMATION TITLE 1
const elements1 = document.querySelectorAll(".animateThisTitle1 h1"); // Stocke tous les titres h1
let activeIndex1 = 0; // Indice du titre actif

// Fonction pour changer le titre actif
function changeActiveTitle1() {
    elements1[activeIndex1].classList.remove("active"); // Retire la classe "active" du titre actuel
    setTimeout(() => {
        activeIndex1 = (activeIndex1 + 1) % elements1.length; // Incrémente l'indice et boucle au début
        elements1[activeIndex1].classList.add("active"); // Ajoute la classe "active" au nouveau titre
    }, 1000);
}

// Début du défilement automatique
setInterval(changeActiveTitle1, 5000);

//* ANIMATION TITLE 2
const elements2 = document.querySelectorAll(".animateThisTitle2 h1");
let activeIndex2 = 0;
function changeActiveTitle2() {
    elements2[activeIndex2].classList.remove("active");
    setTimeout(() => {
        activeIndex2 = (activeIndex2 + 1) % elements2.length;
        elements2[activeIndex2].classList.add("active");
    }, 1000);
}

// Début du défilement automatique
setInterval(changeActiveTitle2, 5000);

//* ANIMATION PARAGRAPHE 1
const para1 = document.querySelectorAll(".animateThisPara1 p");
let activeIndexPara1 = 0;
function changeActivePara1() {
    para1[activeIndexPara1].classList.remove("active");
    setTimeout(() => {
        activeIndexPara1 = (activeIndexPara1 + 1) % para1.length;
        para1[activeIndexPara1].classList.add("active");
    }, 1000);
}

// Début du défilement automatique
setInterval(changeActivePara1, 5000);

//* ANIMATION PARAGRAPHE 2
const para2 = document.querySelectorAll(".animateThisPara2 p");
let activeIndexPara2 = 0;

function changeActivePara2() {
    para2[activeIndexPara2].classList.remove("active");
    setTimeout(() => {
        activeIndexPara2 = (activeIndexPara2 + 1) % para2.length;
        para2[activeIndexPara2].classList.add("active");
    }, 1000);
}

// Début du défilement automatique
setInterval(changeActivePara2, 5000);

//* ANIMATION IMAGE 
const imgHeader = document.querySelectorAll(".animateThisImg img");
let activeIndexImgHeader = 0;

function changeActiveimgHeader() {
    imgHeader[activeIndexImgHeader].classList.remove("active");
    setTimeout(() => {
        activeIndexImgHeader = (activeIndexImgHeader + 1) % imgHeader.length;
        imgHeader[activeIndexImgHeader].classList.add("active");
    }, 100);
}

// Début du défilement automatique
setInterval(changeActiveimgHeader, 5000);