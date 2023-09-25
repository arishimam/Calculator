// Fix duplicate operators being entered

/* Variables */
let previousNum = "";
let currentNum = "";
let operation = "";
/* Numbers */
let numbers = document.getElementsByClassName("number");

for (let num of numbers) {
  num.addEventListener("click", function () {
    let currentDisplay = display.textContent;

    // Checks if display is showing 0 or an operator
    if (display.textContent == 0 || isNaN(display.textContent)) {
      display.textContent = num.value;
      currentNum = display.textContent;
      console.log("currentNum = " + currentNum);
    } else {
      display.textContent = currentDisplay + num.value;
      currentNum = display.textContent;
      console.log("currentNum = " + currentNum);
    }
  });
}

/* Operators */
let operators = document.getElementsByClassName("operator");

for (let op of operators) {
  op.addEventListener("click", function () {
    if (operation == "") {
      previousNum = currentNum;
      currentNum = "";
      operation = op.value;
      display.textContent = operation;
      console.log("previousNum = " + previousNum);
      console.log("operation = " + operation);
      console.log("currentNum = " + currentNum);
    }
  });
}

/* Equals */
document.getElementById("equals").addEventListener("click", function () {
  //   alert("Equals button was clicked!");
  if (operation == "+") {
    currentNum = parseFloat(previousNum) + parseFloat(currentNum);
  }
  if (operation == "-") {
    currentNum = parseFloat(previousNum) - parseFloat(currentNum);
  }
  if (operation == "*") {
    currentNum = parseFloat(previousNum) * parseFloat(currentNum);
  }
  if (operation == "/") {
    currentNum = parseFloat(previousNum) / parseFloat(currentNum);
  }
  operation = "";
  display.textContent = currentNum;
});

/* Clear Display and Memory*/
document.getElementById("clear").addEventListener("click", function () {
  previousNum = "";
  currentNum = "";
  operation = "";
  display.textContent = "0";
});
