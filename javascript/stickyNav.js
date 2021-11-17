window.onscroll = function () {
  setSticky();
};

const navbar = document.getElementById("nav-section");
const navLogo = document.getElementById("nav-logo");
const offset = navbar.offsetTop;

const setSticky = () => {
  if (window.pageYOffset >= offset) {
    navbar.classList.add("sticky");
    navLogo.classList.add("visible");
  } else {
    navbar.classList.remove("sticky");
    navLogo.classList.remove("visible");
  }
};
