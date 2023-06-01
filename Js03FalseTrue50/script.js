function checkNumbers(num1, num2) {
  return num1 === 50 || num2 === 50 || num1 + num2 === 50;
}

document.addEventListener("DOMContentLoaded", function() {
  var form = document.getElementById("number-form");
  var resultDiv = document.getElementById("result");

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    var number1 = parseInt(document.getElementById("number1").value);
    var number2 = parseInt(document.getElementById("number2").value);

    var result = checkNumbers(number1, number2);

    resultDiv.textContent = "Result: " + result;
  });
});
