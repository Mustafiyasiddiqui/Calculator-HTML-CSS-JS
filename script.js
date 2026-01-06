let currentValue = "";
let previousValue = "";
let operator = null;

const output = document.getElementById("output");
const history = document.getElementById("history");

const numberBtns = document.querySelectorAll(".number");
const operatorBtns = document.querySelectorAll(".operator");
const functionBtns = document.querySelectorAll(".function");

function updateDisplay() {
  output.innerText = currentValue || "0";
  history.innerText =
    previousValue && operator ? `${previousValue} ${operator}` : "";
}

numberBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    let value = btn.innerText;
    if (value === "." && currentValue.includes(".")) return;

    currentValue += value;
    updateDisplay();
  });
});

operatorBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const value = btn.innerText;
    if (value === "=" || btn.dataset.action === "toggle-sign") return;
    if (currentValue === "") return;

    operator = value === "×" ? "*" : value;
    previousValue = currentValue;
    currentValue = "";

    updateDisplay();
  });
});

function calculate() {
  const prev = parseFloat(previousValue);
  const curr = parseFloat(currentValue);

  if (isNaN(prev) || isNaN(curr)) return;

  let result;
  switch (operator) {
    case "+":
      result = prev + curr;
      break;
    case "-":
      result = prev - curr;
      break;
    case "*":
      result = prev * curr;
      break;
    case "/":
      result = curr === 0 ? "Error" : prev / curr;
      break;
    case "%":
      result = prev % curr;
      break;
    default:
      return;
  }
  currentValue = result.toString();
  previousValue = "";
  operator = null;

  updateDisplay();
}

operatorBtns.forEach((btn) => {
  if (btn.innerText === "=") {
    btn.addEventListener("click", calculate);
  }
});

functionBtns.forEach((btn) => {
  if (btn.innerText === "C") {
    btn.addEventListener("click", () => {
      currentValue = "";
      previousValue = "";
      operator = null;
      updateDisplay();
    });
  }
});

functionBtns.forEach((btn) => {
  if (btn.querySelector("i")) {
    btn.addEventListener("click", () => {
      currentValue = currentValue.slice(0, -1);
      updateDisplay();
    });
  }
});

operatorBtns.forEach((btn) => {
  if (btn.dataset.action === "toggle-sign") {
    btn.addEventListener("click", () => {
      if (!currentValue) return;

      currentValue = (-parseFloat(currentValue)).toString();
      updateDisplay();
    });
  }
});
