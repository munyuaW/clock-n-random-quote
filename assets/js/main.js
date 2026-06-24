import setTime from "./clock-logic.js";
import { quotes } from "./quotes.js";

setTime();
setInterval(setTime, 1000);

// Random Quote Generator
const quote = document.querySelector(".quote");
const author = document.querySelector(".author");

function updateQuote() {
  let random = Math.floor(Math.random() * quotes.length);

  quote.innerText = quotes[random].quote;
  author.innerText = quotes[random].author;
}

updateQuote();
setInterval(updateQuote, 10000);

// Background Image Rotation
const container = document.querySelector(".container");
const images = [
  "river1.webp",
  "river2.webp",
  "river3.webp",
  "river4.webp",
  "river5.webp",
  "river6.webp",
  "river7.webp",
  "river8.webp",
  "river9.webp",
  "river10.webp",
];

let currentImageIndex = 0;

function changeBackgroundImage() {
  container.classList.remove("fade-in");

  setTimeout(() => {
    container.style.backgroundImage = `url(assets/images/${images[currentImageIndex]})`;
    container.classList.add("fade-in");
    currentImageIndex = (currentImageIndex + 1) % images.length;
  }, 50);
}

changeBackgroundImage();
setInterval(changeBackgroundImage, 10000);
