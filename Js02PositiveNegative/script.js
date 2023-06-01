document.addEventListener("DOMContentLoaded", function() {
  var form = document.getElementById("integer-form");
  var resultDiv = document.getElementById("result");

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    var number1 = parseInt(document.getElementById("number1").value);
    var number2 = parseInt(document.getElementById("number2").value);

    var result = checkIntegers(number1, number2);

    if (result) {
      resultDiv.textContent = "One integer is positive and the other is negative.";
    } else {
      resultDiv.textContent = "Both integers have the same sign or are zero.";
    }
  });

  function checkIntegers(num1, num2) {
    if ((num1 > 0 && num2 < 0) || (num1 < 0 && num2 > 0)) {
      return true;
    } else {
      return false;
    }
  }
});