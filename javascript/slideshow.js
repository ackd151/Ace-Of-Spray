// Ensure nodes exist before init
window.onload = function () {
  startSlideshows();
};

const startSlideshows = () => {
  // Get image refs
  const galleryImages = document.querySelectorAll(".gallery-image");
  const reviewImages = document.querySelectorAll(".review-image");

  // Init vars
  let galleryIndex = 0,
    reviewIndex = 0,
    galleryInterval = 5000,
    reviewInterval = 10000;

  // Set active class on first images
  galleryImages[galleryIndex].classList.add("active");
  reviewImages[reviewIndex].classList.add("active");

  // Start gallery slideshow
  startWithInterval(galleryImages, galleryIndex, galleryInterval);
  // Start review slideshow
  startWithInterval(reviewImages, reviewIndex, reviewInterval);

  // Slideshow function
  function startWithInterval(images, index, interval) {
    setInterval(() => {
      images[index].classList.remove("active");

      index++;

      if (index === images.length) {
        index = 0;
      }

      images[index].classList.add("active");
    }, interval);
  }
};
