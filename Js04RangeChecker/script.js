function checkRange(number) {
  return (Math.abs(100 - number) <= 20) || (Math.abs(400 - number) <= 20);
}

document.addEventListener("DOMContentLoaded", function() {
  var form = document.getElementById("number-form");
  var resultDiv = document.getElementById("result");

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    var number = parseInt(document.getElementById("number").value);

    var result = checkRange(number);

    resultDiv.textContent = "Result: " + result;
  });
});
