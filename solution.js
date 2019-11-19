
//#### Exercise 1:
 /*Method 1
```

Name: search method
Description:It locate and return the postion of the frist letter in the parametr
Example using it:  */

 var word = "Hello world " ;
var locate = word.search("world")  ;
console.log(locate) ;
 /*```

Method 2
```
Name: slice()
Description: It takes an index number  and return the string after the index 
Example using it: */

var word = "Hello world " ;
var locate = word.slice(6 )  ;
console.log(locate) ;

//this will return "world"
 

/*Method 3
 
Name: Replace ()
Description: It can replace astring with another string both have to be writen in the arguments
Example using it:  */
var word = "Hello world " ;
var locate = word.replace("Hello" ,"buy") ;

console.log(locate);

//#### Exercise 2:


//   2


//#### Exercise 3: Dice Roller

function die (){
    var num1 = Math.floor(Math.random()*6) + 1 ;
       var num2 = Math.floor(Math.random()*6) + 1 ;
       console.log("Dice rolled are " + num1 + " " +num2 +" sum is "+ (num1 +num2)) 
  
  
  }
  die() ;

 // #### Exercise 4: currencyConverter(currency, amount)



  function currencyConverter(amount,currency) {
    if (currency == "USD"){
        console.log(amount+" USD in Riyals = " +(amount * 3.75)) 
    } else if(currency == "GBP") {
   console.log(amount+" GBP in Riyals = " +(amount * 4.85))
    }else if (currency == "EGP"){
  console.log(amount+" EGP in Riyals = " +(amount * 0.23))
    }else if (currency == "BD"){
  console.log(amount+" BD in Riyals = " +(amount * 9.95))
  }else  {
   var x = "The currency is uknown" ;
    return x ;
  
   } } ;