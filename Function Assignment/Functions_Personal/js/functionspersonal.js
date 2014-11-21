/**
 Terence Williams
 Functions Assignment
 Personal
 11/19/2014
 */

//Create Banking Budget
//Alert the budget is important

alert ("A monthly budget is very important to keep.");

//Create a variable for months

var calMonths = 12

//Alert with number of months
alert ("There are 12 months in a year.");

//Ask user what month will we start

var startMonth = prompt("What month will we start to keep track?");

//Console.log out the response
console.log(startMonth);

//An Array

var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

console.log(monthNames);

//Show the month chosen

console.log(monthNames[startMonth]);

//Create a variables for bills and income

var billOne = 350
var billTwo = 560
var billThree = 900
var calIncome = 3000

if(billOne * billThree == calIncome || billTwo * billOne / 2 == calIncome){
  //Insufficient income
console.log("There is not enough income!");
}

if(billOne + billThree < calIncome){
  //Fair amount
  console.log("We are good with amount of income.");
}else if(billTwo > billOne < calIncome){
   //All is still good
 console.log("We still have enough income available!");
}

function totalBills(billOne, billTwo, billThree){ //billOne=350, billTwo=560, billThree=900
  var billTwo = billThree - billOne + 10;
  console.log(billTwo);
 }

//Create variable for total

var total;

//Anonymous Function

var total = function(billTwo, billThree){
 //Code the function runs
 var total = billThree + billOne;
 return total;
}

var G = total(900, 350);

console.log(G);


