/*
Terence Williams
 WPF 1408 Section 01
 Expressions Assignment
 11-06-14
 */


//Create a js file that will determined the build size of an outdoor pool

//Greet the user
//Alert the user
alert("Welcome to the Pool Designer");


//Ask the user how long do they want the pool to be
//Create a variable to catch their answer

var poolLength  = prompt("What length do you want pool");

//Console.log out the response
console.log(poolLength);

//Ask the user what is the width of the desired pool
//Create a variable to catch their answer

var poolWidth = prompt("What is your desired pool width");

//Console.log out the response
console.log(poolWidth);


//Let the user know the pool length and width has been determined
//Alert the user
alert("The length and width has been determined");


//Give user total square footage
//Length * width is the total square footage

//Create a variable for the length

var length = 20;


//Create a variable for the width

var width = 10;

//Calculate the square footage
var squarefootage = length * width ;
console.log(squarefootage);

//Alert user with their square footage

var squareFootage = length * width + ("SqFt")
alert(squareFootage)

//Alert the user with the cost per square footage
alert("The Cost for a pool build is $10.00 per Square Foot");

//Create a variable for poolBuild

var poolBuild = 10.00;

//Calculate the total cost per square foot
var poolBuild = 10.00 * squarefootage + ("Dollars");
console.log(poolBuild);

//Alert user with their project cost

var poolBuild = 10.00 * squarefootage + ("Dollars")
alert(poolBuild)

//Ask the user what is the desired pool depth

var poolDepth = prompt("What is your desired pool depth?");

//Console.log out the response
console.log(poolDepth);

//Alert user project complete
alert("Your project is now complete!")



//User has set amount of money for a project

var projectCost = prompt("How much money do you have for a future project?");

var money = 6000

var poolBuild = 10.00

//Alert user with future project size

var newProject = money / poolBuild + ("Sqft")
alert(newProject)



















