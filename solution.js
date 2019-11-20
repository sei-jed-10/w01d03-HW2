//ex1 

// Method 1
// ```
// Name:indexOf
// Description:returns the index of (the position of) the first occurrence of a specified text in a string
// Example using it:var str = "Please locate where 'locate' occurs!";
// var pos = str.indexOf("locate");
// ```

// Method 2
// ```
// Name:search
// Description:The search() method searches a string for a specified value and returns the position of the match:
// Example using it:var str = "Please locate where 'locate' occurs!";
// var pos = str.search("locate");
// ```

// Method 3
// ```
// Name:slice
// Description:slice() extracts a part of a string and returns the extracted part in a new string.
// Example using it:var str = "Apple, Banana, Kiwi";
// var res = str.slice(7, 13);











//ex2 

3








// ex3
function rollDice() {
  
    var ranNum = Math.floor(Math.random()* 7 ) + 1;
    var ranNum2 = Math.floor(Math.random()* 7 ) + 1;  
      var sum = ranNum + ranNum2;
      
      console.log('Dice rolled are '+ ranNum +' and '+ranNum2+'.  Sum is '+sum+'`')
    }
    rollDice();
    
    
    





// ex4 

function currencyConverter(currency, amount){
    if(currency == 'USD'){
     amount = amount * 3.75 ;
      return amount ;
    }else if (currency == 'GBP'){
      amount = amount * 4.58 ;
      return amount ;
    }else if (currency == 'EGP'){
      amount = amount * 4.68 ;
      return amount ;
    }else if (currency == 'BD'){
      amount = amount * 0.10 ;
      return amount ;
    }else {
      console.log("currency not found")
    }
    
    
  }
  
  console.log(currencyConverter("GBP" , 7));
  