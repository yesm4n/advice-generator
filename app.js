"use strict";

console.log("Hello World");

const adviceNumber = document.querySelector(".advice-number");
const advice = document.querySelector(".advice");
const button = document.querySelector(".img-circle");

// Fetch API

const dynamicQuotes = () => {
  fetch(`https://api.adviceslip.com/advice`)
    .then((response) => {
      //   Need to convert response to JSON object
      // console.log(response);
      return response.json();
    })
    .then((data) => {
      //  Display id & advice with DOM
      // console.log(data);
      adviceNumber.textContent = `Advice #${data.slip.id}`;
      advice.textContent = data.slip.advice;
    })
    // Check for potential errors
    .catch((error) => {
      console.error(error);
      advice.textContent(
        `Something wrong on our end, try again in a few mins.`
      );
    });
};

dynamicQuotes();

function onClick() {
  button.addEventListener("click", dynamicQuotes);
  // dynamicQuotes();
}

onClick();
