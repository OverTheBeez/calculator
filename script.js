"use strict";

const calc = document.querySelector(".calc");
const display = document.querySelector(".calc-display");

calc.addEventListener("click", function (e) {
  console.log(e);

  //   if(e.target.localName !== "button") (possible guard clause for if the user clicks on the div, don't proceed or do anything (we'll see))
  if (e.target.localName === "button") {
    console.log("Button Clicked");
    console.log(e.target.innerText);
    display.textContent = e.target.innerText;
  } else {
    console.log("Div Clicked");
  }
});

const add = function (a, b) {};

const subtract = function (a, b) {};

const multiply = function (a, b) {};

const divide = function (a, b) {};
