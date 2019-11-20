// # JS Functions Week1 Homework2

// ## Instructions
// 1. Fork and clone this repository.
// 2. Change into the new directory`cd w01d03-HW2`
// 3. Create a file called solution.js and add all answers to it. 
// ---

// #### Exercise 1:
// Research 3 string methods and describe what they are used for and how to use them.  You can find string methods here https://www.w3schools.com/js/js_string_methods.asp

// Method 1
// ```
// Name: String Length 
// Description: return the length of specific string
// Example using it:
var txt = "Bedo";
var sln = txt.length; // will return 4 

// Method 2
// ```
// Name: Finding a String in a String 
// Description: return the index of the first character of the word the passed into indexOf method
// Example using it:
var str = "Please locate where 'locate' occurs!";
var pos = str.indexOf("locate"); // will return 7 , the index of l

// Method 3
// ```
// Name:
// Description: extracts a part of a string and returns the extracted
// part in a new string , the first parametar is start position and 
// the second parametar is the end position
// (the end not include inside the new string)
// Example using it:
var str = "Apple, Banana, Kiwi";
var res = str.slice(7, 13); // will return Banana

// #### Exercise 2:
// Where can you print out the value of variable c without resulting in an error?


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
// ```
// 1. anywhere in the script! 
// 2. anywhere inside the function `x()` 
// 3. anywhere inside the function `y()` 
// 4. anywhere inside the function `z()`

// ### Choose the correct answer =>> 3 ,4

// ---

// #### Exercise 3: Dice Roller
// - Write a function that chooses two random numbers (1-6) and returns them. It should also return the sum.
// - Example: `rollDice() // Dice rolled are 6 and 1.  Sum is 7`
// - BONUS: have your function take an argument of the # of dice to be rolled.
// - Example: `rollDice(3) // Dice rolled are 4, 2, and 7.  Sum is 13.`
// ---

function rollDice(num) {
    let dice1 = Math.floor(Math.random() * 5) + 1;
    let dice2 = Math.floor(Math.random() * 5) + 1;
    let dice3 = Math.floor(Math.random() * num) + 1;
    let sumOfDice = dice1 + dice2;

    return "Dice rolled are " +dice1+ ", " +dice2+ ", and " +dice3 +".  Sum is " +sumOfDice; 
}

// #### Exercise 4: currencyConverter(currency, amount)
//   - Write a function `currencyConverter` that takes two arguments an amount and a currency (USD, GBP, EGP, BD) and returns
//  the converted version of the amount in Riyals. 
//   - Use the if-then-else construct available in Javascript.
// **Hint :**
// > - 1 Riyal = 4.68 Egyptian pound 
// > - 1 Riyal = 0.10 Bahraini dinar
// ---

function currencyConverter(currency,amount) {
        if(currency == "EGP"){
            return amount * 0.23 + " Riyal saudi";
        } else if ( currency == "BD") {
            return amount * 9.95 + " Riyal saudi";
        } else if ( currency == "GBP") {
            return amount * 4.85 + " Riyal saudi";
        } else if ( currency == "USD") {
            return amount * 2.75 + " Riyal saudi";
        } 
}

// ### BONUS 5,6
// #### Exercise 5: isCharacterAVowel(character)
//   - Write a function `isCharacterAVowel` that takes a character
//  (i.e. a string of length 1) and returns true if it is a vowel and false, otherwise.
function isCharacterAVowel(character) {
        let vowel = ["a" , "e" , "i","o","u"];
        for(let i=0; i<vowel.length; i++) {
            var vowelr = vowel[i];
            if(character == vowelr) {
                console.log("the character is vowel");
                break;
            } 
        }
        if(character != vowelr ){
            console.log("the character is not a vowel");
    }
}
// #### Exercise 6: pow(base, exponent)
//   - Define a function `pow` that replicates the [Math.pow()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/pow) method in JavaScript's Math object.
// function pow(num,exponent) {
//         for(exponent;e)
// }
// ---
// ### Deliverable  
// 1. When finished, `git add .`, `git commit -m " "`, `git push origin master` to your fork and submit a pull request.
// 2. Please fill up the following questions when you pull request:
// - on a scale from 1 to 5, how comfortable were you with this assignment? (1 is very difficult)
// - How long did it take?
// - What was a challenge you had with this assignment?
// - Is there anything that you'd like some further information on?
// - Do you have any suggestions to improve this assignment?
