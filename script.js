const p = document.querySelector("p");
const numbers = document.querySelectorAll(".numbers");
const equals = document.querySelector(".equal");
let inputHolder = 0;
let inputHolder2 = 0;
let result = 0;

function clear() {
  const ac = document.querySelector("#clear");
  ac.addEventListener("click", () => {
    p.textContent = "";
  });
}

function numberInput() {
  numbers.forEach((number) => {
    number.addEventListener("click", () => {
      if (p.textContent.length < 9) {
        p.textContent += number.value;
        inputHolder = Number(p.textContent);
      }
    });
  });
}

function equal() {
  equals.addEventListener("click", () => {
    p.textContent = result.toString();
  });
}

function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
  return x / y;
}

function operate(operator, int1, int2) {
  if (operator === "+") {
    return add(int1, int2);
  } else if (operator === "-") {
    return subtract(int1, int2);
  } else if (operator === "*") {
    return multiply(int1, int2);
  } else if (operator === "÷") {
    return divide(int1, int2);
  }
}

numberInput();
clear();
equal();
