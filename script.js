const display = document.getElementById("display");
const calc = document.getElementById("calc");

function add(num1, num2) {
  return parseInt(num1) + parseInt(num2);
}
function subtract(num1, num2) {
  return num1 - num2;
}
function divide(num1, num2) {
  return num1 / num2;
}
function multiply(num1, num2) {
  return num1 * num2;
}

calc.addEventListener("click", () => {
  let text = display.value;

  let num1 = "";
  let operator = "";
  let num2 = "";

  for (n in text) {
    if (text[n] == "+" || text[n] == "-" || text[n] == "*" || text[n] == "/") operator = text[n];
    else if (!operator) num1 += text[n];
    else if (operator) num2 += text[n];
  }

  switch (operator) {
    case "+":
      display.value = add(num1, num2);
      break;
    case "-":
      display.value = subtract(num1, num2);
      break;
    case "*":
      display.value = multiply(num1, num2);
      break;
    case "/":
      display.value = divide(num1, num2);
      break;
    default:
      break;
  }
});
