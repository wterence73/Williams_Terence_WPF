/**
 Terence Williams
 Functions Assignment
 Industry
 11/19/2014
 */

//Create a master file system
//Alert the with company info

alert("Track Destiny Filing Company");

//Create variable asking for number of beginning files

var fileNumber = prompt("How many files are there to begin with?");

//Console.log out the response
console.log(fileNumber);

//Alert with number of files
alert(+fileNumber+ " is the total of files that will be filed.");

//The number of files will be divided into two sections A-M and N-Z

//Alert user asking how many files will be in each section
var fileCount = prompt("How many files will be in each section?");

//Console.log out the response
console.log(fileCount);

//Alert user that we will decide according to the count
alert("We will decide section count based on total count.");

//Create variables for file count and section count

var numberFiles = 450;
var sectionCount = 2;
var sectionNumbers = 225;

//If the number of files are equal to a number, print to console "All is accounted for."
//If the files are total below 451
if(numberFiles <= 450){
   //All is accounted for.
   console.log("All the files are completely accounted for.");
}else if(numberFiles > sectionNumbers){
   //The count is more
   console.log("The total count is more than expected.");
}else{
   //There must be a recount
   console.log("Please do a new count.");
}














