var factorial = function(number) {
  var result = 1;
  while (number > 0) {
    result *= number;
    number = number - 1;
  }
  return result;
};

// $(document).ready(function() {
//   $("form#leap-year").submit(function(event) {
//     var year = parseInt($("input#year").val());
//     var result = leapYear(year);
//
//     $(".year").text(year);
//     if (!result) {
//       $(".not").text("not");
//     } else {
//       $(".not").empty();
//     }
//
//     $("#result").show();
//     event.preventDefault();
//   });
// });
