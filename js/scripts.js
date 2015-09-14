// Iterative
var iFactorial = function(number) {
  var result = 1;
  while (number > 0) {
    result *= number;
    number = number - 1;
  }
  return result;
};

// Recursive
var rFactorial = function(number) {
  if (number <= 1) {
    return 1;
  } else {
    return number * rFactorial(number - 1);
  }
}

$(document).ready(function() {
  $("form#factorial").submit(function(event) {
    var number = parseInt($("input#number").val());
    var result = rFactorial(number);

    // Populate data into number and factorialResult span field respectively
    $(".number").text(number);
    $(".factorialResult").text(result);

    $("#result").show();
    event.preventDefault();
  });
});
