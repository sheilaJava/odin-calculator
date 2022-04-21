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
  p.textContent = "";
  numbers.forEach((number) => {
    number.addEventListener("click", () => {
      if (p.textContent.length < 9) {
        p.textContent += number.value;
      }
    });
  });
}

function operatorInput() {
  operators.forEach((operator) => {
    operator.addEventListener("click", () => {
      holder1 = Number(p.textContent);
      p.textContent = operator.value;
    });
  });
}

function equal() {
  equals.addEventListener("click", () => {
    p.textContent = result.toString();
    result = 0;
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

//chosenOperator = operatorInput();

// if (holder1 === 0 && result === 0) {
//   numberInput();
// } else if (holder1 === 0 && result != 0) {
//   holder1 = result;
// } else {
//   numberInput()
// }

// if (chosenOperator && holder1 && holder2) {
//   result = operate(operator, holder1, holder2);
// }

numberInput();
operatorInput();
clear();
equal();
