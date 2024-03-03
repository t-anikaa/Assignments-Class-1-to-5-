// **Create an object called person with properties like name, age, and occupation. Then, write functions to:
// Access and print each of the properties of the person object.
// Modify the value of a specific property (e.g., update age).
// Add a new property (e.g., hobbies).
// *
// 3 points
var person = {
        name: "Anika",
        age: 23,
        occupation: "student",
    };
    function persondetails(person){
        console.log("Hey, My name is "+ person.name, "\n", "My age is "+ person.age, "\n", "My occupation is "+ person.occupation);
    }
    persondetails(person)
    
    function updateAge(person){
        person.age = 24;
        console.log(" My updated age is "+ person.age)
    }
    updateAge(person);
    
    function addingHobby(person){
        person.hobby = "Gardening";
        console.log(" My hobby is "+ person.hobby)
    }
    addingHobby(person);
    

// ** var fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.length)
// Here, length is a: property or method of “fruits” array? 
property

// ** var student = { 
// name: "Your name", 
// age : 22, 
// numbers: [89, 76, 56] 
// } 
// write a method inside the student object that will calculate the average of the numbers.
var student = { 

        name: "Anika", 
        
        age : 22, 
        
        numbers: [89, 76, 56] ,
        calculateAverage: function(){
            let sum = 0;
            for(var i = 0; i < this.numbers.length; i++) {
            sum += this.numbers[i];
        }
        var average = sum / this.numbers.length
        return average
        } 
    }
    console.log(student.calculateAverage());
    
    


