Method 1
```
Name: length() 
Description: returns the length of a string
Example using it: 
var txt = "AB";
console.log(txt.length); //// will return: 2
```

Method 2
```
Name: replace()
Description: replaces a specified value with another value in a string
Example using it:
str = "Please visit Google!";
console.log(str); //// will return Please visit Google!
console.log(str.replace("Google", "Youtube")); //// will return: Please visit Youtube!
```

Method 3
```
Name: toUpperCase()
Description: A string is converted to upper case
Example using it: 
str = "Please visit Google!";
console.log(str.toUpperCase()); //// will return: PLEASE VISIT GOOGLE!


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
Answer: 4. anywhere inside the function `z()`

#### Exercise 3: Dice Roller

function rollDice (num){

    if(isNaN(num)==false){
        var Sum=0;
        for(var i =0; num>i;i++){
        var num2= Math.floor(Math.random()*6)+1;
        Sum += num2;
        console.log(i+1+" Dice rolled is "+num2); 
        }
        return "Sum is "+Sum;
    }

    else{
    var num1= Math.floor(Math.random()*6)+1;
    var num2= Math.floor(Math.random()*6)+1;
    var Sum= num1+num2;
    return {num1,num2,Sum};
    }
}

rollDice() // Dice rolled are 6 and 1.  Sum is 7`
rollDice(3) // Dice rolled are 4, 2, and 7.  Sum is 13.`

#### Exercise 4: 
function currencyConverter(currency, amount) {
    if(amount=="USD"){
        return currency*3.75;
    }
    else if(amount=="GBP"){
        return currency*4.84;
    }
    else if(amount=="EGP"){
        return currency*0.23;
    }
    else if(amount=="BD"){
        return currency*9.95;
    }     
}

currencyConverter(1,"BD");

### BONUS 5,6
#### Exercise 5: 
function isCharacterAVowel(character){
    if(character.charAt(0)==='a'||character.charAt(0)==='A'||
    character.charAt(0)==='e'||character.charAt(0)==='E'||
    character.charAt(0)==='i'||character.charAt(0)==='I'||
    character.charAt(0)==='o'||character.charAt(0)==='O'||
    character.charAt(0)==='u'||character.charAt(0)==='U')
    {
        return true;
    }
    else{
        return false;
    }
    }
    
    isCharacterAVowel('a')
---
#### Exercise 6: 
function pow(base, exponent)
{
     return Math.pow(base, exponent);
}
pow(7,3);