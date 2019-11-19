Exercise 1:
Research 3 string methods and describe what they are used for and how to use them. 
You can find string methods here https://www.w3schools.com/js/js_string_methods.asp

>>Method 1
Name: replace()
Description: replaces only the first match
Example using it: 
var str = "Wardah Ahmad";
var n = str.replace("Wardah", "Ward");

>>Method 2
Name: toUpperCase()
Description: A string is converted to upper case
Example using it:
var text1 = "ward ahmad";
var text2 = text1.toUpperCase();


>>Method 3
Name: charAt()
Description: method returns the character at a specified index (position) in a string
Example using it:
var str = "WARD AHMAD";
str.charAt(0);            // returns W

____________________________________________________________________

Exercise 2:
Where can you print out the value of variable c without resulting in an error?

var a = 1;
function x() {
  var b = 2;
  function y() {
    var c = 3;
    function z() {
      var d = 4;
    }
    z();
  }
  y();
}

x();

3- anywhere inside the function y()
____________________________________________________________________

Exercise 3: Dice Roller
Write a function that chooses two random numbers (1-6) and returns them. It should also return the sum.
Example: rollDice() // Dice rolled are 6 and 1. Sum is 7


function ranNum(){
    var num1 = Math.floor((Math.random() * 6) + 1);
    var num2 = Math.floor((Math.random() * 6) + 1);
    return num1 + num2;
}
console.log(ranNum());

>>>>>>>>>>>>
{BONUS: have your function take an argument of the # of dice to be rolled.
Example: rollDice(3) // Dice rolled are 4, 2, and 7. S}
>>>>>>>>>>>>

function ranNum2(a){
  var result = 0; 
  for (var i = 1; i <= a; i++){
    result += Math.floor((Math.random() * 6) + 1);
  }
  return result;
}
console.log(ranNum2(1));

____________________________________________________________________

Exercise 4: currencyConverter(currency, amount)
Write a function currencyConverter that takes two arguments an amount and a currency (USD, GBP, GBP, BD) 
and returns the converted version of the amount in Riyals.
Use the if-then-else construct available in Javascript. Hint :
1 Riyal = 4.68 Egyptian pound
1 Riyal = 0.10 Bahraini dinar

function currencyConverter(currency, amount){
    if (currency === "USD"){
        amount *= 3.75;
    }else if (currency === "GBP"){
        amount *= 4.68;      
    }else if (currency === "BD"){
        amount *= 0.10;
    }
    return amount;
}
console.log(currencyConverter("GBP", 10));

____________________________________________________________________

BONUS 5,6
Exercise 5: isCharacterAVowel(character)
Write a function isCharacterAVowel that takes a character (i.e. a string of length 1) 
and returns true if it is a vowel and false, otherwise.

function isCharacterAVowel(character){
    if ((character === "a") || (character === "e") || (character === "u") || (character === "i") || (character === "o")){
        return true;
    } else {
        return false;
    }
}
console.log(isCharacterAVowel("o"));

____________________________________________________________________

Exercise 6: pow(base, exponent)
Define a function pow that replicates the Math.pow() method in JavaScript's Math object.

function pow(base, exponent){
    return Math.pow(base, exponent);
}
console.log(pow(2, 3));

