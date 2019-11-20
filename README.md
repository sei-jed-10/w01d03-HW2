# JS Functions Week1 Homework2

## Instructions
1. Fork and clone this repository.
2. Change into the new directory`cd w01d03-HW2`
3. Create a file called solution.js and add all answers to it. 
---

#### Exercise 1:
Research 3 string methods and describe what they are used for and how to use them.  You can find string methods here https://www.w3schools.com/js/js_string_methods.asp

Method 1
```
//
Name:
The slice() Method
Description:
The splice() method changes the original array and slice() method doesn't change the original array.
Example using it:

//
var str = ' I went shopping with mom .';

console.log(str.slice(31));
expected output: "I."

console.log(str.slice(4, 19));
expected output: "went."

console.log(str.slice(-4));
expected output: "shopping."

console.log(str.slice(-9, -5));
 expected output: "withmom."
```

Method 2
//
```
Name:
String substring() Method
Description:
extracts the characters from a string, between two specified indices, and returns the new sub string.
Example using it:
//
var str = "Hello world!";
var res = str.substring(1, 4);
```

Method 3
//
```
Name:
The substr() Method
Description:
extracts parts of a string, beginning at the character at the specified position, and returns the specified number of characters
Example using it:
var str = 'Mozilla';

console.log(str.substr(1, 2));
// expected output: "oz"

console.log(str.substr(2));
// expected output: "zilla"

```
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
4. anywhere inside the function `z()`

//
inside the function `y()` 

### Choose the correct answer

---

#### Exercise 3: Dice Roller
- Write a function that chooses two random numbers (1-6) and returns them. It should also return the sum.
- Example: `rollDice() // Dice rolled are 6 and 1.  Sum is 7`
- BONUS: have your function take an argument of the # of dice to be rolled.
- Example: `rollDice(3) // Dice rolled are 4, 2, and 7.  Sum is 13.`
---
//
var d1 = Math.floor((Math.random() * 6) + 1);
   var d2 = Math.floor((Math.random() * 6) + 1);
   var total = d1 + d2;
  return " Dice rolled are " + d1 + " and " + d2 + ".Sum is " + total;
 }

 console.log(myFunction( ));


#### Exercise 4: currencyConverter(currency, amount)
  - Write a function `currencyConverter` that takes two arguments an amount and a currency (USD, GBP, EGP, BD) and returns  the converted version of the amount in Riyals. 
  - Use the if-then-else construct available in Javascript.
**Hint :**
> - 1 Riyal = 4.68 Egyptian pound 
> - 1 Riyal = 0.10 Bahraini dinar
---
//
function currencyConverter (amount,currency){

   if (currency == "USD"){
     var  convertedVersion = amount * 0.266667;
     return convertedVersion;

   }else if (currency == "EGP"){
     var convertedVersion = amount * 4.29319;
     return convertedVersion;

   }else if (currency == "GBP"){
     var convertedVersion = amount * 0.206290;
     return convertedVersion;

   }else  (currency == "BD"){
     var convertedVersion = amount * 0.100267;
     return convertedVersion;
   }
 }

### BONUS 5,6
#### Exercise 5: isCharacterAVowel(character)
  - Write a function `isCharacterAVowel` that takes a character (i.e. a string of length 1) and returns true if it is a vowel and false, otherwise.
---
#### Exercise 6: pow(base, exponent)
  - Define a function `pow` that replicates the [Math.pow()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/pow) method in JavaScript's Math object.

---
### Deliverable  
1. When finished, `git add .`, `git commit -m " "`, `git push origin master` to your fork and submit a pull request.
2. Please fill up the following questions when you pull request:
- on a scale from 1 to 5, how comfortable were you with this assignment? (1 is very difficult)
- How long did it take?
- What was a challenge you had with this assignment?
- Is there anything that you'd like some further information on?
- Do you have any suggestions to improve this assignment?
