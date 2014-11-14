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

var emailDecline = prompt("Proceed to online shopping mall.");

//If the customer would like to decline email sign up, print to console "You may proceed to the online shopping mall."
if(emailDecline){
   //code performed if the answer is no
   console.log("You may proceed to the online shopping mall.");
}











