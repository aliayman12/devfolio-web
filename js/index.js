const typed = new Typed("#element", {
  strings: ["Developer", "Freelancer", "Photographer", "Designer"],
  typeSpeed: 150,
  backSpeed: 70,
  loop: true,
  loopCount: Infinity,
});

const navbar = document.getElementById("navbar-spy");

window.onscroll = function () {
  if (window.scrollY > 50) {
    navbar.classList.add("navbar-scrolled");
  } else {
    navbar.classList.remove("navbar-scrolled");
  }
};
