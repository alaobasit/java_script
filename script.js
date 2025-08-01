// JavaScript Assignment


// Assignmwnt 1 - console.log and Comments

console.log("My name is Dessy"); 
console.log("I am 25 years old");  
 
// Assignment 2 – Declaring Variables

const fullName = "King Dessy";
let age = 25;
const favoriteCity = "Cotonou";
let isStudent = true;

console.log(fullName);
console.log(age);
console.log(favoriteCity);
console.log(isStudent);


// Assignment 3 – String Concatenation vs Template Literals

let name = "John";
let city = "Abuja";

// String concatenation
console.log("My name is " + name + " and I live in " + city + ".");

// Template literal
console.log(`My name is ${name} and I live in ${city}.`);


// Assignment 4 – Primitive Data Types

let myString = "Hello";         // String
let myNumber = 42;              // Number
let myBoolean = true;           // Boolean
let myUndefined;                // Undefined 
let myNull = null;              // Null

// Logging values and their types
console.log(myString, typeof myString);
console.log(myNumber, typeof myNumber);
console.log(myBoolean, typeof myBoolean);
console.log(myUndefined, typeof myUndefined);
console.log(myNull, typeof myNull);


// Assignment 5 – Create an Object

let car = {
  brand: "Toyota",
  model: "Camry",
  year: 2020,
  color: "Black"
};

// Log the entire object
console.log(car);

// Access two properties
console.log(car.brand);       // Dot notation
console.log(car["year"]);     // Bracket notation



// Assignment 6 – Modify an object
car.engine = "V6";
car.color = "White";
delete car.year;

console.log(car);


// Assignment 7 – Nested Objects
let student = {
  name: "Alice",
  age: 20,
  subjects: {
    math: 85,
    english: 92
  }
};

// Log the student's name
console.log(student.name);

// Log one subject score using dot notation
console.log(student.subjects.math);


// Assignment 8 – Object Methods 
let phone = {
  brand: "Samsung",
  model: "Galaxy S21",
  color: "Black"
};

console.log(Object.keys(phone));      
console.log(Object.values(phone));    
console.log(Object.entries(phone));   
console.log(phone.hasOwnProperty("model"));  
console.log(phone.hasOwnProperty("price"));  

// Assignment 9- Type Checking
let value = 10;
console.log(value, typeof value);  

value = "hello";
console.log(value, typeof value);   

value = true;
console.log(value, typeof value);  


// Assignment 10 – Challenge Task 
let favorite = {
  title: "Inception",
  director: "Dotun collins",
  year: 2010,
  genre: "Sci-Fi",
  ratings: {
    imdb: 8.8,
    rottenTomatoes: 87
  }
};

console.log(favorite.genre);
console.log(favorite.ratings.imdb);

favorite.language = "English";
delete favorite.year;

console.log(favorite);


