// ! SLIDER START  //////////////////
// ? category card slider start
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const carousel = document.querySelector(".carousel-container");
const track = document.querySelector(".track");
let width = carousel.offsetWidth;
let index = 0;
window.addEventListener("resize", function () {
  width = carousel.offsetWidth;
});
next.addEventListener("click", function (e) {
  e.preventDefault();
  index = index + 0.8;
  prev.classList.add("show");
  track.style.transform = "translateX(" + index * -width + "px)";
  track.style.transition = "0.5s";
  if (track.offsetWidth - index * width < index * width) {
    next.classList.add("hide");
  }
});
prev.addEventListener("click", function () {
  index = index - 0.8;
  next.classList.remove("hide");
  if (index === 0) {
    prev.classList.remove("show");
  }
  track.style.transform = "translateX(" + index * -width + "px)";
  track.style.transition = "0.5s";
});
// ? category card slider end
// ////////////////////////////
// ? banner (top-header) slider start

const prevSlide = document.querySelector(".prev-slide");
const nextSlide = document.querySelector(".next-slide");
const bannerSlider = document.querySelector(".slider");
const sliderTrack = document.querySelector("#slidercontainer");
let widthh = bannerSlider.offsetWidth;
let indexx = 0;

window.addEventListener("resize", function () {
  widthh = bannerSlider.offsetWidth;
});
nextSlide.addEventListener("click", function (e) {
  e.preventDefault();
  indexx = indexx + 1.6;
  prevSlide.classList.add("show");
  sliderTrack.style.transform = "translateX(" + indexx * -width + "px)";
  sliderTrack.style.transition = "0.5s";
  if (3000 < indexx * widthh) {
    nextSlide.classList.add("hide");
  }
});
prevSlide.addEventListener("click", function () {
  indexx = indexx - 1.6;
  nextSlide.classList.remove("hide");
  if (indexx === 0) {
    prevSlide.classList.remove("show");
    console.log(indexx)
  }
  sliderTrack.style.transform = "translateX(" + indexx * -widthh + "px)";
  sliderTrack.style.transition = "0.5s";
});
// ? banner (top-header) slider end
// ! SLIDER END ////////////////////
