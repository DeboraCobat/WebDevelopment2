function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  if (num2 !== 0) {
    return num1 / num2;
  } else {
    return "Cannot divide by zero!";
  }
}

document.addEventListener("DOMContentLoaded", function() {
  var form = document.getElementById("calculator-form");
  var resultDiv = document.getElementById("result");

  form.addEventListener("submit", function(event) {
    event.preventDefault();
    
    var number1 = parseFloat(document.getElementById("number1").value);
    var number2 = parseFloat(document.getElementById("number2").value);

    var multiplicationResult = multiply(number1, number2);
    var divisionResult = divide(number1, number2);

    resultDiv.innerHTML = "Multiplication: " + multiplicationResult + "<br>Division: " + divisionResult;
  });
});
