///E: 1 ////
// 1- name : .length
//   description: it returns the number of indexes in a string
//   example: 
  var name = "amal"
  var y = name.length()
  console.log(y)
// 2-  name : .slice
//   description: it takes a part of a string and returns the portion in a new string
//   example: 
var str = "yes please, come in. I am just watching Friends and working on my homework. multitasking is cool"
var n = str.slice(25, 30)

console.log(n)
// 3- name : .replace
//   description: it replace a part of a value with another value
//   example: 
var a = " hey! let's go to the movies"
 var b = a.replace("the movies", "space")

   console.log(b)

///// E: 2 //////
// anywhere inside function z

// ///// E: 3 /////   
var num1 = [1, 2, 3, 4, 5, 6]
var num2 = [1, 2, 3, 4, 5, 6]
function rollDice(num1, num2) {
    var num1 = Math.floor((Math.random()*6)+1);
    var num2 = Math.floor((Math.random()*6)+1);
    var sum = num1 + num2
      return("Dice rolled are " + num1 + " and " + num2 + ". Sum is " + sum)
  }
 
  console.log(rollDice())

////// E: 4 ////////   
function currencyConverter(amount, currency){
  if (currency == "USD"){
   console.log(amount + " US dollars "+ "= " + amount * 3.7 + " Riyals")
  }
  if (currency == "EGP"){
   console.log(amount + " Egyptian pound "+ "= " + amount / 4.68 + " Riyals")
  }
  if (currency == "GBP"){
   console.log(amount + " Pound "+ "= " + amount * 4.8 + " Riyals")
  }
  if (currency == "BD"){
   console.log(amount + " Bahrini dinar "+ "= " + amount / 0.10 + " Riyals")
  }
}

currencyConverter(1, "USD")
currencyConverter(1, "EGP")
currencyConverter(1, "GBP")
currencyConverter(1, "BD")
