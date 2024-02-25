//**Write a function that will take two numbers and three callback functions as parameters. Calculate the summation, subtraction, and multiplication of the numbers using callback functions. Finally, display the results.

 *
function add(num1){
    return num1**2;
}
function calculateAddition(num1,num2,add){
    return add(num1)+num2;
}
console.log("The sum is ", calculateAddition(2,4,add));

function substract(num1){
    return num1**2;
}
function calculateSubstraction(num1,num2,substract){
    return substract(num1)-num2;
}
console.log("The substraction is ", calculateSubstraction(2,4,substract));

function multiply(num1){
    return num1**2;
}
function calculateMultiplication(num1,num2,multiply){
    return multiply(num1)*num2;
}
console.log("The multiplication is ", calculateMultiplication(0,2,multiply));

// **Suppose you have an array containing a few numbers, now use the “. map()” method of the array to square all the numbers of the array. 

 *
var input = [2,4,6,8,10];
var squaredInput = input.map(function(value){
    return value*value;
})
console.log(squaredInput);


// **Write a function that takes only the name of the user as a parameter and displays a welcome message. The default value of the user's name will be “guest”.

 *
function greet(name="guest"){
    console.log("Welcome", name);
}
greet("Anika");


// **Suppose we have an equation: Y = x^2 + 2x + 6. Write a function that will take the value of x as a parameter and return the value of Y.

 *
function value(x){
    var y = x**2 + 2*x + 6;
    return y;
}
var result = value(2);
console.log(result);