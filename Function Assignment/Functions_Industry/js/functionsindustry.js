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
if(numberFiles == 450){
   //All is accounted for.
   console.log("All the files are completely accounted for.");
}else if(numberFiles > sectionNumbers){
   //The count is more
   console.log("The total count is more than expected.");
}else{
   //There must be a recount
   console.log("Please do a new count.");
}

//If the total count and section count is the same
if(numberFiles && sectionNumbers == 450){
  //All counts are off!
  console.log("We have to redo the whole count!");
}

//If the total count is still off
if(numberFiles -1 > sectionNumbers){
   //files are still off
 console.log("All the work has to be redone!");
}

//If counts are still off
if(numberFiles / 2 > sectionNumbers){
   //The count doesn't add up
   console.log("The work may be wrong still!");
}

//Create a variable for total

var total;

//Create a variable for overNumber

var overNumber;

//If the
total = (numberFiles < sectionCount) ? "We're on the wrong track." : "We're on the right track!";
console.log(total);

calTotal(450,225,1);

function calTotal(numberFiles, sectionSplit, overNumber){ //numberFiles=450, sectionSplit=225, overNumber=1
  var sectionBuild = numberFiles / 2;
  console.log(sectionBuild);
}

//Anonymous function

var total = function(numberFiles, overNumber){
//code the function runs
   var total = numberFiles - overNumber;
   return total;
}

var a = total(450, 1);

console.log(a);

















