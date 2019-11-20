# JS Functions Week1 Homework2

#### Exercise 1:
Research 3 string methods and describe what they are used for and how to use them.  You can find string methods here https://www.w3schools.com/js/js_string_methods.asp

Method 1
```
Name: The Slice Method
Description: extracts a part of a string and returns the extracted part in a new string
Example using it:

var str = "Coder, Programmer, developer";
var res = str.slice(7, 16);

Console: Programmer


Method 2
```
Name: The replace method
Description: It replaces a specified value with another value in a string
Example using it: 

str = "Drink coffee every day";
var n = str.replace("coffee", "tea");

Console: Drink tea every day


Method 3
```
Name: The UpperCase Method
Description: It converts the lowerCase in a string to UpperCase
Example using it:

var text1 = "Hello World!";  
var text2 = text1.toUpperCase();

Console: HELLO WORLD

---

#### Exercise 2:
Where can you print out the value of variable c without resulting in an error?

```js
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
```
1. anywhere in the script! 
2. anywhere inside the function `x()` 
3. anywhere inside the function `y()` 
4. anywhere inside the function `z(c)`

### Choose the correct answer

---

#### Exercise 3: Dice Roller
- -.
- Example: `rollDice() // Dice rolled are 6 and 1.  Sum is 7`
- BONUS: have your function take an argument of the # of dice to be rolled.
- Example: `rollDice(3) // Dice rolled are 4, 2, and 7.  Sum is 13.`


var dice = {
  sides: 6,
  rollDice: function () {
    var randomNumber = Math.floor(Math.random() * this.sides) + 1;
    return randomNumber;
  }

---

#### Exercise 4: currencyConverter(currency, amount)
  - Write a function `currencyConverter` that takes two arguments an amount and a currency (USD, GBP, EGP, BD) and returns  the converted version of the amount in Riyals. 
  - Use the if-then-else construct available in Javascript.
**Hint :**
> - 1 Riyal = 4.68 Egyptian pound 
> - 1 Riyal = 0.10 Bahraini dinar





---

### BONUS 5,6
#### Exercise 5: isCharacterAVowel(character)
  - Write a function `isCharacterAVowel` that takes a character (i.e. a string of length 1) and returns true if it is a vowel and false, otherwise.
---
#### Exercise 6: pow(base, exponent)
  - Define a function `pow` that replicates the [Math.pow()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/pow) method in JavaScript's Math object.

---

