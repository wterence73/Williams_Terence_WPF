/*
 Terence Williams
 WPF 1408 Section 01
 Expressions Assignment
 11-06-14
 */

//Create a js with a wacky concept

//Create variable to involve user

alert("How would you like to touch the moon?");

//Ask user for name

var nameQue = prompt('What is your name?');

//Console.log out the response
console.log(name)

//Alert user we're about to beginning of the exercise
alert("Welcome " +nameQue+"! Let's get off to an interesting exploration!");

//Inform user of needed information

alert("We will be using the formula distance= rate * time to start. " + "Now, how far is the moon from the Earth?");

alert("The moon is a whooping 238,900 miles!")

//Create a variable for moon distance

var moonDistance = speedNumber * timeNumber;

//Create a variable asking for speed

var speedNumber = prompt("What is your current rate of speed?");

//Console.log out the response
console.log(speedNumber)

//Create a variable for time

var timeNumber = prompt("What is your current time");

//Console.log out the response
console.log(timeNumber)

//Calculate total distance

var total = speedNumber * timeNumber
alert(total)

//Ask user a calculation question

alert("What if we have the moon's distance from Earth but only the speed rate? " + "How would we calculate this?");

//Create variable for new operation

var moonTime = moonDistance / speedNumber;

//Alert user with moon's distance from Earth
alert("The moon is 238,900 from Earth.");

//Ask user for the ideal speed

var newNumber = prompt("What is your current speed?");

//Console.log out the response
console.log(newNumber)

//Calculate moonTime

var newmoonDistance = 238900;

var newTotal = newmoonDistance / newNumber
alert(newTotal)

