// Exercise 2 
// anywhere inside the function y()
// anywhere inside the function z()

// Exercise 3: Dice Roller

const rollDice = function () {
    let diceOne = Math.floor(Math.random()*6)+1;
    let diceTwo = Math.floor(Math.random()*6)+1;
    let sumOfDice = diceOne + diceTwo;
    console.log("Dice rolled are "+diceOne+" and "+diceTwo+". Sum is "+sumOfDice+".");
  }

// Bonus Question
  const rollDice = function (numberOfRolls) {
      let stre ="Dice rolled are ";
      let sum=0;
      let diceArray = [];
      for(i=0;i<numberOfRolls;i++)
        {
          diceArray.push(Math.floor(Math.random()*6)+1);
          sum+=diceArray[i];
        }
      let lastElement=diceArray.pop(); 
      stre+=diceArray.join();
      console.log(stre+" and "+lastElement+". Sum is "+sum+".");
    }
  


// Exercise 4: currencyConverter(currency, amount)

function currencyConverter(currency, amount) {
    let USDFactor = 3.75;
    let GBPFactor = 4.61;
    let EGPFactor = 0.23;
    let BDFactor = 9.95;
    let converted;
    if (currency == "USD") {
      return (converted = amount * USDFactor);
    } else if (currency == "GBP") {
      return (converted = amount * GBPFactor);
    } else if (currency == "EGP") {
      return (converted = amount * EGPFactor);
    } else if (currency == "BD") {
      return (converted = amount * BDFactor);
    } else {
      console.log("Please enter a valid currency");
    }
  }
  
  console.log(currencyConverter("USD", 10) + " SR");
  console.log(currencyConverter("GBP", 10) + " SR");
  console.log(currencyConverter("EGP", 10) + " SR");
  console.log(currencyConverter("BD", 10) + " SR");
  


// Exercise 5: isCharacterAVowel(character)

  function isCharacterAVowel(character) {
    character = character.toLowerCase(); //in case user enters a capital letter
    if (
      character == "a" ||
      character == "e" ||
      character == "u" ||
      character == "i" ||
      character == "y"
    ) {
      return true;
    } else {
      return false;
    }
  }
  console.log(isCharacterAVowel("A"));
  console.log(isCharacterAVowel("f"));
  


// Exercise 6: pow(base, exponent)
  
  function pow(base, exponent) {
    return base ** exponent;
  }
  
  console.log(pow(3, 5));
