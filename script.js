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

module.exports = { add, subtract, multiply, divide };
