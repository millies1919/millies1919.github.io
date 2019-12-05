
//Sticky Nav Bar
const nav = document.querySelector("#main");
const topOfNav = nav.offsetTop;

function fixNav() {
    if(window.scrollY >= topOfNav) {
        document.body.style.paddingTop = nav.offsetHeight + 'px';
        document.body.classList.add('fixed-nav');
    } else {
        document.body.classList.remove('fixed-nav');
        document.body.style.paddingTop = 0;
    }
}

window.addEventListener('scroll', fixNav);


//Project Panel Transition
const panels = document.querySelectorAll('.panel');

function addOpen() {
    this.classList.add('open');
}

function addActive() {
        this.classList.add('open-active');
}

function removeOpen() {
    this.classList.remove('open');
}

function removeActive() {
        this.classList.remove('open-active');
}


panels.forEach(panel => panel.addEventListener('mouseenter', addOpen));
panels.forEach(panel => panel.addEventListener('mouseleave', removeOpen));
panels.forEach(panel => panel.addEventListener('mouseleave', removeActive));
panels.forEach(panel => panel.addEventListener('mouseenter', addActive));
