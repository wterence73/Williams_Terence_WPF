/*
Terence Williams
 WPF 1408 Section 01
 Expressions Assignment
 11-12-14
 */

//Web build addressing customer needs
//welcome customer and ask for the name

var welcomeMessage = prompt("Hello and welcome to Twill Mart. " + "What is your name?");
console.log(welcomeMessage)

//Console.log out the response
console.log(welcomeMessage)


//Alert customer that we have email updates
alert("Our company has email alerts!");

//Ask customer if they would like to sign up for email updates and sales

var emails = prompt("Would you like to sign up?")

//Console.log out the response
console.log(emails)

//Give customer opportuntiy to sign up or not
//Give a variable for email sign up

var emailAnswer = true;

//if the customer would like to sign up for email alerts, print to console " You may enter your email now."
if(emailAnswer){
  //code performed if the answer is yes
  console.log("You may enter your email now.");
}

//Alert with email sign up
var enterEmail = prompt("Enter Email");

//Console.log out response
console.log(enterEmail)

var emailDecline = alert("Proceed to online shopping mall.");

//If the customer would like to decline email sign up, print to console "You may proceed to the online shopping mall."
if(emailDecline){
   //code performed if the answer is no
   alert("You may proceed to the online shopping mall.");
}

//Customer has added items to shopping cart
//Ask customer if they would like to continue shopping

alert("Would you like to continue shopping or check out?")

//The customer has added a fitted baseball cap

var adultSize = 10;
var minSize = 5;

//if the customer is an adult, print to console " The largest cap is for an adult size 10."
if(adultSize == 10){
   //code perform if answer is true
   console.log("You may chose an adult size cap.")
}else{
   //code to perform if answer is false
   console.log("Sorry this cap is too small.");
}

var adultRed = 10.00;
var adultBlue = 12.00;
var capmoneySaved = 25.00














