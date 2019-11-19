//#### Exercise 1:

Method 1
```
Name: Strig Length
Description: The length property returns the length of a string.
Example using it:
```
let text = "Faisal Turki Al-Sulaimani"

console.log(text.length)



Method 2
```
Name: Searching for a String in a String
Description: The search() method searches a string for a specified value and returns the position of the match.
Example using it:
```
let text = "Aziza Talal Daffa"

console.log(text.search("Talal"))



Method 3
```
Name: The slice() Method
Description: slice() extracts a part of a string and returns the extracted part in a new string.
The method takes 2 parameters: the start position, and the end position (end not included).
Example using it:
```
let text = "Abdullah Faisal Al-Sulaimani"

console.log(text.slice(0, 8))

// -- -- -- -- -- -- -- -- --

//#### Exercise 2:

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

3. anywhere inside the function `y()` 

// -- -- -- -- -- -- -- -- --

//#### Exercise 3: Dice Roller

function rollDice () {
    let fNum = ""
    fNum = Math.floor(Math.random() * 6) + 1
    
    let sNum = ""
    sNum = Math.floor(Math.random() * 6) + 1
    
    return "Dice rolled are " + fNum + " and " + sNum + ". Sum is " + (fNum + sNum)
    }
    
    console.log(rollDice())

// -- -- -- -- -- -- -- -- --

//#### Exercise 4: currencyConverter(currency, amount)

function currencyConverter (curren, num) {
    if (curren === "USD") {
      let amount = num * 3.75
      return amount + " SAR"
    }
    if (curren === "GBP") {
      let amount = num * 4.84
      return amount + " SAR"
    }
    if (curren === "EGP") {
      let amount = num * 0.23
      return amount + " SAR"
    }
    if (curren === "BHD") {
      let amount = num * 10
      return amount + " SAR"
    }
    else return "Just try: USD, GBP, EGP, and BHD"
    }
    console.log (currencyConverter(" ", 1))

// -- -- -- -- -- -- -- -- --

// #### Exercise 5: isCharacterAVowel(character)

    function isCharacterAVowel (cha) {
        if  ( 
          (cha === ("a"))||(cha === ("e"))||(cha === ("i"))||(cha === ("o"))||(cha === ("u"))
          ) {
        return "TRUE" 
      }
      else return "FALSE" 
      }
      console.log (isCharacterAVowel("f"))

// -- -- -- -- -- -- -- -- --
