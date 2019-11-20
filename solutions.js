Exercise 1:

Method 1

Name: toString()
Description: returns number as a string.
Example using it: 
	var num = 10;
	num.toString();

//////////////////////
Method 2

Name: join()
Description: join all array elements into a string
Example using it: 
	var a = [10 , 2 , 5 , 4];
	a.join();
/////////////////////
Method 3

Name: getDate()
Description: returns the day of a date as a number(1-31)
Example using it: 
	var date = new Date();
	console.log(date.getDate());	
/////////////////////
Exercise 2

var a = 1;
function x() {
  var b = 2;
  function y() {
    var c = 3;
    console.log(c) // here inside the function y() and after the declaration.
    function z() {
      var d = 4;
    }
    z();

  }
   y();
}

x();

4. anywhere inside the function z(),inside the function y() but after the declaration.
///////////////////////
Exercise 3


var rolledNum;
var sum = 0;
var output = '';
var i = 0;

function rollDice(rolledNum){

	for (i = 0; i < rolledNum ; i++){
		var dice = Math.floor(Math.random()* 6)  + 1;
		sum += dice;
    output += dice;
    //parseInt(output,10);
    console.log(dice+' + '+dice+' = '+sum);

	}

	}

rollDice(3);
/////////////////////
Exercise 4

var inRiyal;

function currencyConverter(inRiyal,currency){

if (currency == 'USD'){
	var usd = inRiyal * 0.27;
	console.log(inRiyal+" Riyal = "+usd+" US Dollars");
}else if(currency == 'GBP'){
	var gbp = inRiyal * 0.21;
	console.log(inRiyal+" Riyal = "+gbp+" UBritish Pound");
}else if(currency == 'EGP'){
	var egp = inRiyal * 4.29;
	console.log(inRiyal+" Riyal = "+egp+" Egyptian Pound");
}else if(currency == 'BH'){
	var bh = inRiyal * 0.10;
	console.log(inRiyal+" Riyal = "+bh+" Bahraini Dinar");
}

}
currencyConverter(300,'USD');





