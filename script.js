const p = document.querySelector("p");
const numbers = document.querySelectorAll(".numbers");
const operators = document.querySelectorAll(".operators");
const equals = document.querySelector(".equal");
let holder1 = 0;
let holder2 = 0;
let result = 0;
let chosenOperator = "";

function clear() {
  const ac = document.querySelector("#clear");
  ac.addEventListener("click", () => {
    p.textContent = "";
  });
}

function numberInput() {
  numbers.forEach((number) => {
    number.addEventListener("click", () => {
      if (
        p.textContent.length < 9 &&
        p.textContent != "+" &&
        p.textContent != "-" &&
        p.textContent != "×" &&
        p.textContent != "÷"
      ) {
        p.textContent += number.value;
      } else {
        p.textContent = number.value;
      }
    });
  });
}

function operatorInput() {
  operators.forEach((operator) => {
    operator.addEventListener("click", () => {
      holder1 = Number(p.textContent);
      p.textContent = operator.value;
      chosenOperator = p.textContent;
    });
  });
}

// Multiple operation without clicking equal ?

function equal() {
  equals.addEventListener("click", () => {
    holder2 = Number(p.textContent);
    result = operate(chosenOperator, holder1, holder2);
    p.textContent = result;
  });
}

// Problem : equal works forever

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
  return (x / y).toFixed(2);
}

function operate(operator, int1, int2) {
  if (operator === "+") {
    return add(int1, int2);
  } else if (operator === "-") {
    return subtract(int1, int2);
  } else if (operator === "×") {
    return multiply(int1, int2);
  } else if (operator === "÷") {
    return divide(int1, int2);
  }
}

numberInput();
operatorInput();
clear();
equal();