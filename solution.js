Method 1

Name: indexOf("")
Description: it return the index of letter you entered as a parameter or first letter of the string you entered 
Example using it:
var str = "Please dont disturb!";
var p = str.indexOf("!");
console.log(p);
...

Method 2

Name: slice(start,end) 
Description:take part of string by sending start and end index to cut it and returns it as new string.
Example using it:
var str = "Today is 19/11/2019";
var part = str.slice(15,19);
console.log(part);

Method 3

Name: trim() 
Description: removes spaces from both sides of a string
Example using it:
var str = "     Good Morning     ";
console.log(str.trim());


/*
Exercise 2:
Where can you print out the value of variable c without resulting in an error?*/

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

1- the answer is 1 anywhere in the script!

/*
Exercise 3: Dice Roller
Write a function that chooses two random numbers (1-6) and returns them. It should also return the sum.
Example: rollDice() // Dice rolled are 6 and 1. Sum is 7

*/

function rollDice(){
  
    var num1 = Math.floor(Math.random() * 6) + 1; 
    var num2 = Math.floor(Math.random() * 6) + 1; 
    console.log("the first number is : " +num1 + " and the second number is " + num2);
    console.log("the sum of two numbers is : " + (num1+num2));
    
  }
  
  rollDice();

  /*
Exercise 3: Dice Roller

BONUS: have your function take an argument of the # of dice to be rolled.
Example: rollDice(3) // Dice rolled are 4, 2, and 7. S
*/

function rollDice(num){
    var str = "";
    for(i=0; i<num;i++){
      
      var num1 = Math.floor(Math.random() * 6) + 1; 
      
      str += num1.toString();
      str += ", "
      
    
    }
    console.log("the Dice rolled are : " + str );
  }
  
  rollDice(2);

/*
Exercise 4: currencyConverter(currency, amount)
Write a function currencyConverter that takes two arguments an amount
and a currency (USD, GBP, EGP, BD) and returns the converted version of
the amount in Riyals.
Use the if-then-else construct available in Javascript. Hint :
1 Riyal = 4.68 Egyptian pound
1 Riyal = 0.10 Bahraini dinar
*/
function currencyConverter(currency, amount){
    if(currency == 'USD')
      {
        amount = amount * 3.75;
        return amount;
      }
     else if (currency == 'GBP')
       {
        amount = amount * 4.85;
        return amount;
        
      }
     else if (currency == 'EGP')
       {
        amount = amount / 4.68;
        return amount;
        
      }
     else if (currency == 'BD')
      {
        amount = amount / 0.10;
        return amount;
      }
    
  }
  
  console.log(currencyConverter('GBP',50));

 /* BONUS 5,6
Exercise 5: isCharacterAVowel(character)
Write a function isCharacterAVowel that takes a character (i.e. a string of length 1) 
and returns true if it is a vowel and false, otherwise.*/

function isCharacterAVowel(character) {
    if(character == 'a' || character == 'A' || character == 'i'|| character == 'I'|| character == 'o'|| character == 'O'|| character == 'e'|| character == 'E'|| character == 'u'|| character == 'U')
     return  true;
    else return false;
  }
  
  console.log(isCharacterAVowel('e'));

/*
Exercise 6: pow(base, exponent)
Define a function pow that replicates the Math.pow() method in JavaScript's Math object.*/
function pow(base,exponent) {
    return Math.pow(base,exponent);
  }
  
  console.log(pow(2, 2));