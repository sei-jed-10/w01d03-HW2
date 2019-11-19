

//Exercise 3: Dice Roller
    //- Write a function that chooses two random numbers (1-6) and returns them. It should also return the sum.
    //- BONUS: have your function take an argument of the # of dice to be rolled.

    function rollDice(numberOfDice){
        var results="Dice rolled are ";
        var sum=0;
        var rolledDice=0;
        for (i=0;i<numberOfDice;i++){
            rolledDice=Math.floor((Math.random() * 6)+1);
            sum+=rolledDice;
            if (i==numberOfDice-1){
                results+=("and "+rolledDice+". ");
            }
            else{
                results+=(rolledDice+", ");

            }

        }
        results+=("Sum is "+sum+".");
        console.log(results);
    }
    rollDice(3);

//Exercise 4: currencyConverter(currency, amount)
    function currencyConverter(currency, amount){
        var convertedAmount=0;
        if(currency=="USD"){
        convertedAmount=amount*3.75;
        console.log(amount+" Riyal= "+convertedAmount+" United States Dollar")
        }
        else if(currency=="GBP"){
        convertedAmount=amount*4.85;
        console.log(amount+" Riyal= "+convertedAmount+" Pound sterling")
        }
        else if(currency=="EGP"){
        convertedAmount=amount*4.68;
        console.log(amount+" Riyal= "+convertedAmount+" Egyptian pound")
        }
        else if(currency=="BD"){
        convertedAmount=amount*0.10;
        console.log(amount+" Riyal= "+convertedAmount+" Bahraini dinar")
        }
        else{
            console.log("Please Enter one of the following currencies: USD, GBP, EGP, BD");
        }
    }
    currencyConverter("USD",50);

//BONUS 5,6
//Exercise 5: isCharacterAVowel(character)

function isCharacterAVowel(character){
    character=character.toLowerCase();
    var vowels=['a','e','i','o','u'];
    for (i=0;i<vowels.length;i++){
        if(character==vowels[i]){
            return true;
        }
    }
    return false;
}
console.log(isCharacterAVowel('A'));

//Exercise 6: pow(base, exponent)
function pow(base,exponent){
    var result=base;
    for(i=2;i<=exponent;i++){
        result*=base;
    }
    console.log(base+" to the power of "+exponent+" = "+result)
}
    pow(9,4);