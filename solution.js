//#### Exercise 1:
// Method 1
// ```
// Name:indexOf()
// Description: returns the index of (the position of) the first occurrence of a specified text in a string:
// Example using it:
var str = "Please locate where 'arif' occurs!";
var pos = str.indexOf("arif");

// Method 2
// ```
// Name:lastIndexOf()
// Description:returns the index of the last occurrence of a specified text in a string:
// Example using it:
var str = "Please locate where 'ahmad' occurs!";
var pos = str.lastIndexOf("ahmad");

// Method 3
// ```
// Name: indexOf() and lastIndexOf()
// Description:return -1 if the text is not found
// Example using it:
var str = "Please locate where 'locate' occurs!";
var pos = str.lastIndexOf("John");
//#### Exercise 2:

var a = 1;
function x() {
  var b = 2;
  function y() {
    var c = 3;
    function z() {
      var d = 4;
    }
    z(3);
  }
  y();
}

x();
//2. anywhere inside the function `x()`

//#### Exercise 3: Dice Roller
var random = Math.floor(Math.random() * 6) + 1;

console.log(random);

//Exercise 4: currencyConverter(currency, amount)

function currencyConverter(currency, amount) {
    let USD = 3.75;
    let GBP = 4.61;
    let EGP = 0.23;
    let BD = 9.95;
    let converted;
    if (currency == "USD") {
      return (converted = amount * USD);
    } else if (currency == "GBP") {
      return (converted = amount * GBP);
    } else if (currency == "EGP") {
      return (converted = amount * EGP);
    } else if (currency == "BD") {
      return (converted = amount * BD);
    } else {
      console.log("Please enter a valid currency");
    }
  }
   console.log(currencyConverter("USD", 10) + " SR");
   console.log(currencyConverter("GBP", 10) + " SR");
   console.log(currencyConverter("EGP", 10) + " SR");
   console.log(currencyConverter("BD", 10) + " SR");
