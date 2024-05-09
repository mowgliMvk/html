const slides = document.querySelectorAll(".slide");
const maxSlide = slides.length - 1;
let curSlide = 0;

const setSlidePositions = () => {
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
};

const nextSlide = () => {
  curSlide = (curSlide + 1) % (maxSlide + 1);
  setSlidePositions();
};

const prevSlide = () => {
  curSlide = (curSlide - 1 + maxSlide + 1) % (maxSlide + 1);
  setSlidePositions();
};

const nextBtn = document.querySelector(".btn-next");
nextBtn.addEventListener("click", nextSlide);

const prevBtn = document.querySelector(".btn-prev");
prevBtn.addEventListener("click", prevSlide);

setInterval(nextSlide, 5000);
