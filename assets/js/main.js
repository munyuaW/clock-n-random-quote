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
