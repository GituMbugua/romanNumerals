$(document).ready(function() {
  $("form.roman").submit(function(event) {
    event.preventDefault();
        var convertToNumeral = function(num) {
      //declare arrays
      var decimalNumbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
      var romanNumerals = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IL', 'V', 'IV', 'I'];

      var convertedNumeral = '';
      for (index = 0; index < decimalNumbers.length; i++) {
        while (decimalNumbers[index <= num]) {
          convertedNumeral += romanNumeral[index];
          num -= decimalNumbers[index];
        }
      }
      return convertedNumeral;
    }
    $("#results").text(convertedNumeral);
  });
});
