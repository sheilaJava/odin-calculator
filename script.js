const p = document.querySelector("p");
const numbers = document.querySelectorAll(".numbers");
const operators = document.querySelectorAll(".operators");
const equals = document.querySelector(".equal");
let holder1 = 0;
let holder2 = 0;
let result = 0;
let chosenOperator = "";

function acClear() {
  const ac = document.querySelector("#clear");
  ac.addEventListener("click", () => {
    clear();
    p.textContent = "";
  });
}

function clear() {
  holder1 = 0;
  holder2 = 0;
  chosenOperator = "";
  result = 0;
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
      if (holder1 === 0) {
        holder1 = Number(p.textContent);
        p.textContent = operator.value;
        chosenOperator = p.textContent;
      } else if (holder1 != 0) {
        holder2 = Number(p.textContent);
        result = operate(chosenOperator, holder1, holder2);
        holder1 = result;
        p.textContent = operator.value;
        chosenOperator = p.textContent;
      }
    });
  });
}

function equal() {
  equals.addEventListener("click", () => {
    if (result === 0 || result === holder1) {
      holder2 = Number(p.textContent);
      result = operate(chosenOperator, holder1, holder2);
      p.textContent = result;
      holder1 = result;
    } else if (result != 0) {
      p.textContent = result;
    }
    clear();
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
  return Math.round((x / y) * 100) / 100;
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
acClear();
equal();
