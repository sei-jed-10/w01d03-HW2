// 11/19/2019         //
// HW2                //
// Fahad Alturkistani //
///////////////////////

////Exercise #1:

//Method 1
// Name: string trim method
// Description: A method to remoce white space from the right and left side of a string
// Example using it:
var name = "   Fahad   ";
var nameFix = name.trim(); // returns "Fahad"

// Method 2
// Name: Lower Case/Upper Case Conversion method
// Description: converts a string to uppercase or lower case letter
//Example using it:
var name2 = "AbduLLah";
var capName2 = name2.toUpperCase(); // name2 = "ABDULLAH"
var lowName2 = name2.toLowerCase();// name2 = "abdullah"

// Method 3
// Name: concat method
// Description: this method joins two or more strings
// Example using it:
var firstName = "Bernie";
var lastName = "Sanders";
var fullName = firstName.concat(" ", lastName); // fullName = "Bernie Sanders"


////Exercise #2:

//4- anywhere inside the function z() 

////Exercise #3:

function rollDice(){
    var diceOne = Math.floor(Math.random()*6)+1;
    var diceTwo = Math.floor(Math.random()*6)+1;
    var diceSum = diceOne+diceTwo;
    console.log("Dice rolled are "+diceOne+" and "+diceTwo+". Sum is "+diceSum);
    };
rollDice();


////Exercise #3: BONUS

function rollDice(number){
    if (typeof number == 'string'){
      return "enter a number"
    } 
    var dice = '';
    var diceSum=0;
    for (i=0;i<number;i++){
        diceNum = (Math.floor(Math.random()*6)+1);
        diceSum += diceNum;
        dice += diceNum+", ";
    }
    console.log("Dice rolled are "+dice+"and the sum is "+diceSum);
  };
  rollDice(5);

////Exercise #4:

function currencyConverter(amount, currency)
{
  if (typeof amount == 'string' || typeof currency !== 'string'){
    return "enter a valid input";
  }
  if (currency == "USD" || currency == "GBP" || currency == "EGP" || currency == "BD"){
    if (currency == "USD"){
          return amount+currency+" is "+ amount*3.75+" riyal";
    }else if (currency == "GBP"){
          return amount+currency+" is "+ amount*4.85+" riyal";
    }else if (currency == "EGP"){
          return amount+currency+" is "+ amount*0.23+" riyal";
    }else if (currency == "BD"){
    return amount+currency+" is "+ amount*9.95+" riyal";
    }
    }else {
    return "enter a valid currency USD, GBP, EGP, or BD";
  }
};
currencyConverter(10,'USD');
currencyConverter(10,'GBP');
currencyConverter(10,'EGP');
currencyConverter(10,'BD');


////Exercise #5: BONUS

function isCharacterAVowel(x){
    if (typeof x !== 'string'){
      return "please enter a charecter";
    }
    if(x.length > 1 ){
      return "please enter a charecter";
    }else if (x =='a' || x =='e' || x =='i' || x =='o' || x =='u'){
      return true;
    }
    else return false
  };
isCharacterAVowel('a');



////Exercise #6: BONUS

function pow(base, exponent){
    power = 1;
    for (i=0;i<exponent;i++){
      power *= base;
    }
    return power;
  };
pow(3,3);

//// END OF SOLUTIONS