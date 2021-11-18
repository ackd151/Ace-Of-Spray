window.onload = function () {
  startSlideshow();
};

const startSlideshow = () => {
  const images = document.querySelectorAll(".gallery-image");

  let index = 0,
    interval = 5000;
  images[index].classList.add("active");

  setInterval(() => {
    images[index].classList.remove("active");

    index++;

    if (index === images.length) {
      index = 0;
    }

    images[index].classList.add("active");
  }, interval);
};
