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
Name: String Length
Description: The length property returns the length of a string.
Example using it:
vvar txt = “Coding if Fun!“;
var sln = txt.length;
console.log(sln);
```
Method 2
```
Name: The indexOf() method
Description: The indexOf() method returns the index of (the position of) the first occurrence of a specified text in a string.
Example using it:
var str = “Enjoying this course so far, Thank you :)“;
var pos = str.indexOf(“course”);
console.log(pos);
```
Method 3
```
Name: The slice() Method
Description: slice() extracts a part of a string and returns the extracted part in a new string.
Example using it:
var str = “Have a lovely day!“;
var res = str.slice(7, 13);
console.log(res);



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

### Choose the correct answer

It prints out the value of variable c “3.anywhere inside the function `y()`”


---

#### Exercise 3: Dice Roller
- Write a function that chooses two random numbers (1-6) and returns them. It should also return the sum.
- Example: `rollDice() // Dice rolled are 6 and 1.  Sum is 7`
- BONUS: have your function take an argument of the # of dice to be rolled.
- Example: `rollDice(3) // Dice rolled are 4, 2, and 7.  Sum is 13.`
---

function rollDice(){
  
let num1= Math.floor(Math.random() *6) +1;
let num2= Math.floor(Math.random() *6) +1;
  
console.log("The first random num is "+num1+",  the second random num is"+num2+",the sum is " + (num1+num2));
}

rollDice();





#### Exercise 4: currencyConverter(currency, amount)

 function currencyConverter(amount, currency){
    let calculate;
      if(currency === "USD"){
         calculate = amount * 3.75;
      }else if(currency === "GBP"){
        calculate = amount * 4.85;
      }else if(currency === "EGP"){
        calculate = amount * 0.23;
      }else if(currency === "BD"){
        calculate = amount * 9.95;
      }
      console.log(calculate + "Riyals");
    }
    currencyConverter(4, "USD");
    currencyConverter(4, "GBP");
    currencyConverter(4, "EGP");
    currencyConverter(4, "BD");
   

---

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
