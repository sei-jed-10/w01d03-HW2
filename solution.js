#### Exercise 1:

Method 1
```
Name: String Length
Description: The length property returns the length of a string.
Example using it: 
vvar txt = "Coding if Fun!";
var sln = txt.length;

console.log(sln);
```

Method 2
```
Name: The indexOf() method
Description: The indexOf() method returns the index of (the position of) the first occurrence of a specified text in a string.
Example using it:
var str = "Enjoying this course so far, Thank you :)";
var pos = str.indexOf("course");

console.log(pos);
```

Method 3
```
Name: The slice() Method
Description: slice() extracts a part of a string and returns the extracted part in a new string.
Example using it: 
var str = "Have a lovely day!";
var res = str.slice(7, 13);

console.log(res);
```
---

#### Exercise 2:
It prints out the value of variable c "3.anywhere inside the function `y()`"

---
#### Exercise 3: Dice Roller

function rollDice(){
  
    let number1 = Math.floor(Math.random() * 6) + 1;
    let number2 = Math.floor(Math.random() * 6) + 1;
    console.log("The first random number is " + number1 + ", the second random number is " + number2 + ", the sum is " + (number1 + number2));
  }
  
  rollDice();

---

  BONUS: have your function take an argument of the # of dice to be rolled.

  function rollDice(number){
    let num = number; 
    let sum = 0;
    
    for(i = 1; i <= num; i++ ){
      let number1 = Math.floor(Math.random() * 6) + 1;
      sum = sum + number1;
      console.log(number1);
    }
   console.log("The Sum is " + sum);
  } 
  
  rollDice(3);

---

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
      console.log(calculate + " Riyals");
    }
    
    currencyConverter(4, "USD");
    currencyConverter(4, "GBP");
    currencyConverter(4, "EGP");
    currencyConverter(4, "BD");
    
    //- 1 Riyal = 0.27 USD
    //- 1 Riyal = 0.21 GBP
    //- 1 Riyal = 4.29 EGP
    //- 1 Riyal = 0.10 BD
    
    //- 1 USD = 3.75 Riyal
    //- 1 GBP = 4.85 Riyal
    //- 1 EGP = 0.23 Riyal
    //- 1 BD  = 9.95 Riyal
---
### BONUS 5,6
#### Exercise 5: isCharacterAVowel(character)

function isCharacterAVowel(character){
  
 if(character.length == 1){
   if(character == "a" || character == "e" || character == "i" || character == "o" || character == "u"){
     console.log("True");
   }else{
   console.log("False");
   } 
 }else{
   console.log("Add only one character!");
 }
}

isCharacterAVowel("a");

---

#### Exercise 6: pow(base, exponent)

function pow(base, exponent){
    let result = base;
    let i = 1;
    while(i < exponent){
      result = result * base;
      i++;
    }
    console.log(result);
  }
  
  pow(2, 3);

---