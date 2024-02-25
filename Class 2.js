**Write code: Suppose you have a login system where you can log in by using only any of three names.

1) Determine three names inside your code.'
2) Write a code that takes the user input.
3) If the user provided name doesn’t match with none of your predetermined names it will display “Sorry! We don’t find you in the system.” Otherwise, it will display “Welcome! “.

var prompt = require('prompt-sync')();

var name = prompt(" Enter your name ")

if ( name == "Anika"){
    console.log("Welcome!");
}
else if ( name == "Megha"){
    console.log("Welcome!");
}
else if ( name == "Promila"){
    console.log("Welcome!");
}
else {
    console.log(" Sorry! We dont find you in the system.")
}
 

**Write a code that prompts the user to enter a year. The code should display a message indicating whether the year is a leap year or not.

var prompt = require('prompt-sync')();

var year = Number(prompt(" Enter the year "));
 
if( year % 4 === 0 ){
    console.log(" This is a leap year. ");
}
else {
    console.log(" This is not a leap year. ")
}
 

**Create a simple shopping cart program. The program should:

1) Prompt the user to enter the price of three items one by one.

2) Apply a discount based on the total cost:

3) If the total cost is greater than 50 TK, apply a 10% discount. If the total cost is greater than 100, apply a 20% discount. Use the formula: discountedCost = totalCost - (totalCost * discount)

4) Display the final cost after applying the discount.

var prompt = require('prompt-sync')();
var price1 = Number(prompt("Enter price1 "));
var price2 = Number(prompt("Enter price2 "));
var price3 = Number(prompt("Enter price3 "));
var totalPrice = price1 + price2 + price3;
console.log(" The total price is ", totalPrice);

if( 50 < totalPrice && totalPrice<= 100 ){
    var discount1 = 0.1;
    var discountPrice1 = totalPrice - (totalPrice*discount1);
    console.log(" The discounted price one is ", discountPrice1);
}

else if (totalPrice > 100){
    var discount2 = 0.2;
    var discountPrice2 = totalPrice - (totalPrice*discount2);
    console.log(" The discounted price two is ", discountPrice2);
}
else{
    console.log("We have no discount for you.");
}
 

**Write a code that calculates the final grade for a student based on their scores in different subjects. The program should:

1) Prompt the user to enter the scores for three subjects: Math, English, and Science.

2) Calculate the average score using the formula: average = (mathScore + englishScore + scienceScore) / 3.

3) Display the final average score.

4) Use conditional statements to determine and display the corresponding letter grade based on the following grading scale:

A:  > 60 

F: <60

var prompt = require('prompt-sync')();
var mathScore = Number(prompt("Enter the score for Math "));
var englishScore = Number(prompt("Enter the score for English "));
var scienceScore = Number(prompt("Enter the score for Science "));
var averageScore = (mathScore + englishScore + scienceScore) / 3;
console.log("The final average score is ", averageScore);

if(averageScore > 60){
    console.log("The final grade is A.");
}
else{
    console.log("The final grade is F.");
}