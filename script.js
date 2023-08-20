"use strict";

const calc = document.querySelector(".calc");
const display = document.querySelector(".calc-display");

let str = "";
let first = "";
let operator = "";
let second = "";
let arr = [];
let total = 0;

calc.addEventListener("click", function (e) {
  // console.log(e);
  let nums = e.target.textContent;

  if (e.target.textContent === "Clear") {
    str = "";
    nums = 0;
    first = "";
    operator = "";
    second = "";
    arr = [];
    display.textContent = "";
  }

  if (e.target.className === "buttons operator") {
    operator = e.target.textContent;
    console.log(operator);
  }

  if (
    e.target.textContent === "=" ||
    (arr.length >= 3 && e.target.textContent === "+") ||
    (arr.length >= 3 && e.target.textContent === "-") ||
    (arr.length >= 3 && e.target.textContent === "*") ||
    (arr.length >= 3 && e.target.textContent === "/")
  ) {
    console.log(arr.length);

    let [fValue, sValue, oValue] = arraySplit(arr);
    console.log(`$fValue beginning: ${fValue}`);

    // console.log(fValue, sValue, oValue);
    if (oValue === "+") {
      console.log(add(+fValue, +sValue));
      total = add(+fValue, +sValue);
      display.textContent = add(+fValue, +sValue);
    }
    if (oValue === "-") {
      total = subtract(+fValue, +sValue);
      display.textContent = subtract(+fValue, +sValue);
    }
    if (oValue === "*") {
      total = multiply(+fValue, +sValue);
      display.textContent = multiply(+fValue, +sValue);
    }
    if (oValue === "/") {
      total = divide(+fValue, +sValue);
      display.textContent = divide(+fValue, +sValue);
    }
    console.log(`Total: ${total}`);

    arr = [];
    arr[0] = total;
    console.log(arr);

    // console.log(arr.splice(0, 3, total));
  }
  if (
    e.target.localName === "button" &&
    e.target.textContent !== "=" &&
    e.target.textContent !== "Clear"
  ) {
    str += nums;
    arr.push(nums);
    // console.log(str);

    display.textContent = str;
  }
});

const arraySplit = function (arr) {
  const index = arr.indexOf(operator);
  const first = arr.slice(0, index).join("");
  const second = arr.slice(index + 1).join("");
  console.log(`First: ${first} Second: ${second} Operator: ${operator}`);

  let valueArray = [first, second, operator];

  return valueArray;
};

const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const multiply = function (a, b) {
  return a * b;
};

const divide = function (a, b) {
  return a / b;
};
