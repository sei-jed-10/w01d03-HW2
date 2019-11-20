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

var rates = [4.68, 0.10];// exchange value in an array

var EgyptianPound = rates[0];
var BahrainiDinar = rates[1];

var result = 0;

function convert(amount, convertFrom, convertTo) {
      if (convertFrom == "EGP && convertTo == "BAR") {
          result = amount * EgyptianPound;
        }
       else if (convertFrom == "BAR" && convertTo == "EGP") {
          result = amount * BahrainiDinar;
} 
   else if (convertFrom === convertTo) {
         
} else {
    alert("invalid input");
}
}
       document.writer(amount+ " " + convertFrom + " " + result + " " + convertTo + "<br>" );      
       
{
    convert(100,"EGP","BAR");
    convert(100,"BAR","EGP");
}