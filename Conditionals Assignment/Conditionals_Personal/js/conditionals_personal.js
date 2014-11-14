/*
 Terence Williams
 WPF 1408 Section 01
 Expressions Assignment
 11-12-14
 */

//Team NC Car Sales
//Welcome the customer to the car lot
alert("Welcome to the best car lot ever!");

var carsAvailable = prompt("What make and model are you interested in?");

//Console.log out the response
console.log(carsAvailable);

//Alert customer of whats available
alert("We have all the latest models");

var carLot = prompt("We have cars for all budgets. " + "What is your budget like?")

//Console.log out response
console.log(carLot)

//Ask customer which cars are the top three favorites
alert(" Which cars are your top three favorites?");

//Customer has chosen three cars

var carChevy = 1000.00
var carFord = 15000.00
var carGmc =1000.00
var carBudget = 10000.00
var carDodge = 7000.00

//if the Dodge is preferrable
if(carDodge <= carBudget){
    //code to perform if answer is true
    console.log("You have chosen a car within budget");

}

if(carChevy <= carGmc){
    //code to perform if answer is true
    console.log("Let's test drive to see which is better.");
}





