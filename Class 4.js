**We have a matrix:

[ [1, 2, 3], 

  [4, 5, 6],

  [7, 8, 9] ]

Write a code that will increase the value of each element in this matrix by 1.  Display both the original and increased matrix. 


 *
var matrix = [[1,2,3],[4,5,6],[7,8,9]];
 var matrix2 = [];
 console.log("Original matrix", matrix);
 for (var i = 0; i<matrix.length; i++){
    matrix2[i] = [];
    for ( var j = 0; j < 3; j++){
         matrix2[i][j] = matrix[i][j] + 1;
     }
  }
console.log("Increased matrix", matrix2);


**Write a code that takes input for five numbers from the user using a loop. Check whether each number is even or odd and store the result (even/odd) in an array. Finally, display the array outside of the loop. 


 *
var prompt = require('prompt-sync')();
var numbers = [];
for(var i = 0; i < 5; i++){
    var num = Number(prompt("Enter a number: "));

if(num%2===0){
    console.log("It's an even number");
}
else{
    console.log("It's an odd number");
}
numbers.push(num);
}
console.log("The array is", numbers);


**By using a loop, write a code that takes 5 numbers from the user. Display both the sorted and unsorted versions of the numbers. 
 *
var prompt = require('prompt-sync')();
var numbers = [];
for(var i = 0; i < 5; i++){
    var numUnsorted = Number(prompt("Enter a number: "));
    numbers.push(numUnsorted);
}
console.log("Unsorted array is:", numbers);

var numSorted = numbers.sort();
console.log("Sorted array is:", numSorted);


**mat = [

  [2, 7, 89, 6],

  [90, 45,3, 7],

  [78, 56, 4, 2]

]

**Write a code that stores the elements of the above 2D array in a 1D array. Display the final 1D array. 


 *
var mat2D = [

    [2, 7, 89, 6],
  
    [90, 45,3, 7],
  
    [78, 56, 4, 2]
  
  ]
  var mat1D = [];

  for(var i = 0;i < mat2D.length; i++){
    for(var j = 0; j < 4; j++){
        console.log(mat2D[i][j]);
        mat1D.push(mat2D[i][j]);
    }
  }
  
  console.log("Final 1D array is", mat1D);