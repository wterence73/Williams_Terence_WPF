/**
 Terence Williams
 Functions Assignment
 Personal
 11/19/2014
 */

//Create for three clown fish sizes

//Alert for company with large clown fish

alert("Patrick and Spongebob Fishery");

var fishSize = prompt("Guess what is the largest fish ever?");

//Console.log out the response
console.log(fishSize);

//Alert user with answer

alert("The largest fish weighs 300 tons and is 800 feet long!");

//Create variables for fish sizes

var lilFish = 1000
var bigFish = 3000
var largeFish = 5000
var totalFish= 10000

if(lilFish + bigFish + largeFish == totalFish || totalFish >= largeFish + lilFish + bigFish){
    //All fish we have
    console.log("We have some great big fish!");
}

if(largeFish - lilFish < bigFish){
    //we have the desired sizes
    console.log("We have all the desired fish!");
}else if(bigFish + largeFish +2000){
    //We need more large fish!
    console.log("We need to order more large fish!");
}