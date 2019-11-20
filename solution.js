#### Exercise 1:

Method 1
```
**Name:

slice()


**Description:

extracts a part of a string and returns the extracted part in a new string.
The method takes 2 parameters: the start position, and the end position (end not included).


**Example using it:

var str = "abcdefghijklmnopqrstuvwxyz";
var res = str.slice(7, 13);
console.log(res)

```


Method 2
```
**Name:

substr()


**Description:

extracts part ot the string starting from the first parameter and for length of the second parameter
if no second parameter was input it will extract the rest of the string


**Example using it:

var str = "abcdefghijklmnopqrstuvwxyz";
var res = str.substr(7, 8);

console.log(res)

```


Method 3
```
**Name:

toUpperCase()


**Description:

A string is converted to upper case


**Example using it:

var str = "abcdefghijklmnopqrstuvwxyz";
var res = str.toUpperCase();

console.log(res)

```

/****************************************************/

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
1. anywhere in the script! 
2. anywhere inside the function `x()` 
3. anywhere inside the function `y()` 
4. anywhere inside the function `z()`    ** This is the correct answer **


/****************************************************/

#### Exercise 3:


function roll (dice1, dice2) {
	dice1 = Math.floor(Math.random() * 5) + 1;
	dice2 = Math.floor(Math.random() * 5) + 1;

	sum = dice1 + dice2

	return sum
}

console.log(roll())

/****************************************************/

#### Exercise 4:

var Riyal;

function currencyConverter (amount, currency) 
{
	if (currency = "USD")
	{Riyal = amount * 3.75}
	if (currency = "GBP")
	{Riyal = amount * 4}
	if (currency = "EGP")
	{Riyal = amount * 4.68}
	if (currency = "BD")
	{Riyal = amount * 0.10}
return Riyal
}

console.log(currencyConverter(10,"BD"))


/****************************************************/