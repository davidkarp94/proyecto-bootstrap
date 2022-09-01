const app = document.getElementById('typewriter');

const typewriter = new Typewriter(app, {
    loop: true,
    delay: 75
});

typewriter
    .typeString('La Capital del Sol')
    .pauseFor(200)
    .start();

var x = window.matchMedia("(max-width: 768px)");
var navbar = document.getElementById("menu");

function stickyNavbar(x) {
    if(x.matches) {
        navbar.classList.remove("sticky-top");
    }
    else {
        navbar.classList.add("sticky-top");
    }
}

stickyNavbar(x);
x.addListener(stickyNavbar);