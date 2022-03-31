const burger = document.querySelector(".burger");
const inside = document.querySelector(".inside");
const hum = document.querySelector(".hum");
const nav = document.querySelector("nav");
const arrow = document.querySelector(".arrow");
const hero = document.getElementById("heroAnch");
const aboutMe = document.getElementById("aboutMeAnch");
const projects = document.getElementById("projectsAnch");
const contact = document.getElementById("contactAnch");

burger.addEventListener('click', function () {
    burger.classList.toggle('toggled');
});

hum.addEventListener('click', function () {
    nav.classList.toggle('openNav');
});

document.addEventListener('scroll', function () {
    if (window.scrollY >= 500) {
        arrow.classList.add('arrow-show');
        arrow.classList.remove('arrow-hide');
    }
    else if (window.scrollY < 500) {
        arrow.classList.add('arrow-hide');
        arrow.classList.remove('arrow-show');
    }
    console.log(window.scrollY);

});

// hero.addEventListener('click', function () {
//     window.scrollY = 0;
// });

// aboutMe.addEventListener('click', function () {
//     window.scrollY = 600;
// });

// projects.addEventListener('click', function () {
//     window.scrollY = 1600;
// });

// contact.addEventListener('click', function () {
//     window.scrollY = 1850;
// });

