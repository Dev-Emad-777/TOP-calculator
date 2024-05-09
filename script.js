// todo: add function
function add(...nums) {
  return nums.reduce((total, current) => total + current);
}

// todo: subtract function
function subtract(...nums) {
  return nums.reduce((total, current) => total - current);
}

// todo: multiply function
function multiply(...nums) {
  return nums.reduce((total, current) => total * current);
}

// todo: divide function
function divide(...nums) {
  return nums.reduce((total, current) => total / current);
}

document.addEventListener("keydown", function (event) {
  let txt = document.querySelector(".value");
  switch (event.key) {
    case "c":
      txt.value = "";
      break;
    case "/":
      txt.value += "/";
      break;
    case "*":
      txt.value += "*";
      break;
    case "7":
      txt.value += "7";
      break;
    case "8":
      txt.value += "8";
      break;
    case "9":
      txt.value += "9";
      break;
    case "-":
      txt.value += "-";
      break;
    case "4":
      txt.value += "4";
      break;
    case "5":
      txt.value += "5";
      break;
    case "6":
      txt.value += "6";
      break;
    case "+":
      txt.value += "+";
      break;
    case "1":
      txt.value += "1";
      break;
    case "2":
      txt.value += "2";
      break;
    case "3":
      txt.value += "3";
      break;
    case "0":
      txt.value += "0";
      break;
    default:
      break;
  }
});

document.addEventListener('keydown', function(event) {
    let txt = document.querySelector('.value');
    if (event.key === 'Enter') {
        try {
            txt.value = eval(txt.value);
        } catch (error) {
            console.error('Error in expression: ', error);
        }
    }
});

