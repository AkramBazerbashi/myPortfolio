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




const underline1 = document.querySelector('.underline1');
const underline2 = document.querySelector('.underline2');
const underline3 = document.querySelector('.underline3');
const underline4 = document.querySelector('.underline4');
const heroAnch = document.getElementById('heroAnch');
const aboutMeAnch = document.getElementById('aboutMeAnch');
const projectsAnch = document.getElementById('projectsAnch');
const contactAnch = document.getElementById('contactAnch');

let heroIsSelected = false;
let aboutmeIsSelected = false;
let projectsIsSelected = false;
let contactIsSelected = false;

heroAnch.addEventListener('mouseover', () => {
    underline1.firstElementChild.firstElementChild.classList.add('active');
    underline1.lastElementChild.firstElementChild.classList.add('active');
})

heroAnch.addEventListener('mouseout', () => {
    if (!heroIsSelected) {
        underline1.firstElementChild.firstElementChild.classList.remove('active');
        underline1.lastElementChild.firstElementChild.classList.remove('active');
    }

})

aboutMeAnch.addEventListener('mouseover', () => {
    underline2.firstElementChild.firstElementChild.classList.add('active');
    underline2.lastElementChild.firstElementChild.classList.add('active');
})

aboutMeAnch.addEventListener('mouseout', () => {
    if (!aboutmeIsSelected) {
        underline2.firstElementChild.firstElementChild.classList.remove('active');
        underline2.lastElementChild.firstElementChild.classList.remove('active');
    }

})

projectsAnch.addEventListener('mouseover', () => {
    underline3.firstElementChild.firstElementChild.classList.add('active');
    underline3.lastElementChild.firstElementChild.classList.add('active');
})

projectsAnch.addEventListener('mouseout', () => {
    if (!projectsIsSelected) {
        underline3.firstElementChild.firstElementChild.classList.remove('active');
        underline3.lastElementChild.firstElementChild.classList.remove('active');
    }

})

contactAnch.addEventListener('mouseover', () => {
    underline4.firstElementChild.firstElementChild.classList.add('active');
    underline4.lastElementChild.firstElementChild.classList.add('active');
})

contactAnch.addEventListener('mouseout', () => {
    if (!contactIsSelected) {
        underline4.firstElementChild.firstElementChild.classList.remove('active');
        underline4.lastElementChild.firstElementChild.classList.remove('active');
    }

})




window.onload = function () {
    heroIsSelected = true;
    underline1.firstElementChild.firstElementChild.classList.add('active');
    underline1.lastElementChild.firstElementChild.classList.add('active');
}



window.addEventListener('scroll', () => {
    if (window.scrollY >= 0) {
        heroIsSelected = true;
        aboutmeIsSelected = false;
        projectsIsSelected = false;
        contactIsSelected = false;
        underline1.firstElementChild.firstElementChild.classList.add('active');
        underline1.lastElementChild.firstElementChild.classList.add('active');
        underline2.firstElementChild.firstElementChild.classList.remove('active');
        underline2.lastElementChild.firstElementChild.classList.remove('active');
        underline3.firstElementChild.firstElementChild.classList.remove('active');
        underline3.lastElementChild.firstElementChild.classList.remove('active');
        underline4.firstElementChild.firstElementChild.classList.remove('active');
        underline4.lastElementChild.firstElementChild.classList.remove('active');
    }
});

window.addEventListener('scroll', () => {
    if (window.scrollY >= 550) {
        heroIsSelected = false;
        aboutmeIsSelected = true;
        projectsIsSelected = false;
        contactIsSelected = false;
        underline1.firstElementChild.firstElementChild.classList.remove('active');
        underline1.lastElementChild.firstElementChild.classList.remove('active');
        underline2.firstElementChild.firstElementChild.classList.add('active');
        underline2.lastElementChild.firstElementChild.classList.add('active');
        underline3.firstElementChild.firstElementChild.classList.remove('active');
        underline3.lastElementChild.firstElementChild.classList.remove('active');
        underline4.firstElementChild.firstElementChild.classList.remove('active');
        underline4.lastElementChild.firstElementChild.classList.remove('active');

    }
});

window.addEventListener('scroll', () => {
    if (window.scrollY >= 1460) {
        heroIsSelected = false;
        aboutmeIsSelected = false;
        projectsIsSelected = true;
        contactIsSelected = false;
        underline1.firstElementChild.firstElementChild.classList.remove('active');
        underline1.lastElementChild.firstElementChild.classList.remove('active');
        underline2.firstElementChild.firstElementChild.classList.remove('active');
        underline2.lastElementChild.firstElementChild.classList.remove('active');
        underline3.firstElementChild.firstElementChild.classList.add('active');
        underline3.lastElementChild.firstElementChild.classList.add('active');
        underline4.firstElementChild.firstElementChild.classList.remove('active');
        underline4.lastElementChild.firstElementChild.classList.remove('active');
    }
});

window.addEventListener('scroll', () => {
    if (window.scrollY >= 1700) {
        heroIsSelected = false;
        aboutmeIsSelected = false;
        projectsIsSelected = false;
        contactIsSelected = true;
        underline1.firstElementChild.firstElementChild.classList.remove('active');
        underline1.lastElementChild.firstElementChild.classList.remove('active');
        underline2.firstElementChild.firstElementChild.classList.remove('active');
        underline2.lastElementChild.firstElementChild.classList.remove('active');
        underline3.firstElementChild.firstElementChild.classList.remove('active');
        underline3.lastElementChild.firstElementChild.classList.remove('active');
        underline4.firstElementChild.firstElementChild.classList.add('active');
        underline4.lastElementChild.firstElementChild.classList.add('active');
    }
});





console.log(window.scrollY);


const header = document.getElementById('home');

let lastScroll = 0;

window.addEventListener('scroll', () => {
    const curScroll = window.scrollY;

    if (curScroll > lastScroll && window.scrollY > 100 && !header.classList.contains('scrollDown')) {
        header.classList.add('scrollDown');
    }
    if (curScroll < lastScroll && header.classList.contains('scrollDown')) {
        header.classList.remove('scrollDown');
    }

    lastScroll = curScroll;
});




const front = document.getElementById('front');
const back = document.getElementById('back');
const frontList = document.getElementById('frontList');
const backList = document.getElementById('backList');

front.addEventListener('click',()=>{
    frontList.style.display= "flex";
    backList.style.display= "none";
})

back.addEventListener('click',()=>{
    backList.style.display= "flex";
    frontList.style.display= "none";
})