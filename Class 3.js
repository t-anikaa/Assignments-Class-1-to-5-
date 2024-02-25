**Write a code that takes two numbers, the first and last numbers of a series, as input from the user. The program should then calculate and display the sum of all the numbers in that series. For example:
If the user inputs 3 and 8, the program should calculate and print the sum: 3 + 4 + 5 + 6 + 7 + 8.
If the user inputs 1 and 10, the program should calculate and print the sum: 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10.

var prompt = require('prompt-sync')();
var num1 = Number(prompt("Enter the first number of the series: "));
var num2 = Number(prompt("Enter the last number of the series: "));
var sum = 0;
for(var number = num1;num1<=num2;num1++){
    sum = sum + num1;
}
console.log("The sum of all the numbers in the series is: ",sum);
 
**Write a code to calculate and display the sum of all even numbers between 1 and 500.

var prompt = require('prompt-sync')();
var sum = 0;
for(var i = 2;i<=500;i=i+2){
    sum=sum+i;
}
console.log("The sum of all the even numbers between 1 to 500 is: ",sum);
 
**Write a code to calculate and display the sum of all odd numbers between 1 and 500.

var prompt = require('prompt-sync')();
var sum = 0;
for(var i = 1;i<=500;i=i+2){
    sum=sum+i;
}
console.log("The sum of all the odd numbers between 1 to 500 is: ",sum);
 
**Suppose we have a series: 3+8+13+........  

- Find the 100th term of this series. The code will display the value of the 100th term of this series. You can use the formula: nth_term = a + (n-1) d 

- Display the sum of the series up to the 100th term. 

//Finding 100th term
var firstTerm = 3;
var diff = 5;
var n = 100;
var nthTerm = firstTerm + (n - 1)*diff;
console.log("The nth term of the series is: ", nthTerm);
//Finding the sum up to 100th term
var sum = 0;
for(var i = 3;i<=nthTerm;i=i+5){
    sum = sum + i;
}
console.log("The sum of the series up to 100th term is: ",sum);