const p = document.querySelector("p");
const numbers = document.querySelectorAll(".numbers");
let inputHolder = 0;

function clear() {
  const ac = document.querySelector("#clear");
  ac.addEventListener("click", () => {
    p.textContent = "";
  });
}

function numberInput() {
  numbers.forEach((number) => {
    number.addEventListener("click", () => {
      p.textContent += number.value;
      inputHolder = Number(p.textContent);
    });
  });
}

numberInput();
clear();
