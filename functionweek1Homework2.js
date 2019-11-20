//Method 1The slice() Method
Name: //The slice() Method
Description:
// this  method we use it to get a part of string . thruogh pass two paramters in this mehtod
 // where are the part of strinng to get it? put the first parmters as first part of string 
 //then put the second paramters that paramters its not include so that you get part of string that before second paramters numbers
//Example  
//Example
var str = "Apple, Banana, Kiwi";
var res = str.slice(9, 13);
// output will be  nana)
//Method 2:The substr() Method
Name: // The substr() Method
// this method it is similar to the silec method but it's give an addition thing that is the length of string
//that is the second parmaters it give us the lengh of part we want to get it.
//Example  
//Example
var str = "Apple, Banana, Kiwi";
var sub = str.substr(9, 4);
//output will be  nana)

 
//Method 2:The replace()
Name: //The replace()
// this  methode it is useful to replace a specified part of string by new value.
//Example  
//Example
var str = "Apple, Banana, Kiwi";
var rep = str.replace("Banana","nana");
//output will be  nana)
//Where can you print out the value of variable c without resulting in an error?

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
 
// inside the function `y()`


//- Write a function that chooses two random numbers (1-6) and returns them. It should also return the sum.
function rollDice(num, num1){  
 var sum =num+num1;
 var randomvalu=Math.floor(Math.random() *num)+num1; 
   return  [randomvalu , sum];

}
console.log(rollDice(6, 1))

/*Write a function `currencyConverter` that takes two arguments an amount and a currency (USD, GBP, EGP, BD) and returns  the converted version of the amount in Riyals. 
- Use the if-then-else construct available in Javascript.
**Hint :**
> - 1 Riyal = 4.68 Egyptian pound 
> - 1 Riyal = 0.10 Bahraini dinar
---?*/
function currencyConverter(  amount, currency ){
    if("USD"==currency){   
        return  amount*3.75;
    }

   else if("GBP"==currency){   
        return  amount*4.85 ;
    }
  else  if("EGP"==currency){   
        return  amount*4.86 ;
    }
    else  if("BD"==currency){   
        return amount*0.10;
    }  
 console.log(currencyConverter( 1,"USD")  );


}
