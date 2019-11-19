#### Solution 1:
Research 3 string methods and describe what they are used for and how to use them.  You can find string methods here https://www.w3schools.com/js/js_string_methods.asp

Method 1
```
Name: length property
Description: Gives the length of the string for the given value.
Example using it: 

let text = "Hello"
let lengthy = text.length
console.log(lengthy)
```

Method 2
```
Name: charAt()
Description: Gives the character on the string based on its position as a number.
Example using it:

let text = "Hello"
let char = text.charAt(2)
console.log(char)
```

Method 3
```
Name: indexOf()
Description: Gives the position (in a number) of the first character of the searched string.
Example using it: 

let text = "Hello this is Leena"
let char = text.indexOf("is")
console.log(char)

```
---
#### Solution 2:
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
```
1. anywhere in the script! 
2. anywhere inside the function `x()` 
3. anywhere inside the function `y()` 
4. anywhere inside the function `z()`

### Choose the correct answer
The answer is (3) , Anywhere inside function y()

---

### Solution 3: Dice Roller
- Write a function that chooses two random numbers (1-6) and returns them. It should also return the sum.
- Example: `rollDice() // Dice rolled are 6 and 1.  Sum is 7`


function rollDice()
{
  let rnd1 = Math.floor(Math.random()*6) + 1
  let rnd2 = Math.floor(Math.random()*6) + 1
  let sum = rnd1 + rnd2

  return "Dice rolled are "+rnd1 +" and " +rnd2+ " and the sum of them are "+sum
}
rollDice()

---
- BONUS: have your function take an argument of the # of dice to be rolled.
- Example: `rollDice(3) // Dice rolled are 4, 2, and 7.  Sum is 13.`


var arr = []
var sum =0;
var i
function rollDice(num)
{
  for(i=0; i<num; i++)
  {

  let rnd = Math.floor(Math.random()*6) + 1
  console.log("Roll Number "+i+": "+rnd)
  arr.push(rnd)
  sum += rnd;
  
  
  }
  
  console.log("Dice rolled are "+arr.join()+" and the sum of them are "+sum)

 
  

  
}
rollDice(3)

---
#### Solution 4: currencyConverter(currency, amount)
  - Write a function `currencyConverter` that takes two arguments an amount and a currency (USD, GBP, EGP, BD) and returns  the converted version of the amount in Riyals. 
  - Use the if-then-else construct available in Javascript.
**Hint :**
> - 1 Riyal = 4.68 Egyptian pound 
> - 1 Riyal = 0.10 Bahraini dinar
---


function currencyConverter(currency,amount)
{
  
  if(currency === "USD")
  {
    amount *= 3.75;
    return amount
  }
  else if(currency === "GBP")
  {
    amount *=4.84;
    return amount
  }
  else if(currency === "EGP")
  {
    amount *=0.23;
    return amount
  }
  else if(currency === "BHD")
  {
    amount *=9.95;
    return amount
  }

}

console.log(currencyConverter("USD",12))

---

### BONUS 5
#### Solution 5: isCharacterAVowel(character)
  - Write a function `isCharacterAVowel` that takes a character (i.e. a string of length 1) and returns true if it is a vowel and false, otherwise.
---

function isCharacterAVowel(character)
{
  //console.log(typeof character)
  
    if(character == "a" || character == "e" ||   character == "i" || character == "o" ||  character == "u"   )
    {
      console.log("True.")
    }
    else
    {
      console.log("False.")
    }
  
}
isCharacterAVowel("e")


