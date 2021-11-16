window.onscroll = function () {
  setSticky();
};

const navbar = document.getElementById("nav-section");
const offset = navbar.offsetTop;

const setSticky = () => {
  if (window.pageYOffset >= offset) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
};
