// //Method 1
// // ```
// // Name:length
// // Description: count the length of the string
// // Example using it:
// let fun ="hello"
// for(x=0; x< fun.length; x++)
// {
 
//  console.log("print "+x);
 
// }

// // Method 2
// // ```
// // Name:search() method 
// // Description: search for string and 
// //retrun the index of this string that appear first
// // Example using it:
// // ```
// let a = "hello Mr. Abdullah"

// let po = a.search("Abdullah")

// console.log("The position at " + po + " index");

// Method 3
// ```
// Name:lastIndexOf()
// Description:eturns the position of the 
//last occurrence of a specified text:
// Example using it:
var str = "Please locate where 'locate' occurs!";
var pos = str.lastIndexOf("locate");

///--------------------------------------
var a = 1;
function x() {
  var b = 2;
  function y() {
    var c = 3;
    console.log(c)
    function z() {
      var d = 4;
    }
    z();
  }
  y();
}

x(); 
// Answer anywhere in the script


//#### Exercise 3:
function randomNum(time)
{
    for(x=0; x <time; x ++;)
    {
let num1 = Math.floor((Math.random() * 10) + 1);
let num2 = Math.floor((Math.random() * 10) + 1);
return num1 + num2 
    }
}

//Exercise 4: currencyConverter

function currencyConverter(currency, amount)
{
    if(currency=="USD")
    {
        return amount * 3.75;
    }
    else if (currency == "EGP")
    {
        return amount * 4.68; 
    }
    else if (currency =="GBP")
    {
        return amount * 2.6;
    }
    else if(currency == BD){
        return amount * 0.10;
    }
    else{
        return "wrong input";
    }
}

//BONUS 5,6

function isCharacterAVowel(input) {
    if ( input=== "a" || input==="e" || input==="i" || input==="o" || input==="u") {
      return "True"
    }  else {
      return "False"
    } 
  } 
  isCharacterAVowel("h")

  // Exercise 6
// The pow method take two arguments the first one
// is a number and the second is a power of the this number 
// and return the result

