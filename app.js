// // Declare a variable using var outside of any function or block.
// Declare a variable using let outside of any function or block.
// Declare a variable using const outside of any function or block.
// Log all three variables to the console.
// Are they accessible globally?
var myVariable = 6;
let anotherVariable = 10;
const constantVariable = "I am constant";
function myFunction() {
    console.log("Hello, World!");
}
console.log(myVariable);
console.log(anotherVariable); 
console.log(constantVariable); 

// Create a function and declare a variable using var inside the
// function.
// Declare a variable using let inside the function.
// Declare a variable using const inside the function.
// Try to log all three variables to the console outside the function.

// Are they accessible outside the function?
function testFunction() {
    var functionVar = "function var";
    let functionLet = "function let";
    const functionConst = "function const";
    console.log(functionVar); 
    console.log(functionLet); 
    console.log(functionConst); 
}   
testFunction();
// console.log(functionVar); 
// console.log(functionLet); 
// console.log(functionConst); error not defined outside function

// Use an if statement and declare a variable using var inside the
// block.
// Declare a variable using let inside the block.
// Declare a variable using const inside the block.
// Try to log all three variables to the console outside the block.
// What do you observe?

if (1 === 1) {
    var blockVar = "block var";
    let blockLet = "block let";
    const blockConst = "block const";
    console.log(blockVar); 
    console.log(blockLet); 
    console.log(blockConst); 
}

//     console.log(blockVar); 
//     console.log(blockLet); 
//     console.log(blockConst); Error 


// Write code where you log a var variable before it is declared.
console.log(hoisting);
var hoisting= "Hoisted!";


// Write code where you log a let variable before it is declared.
// Write code where you log a const variable before it is declared.
// What kind of error do you get?

// console.log(notHoisted);
// let notHoisted = "Not hoisted!";  Reference Error
// console.log(notHoistedConst);
// const notHoistedConst = "Not hoisted!"; Reference Error

// Try to declare the same variable name twice using var.
// Try to declare the same variable name twice using let.
// Try to declare the same variable name twice using const.

var duplicateVar = "First declaration";
var duplicateVar = "Second declaration"; // No error, allowed
console.log(duplicateVar); // Outputs: Second declaration

let dupliLet = "First declaration";
// let dupliLet = "Second declaration"; // SyntaxError: Identifier 'duplicateLet' has already been declared
// console.log(dupliLet);
const dupliConst = "First declaration";
// const dupliConst = "Second declaration"; // SyntaxError: Identifier 'duplicateConst' has already been declared
// console.log(dupliConst);


//  Declare a variable using var and assign it a value. Then reassign it a
// new value.
// ● Declare a variable using let and assign it a value. Then reassign it a
// new value.
// ● Declare a variable using const and assign it a value. Then reassign it
// a new value.

var reassignVar = "Something";
console.log(reassignVar); 
reassignVar = "Reassigning var";
console.log(reassignVar);
let reassignLet = "Something";
console.log(reassignLet); 
reassignLet = "Reassigning let";
console.log(reassignLet);
const reassignConst = "Something";
console.log(reassignConst); 
// reassignConst = "Reassigning const"; // TypeError: Assignment to constant variable.
// console.log(reassignConst);


// Declare a let variable inside a block but try to log it before the
// declaration.
// Declare a const variable inside a block but try to log it before the
// declaration.

// What kind of error do you get?
{
//     console.log(blockLet); // ReferenceError
    let blockLet = "Block let hoisting";
//     console.log(blockConst); // ReferenceError
    const blockConst = "Block const hoisting";
}



// Write a piece of code to demonstrate a good use case for var.
// Write a piece of code to demonstrate a good use case for let.
// Write a piece of code to demonstrate a good use case for const.

// Function-scoped variable
function Exampleforvar() {
    if (true) { 
        var functionScoped = "var isfunction scoped";
    }
    console.log(functionScoped); 
}   
Exampleforvar();

// Block-scoped variable

function letExample() {
    if (true) { 
        let blockScoped = "let is block scoped";
        console.log(blockScoped); 
    }
    // console.log(blockScoped); // Error: blockScoped is not defined
}
letExample();

// Constant reference
function Example() {
    const constantValue = { name: "Alice" };
    console.log(constantValue); 
    constantValue.name = "Bob"; 
    console.log(constantValue); 
    // constantValue = { name: "Charlie" }; // Error: Assignment to constant variable.
}
Example();


// Create variables for a person's first name and last name.
// use a template literal to create a full name string and log it to the
// console.

let firstName = "Anas";
let lastName = "Iqbal";
let fullName = `${firstName} ${lastName}`;
console.log(fullName);


// Use a template literal to create a multi-line string (e.g., an address) and
// log it to the console.

let myaddress = `House no A-773
Block H, North Nazimabad
Karachi
Pakistan
`;
console.log(myaddress);

// Create variables for two numbers.
// ● Use a template literal to create a string that includes the sum of the
// numbers.
// ● Log the string to the console

let num = 5;
let nuber = 10;
let sum = `The sum of ${num} and ${nuber} is ${num + nuber}.`;
console.log(sum);


// Create a function that takes two numbers and returns their product.
// ● Use a template literal to call this function inside a string and log the
// result to the console

function multiplynumebr(a, b) {
    return a * b;
}
console.log(`The product of 5 and 98 is ${multiplynumebr(5, 98)}.`);

// Write a simple tag function that takes a template string and logs it.
// Use this tag function with a template literal.

function Tagfun(string) {
    console.log(string);
    return string;
}
Tagfun`Hello Anas here`;


// Write a tag function that formats a string by making it uppercase.
//  ● Use this tag function with a template literal and log the result
// Tag function that makes the string uppercase
function toUpperCaseTag(strings, ...values) {
  let result = "";

  for (let i = 0; i < strings.length; i++) {
    result += strings[i];          
    if (i < values.length) {
      result += values[i];         
    }
  }

  return result.toUpperCase();
}

const city = "Karachi";
const temp = 32;

const answer = toUpperCaseTag`Today in ${city}, the temperature is ${temp}°C.`;

console.log(answer);


//  Create a variable for the current hour.
//  Use a template literal to display a different message depending on 
// whether it's morning (before 12 PM) or afternoon (after 12 PM)


let currentHr = new Date().getHours();
let timeMsg = `Good ${currentHr < 12 ? "morning" : "afternoon"}!`;
console.log(timeMsg);

//  ● Create an array of items (e.g., a shopping list).
//  ● Use a template literal to generate an HTML list (<ul> and <li> 
// elements) from the array and log it to the console.

let shoppingList = ["Rice","Oil", "Eggs", "Bread", "Butter","Jello","Jam","Milkshake"];
let htmlLst = `<ul>
${shoppingList.map(item => `<li>${item}</li>`).join('')}
</ul>`;
console.log(htmlLst);

// Create a string that includes a backtick character using a template 
// literal.
//  ● Log the string to the console.

let bacStr = `This is the way of using backticks \``;
console.log(bacStr);


// Create a variable age.
//  ● Use the ternary operator to assign a variable canVote the value 
// "Yes" if age is 18 or older, and "No" otherwise.
//  ● Log canVote to the console

let age = 20;
let canVote = age >= 18 ? "Yes" : "No";
console.log(canVote);

// Create a variable number.
//  ● Use the ternary operator to assign a variable evenOrOdd the value 
// "Even" if number is even, and "Odd" if it's odd.
//  ● Log evenOrOdd to the console.

let number = 7;
let evenOrOdd = number % 2 === 0 ? "Even" : "Odd";
console.log(evenOrOdd);

// Create a variable score.
//  Use the ternary operator to assign a variable grade based on the following conditions:
//  ● "A" if score is 90 or above.
//  ● "B" if score is 80 or above.
//  ● "C" if score is 70 or above.
//  ● "D" if score is 60 or above.
//  ● "F" otherwise.
//  Log grade to the console.

let score = 87;
let grade = score >= 90 ? "A+" :
score >= 80 ? "A" :
        score >= 70 ? "B" :
            score >= 60 ? "C" :
            score>=50 ? "D": "F";
console.log(grade);

// ● Create a variable isLoggedIn.
//  ● Use the ternary operator and logical operators to assign a variable 
// statusMessage the value "Welcome back!" if isLoggedIn is true, 
// and "Please log in" if isLoggedIn is false.
//  ● Log statusMessage to the console

let isLoggedIn = false;
let statusMessage = isLoggedIn ? "Welcome back user!" : "Please log in";
console.log(statusMessage);

// Create variables isMember and purchaseAmount.
//  ● Use the ternary operator and logical operators to assign a variable 
// discount the value 10% of purchaseAmount if isMember is true 
// and purchaseAmount is greater than 100, and 0 otherwise.
//  ● Log discount to the console.

let isMember = true;
let purchaseAmount = 150;
let discount = isMember && purchaseAmount > 100 ? purchaseAmount * (10/100) : 0;
console.log(discount);

//  Create a function maxValue(a, b) that returns the larger of the two 
// numbers using the ternary operator.
//  ● Call the function with two numbers and log the result.
function maxValue(a, b) {
    return a > b ? a : b;
}
console.log(maxValue(39, 282));

//  Create a function greet(name) that returns a greeting message. If 
// name is not provided (or is an empty string), it should return "Hello, 
// guest!", otherwise, it should return "Hello, [name]!".
//  ● Call the function with and without a name and log the result.

function greet(name) {
    return name ? `Hello, ${name}!` : "Hello, guest!";
}
console.log(greet("Anas"));
console.log(greet(""));


//  Create an array of numbers.
//  ● Use the map method with a ternary operator to create a new array 
// where each number is doubled if it is even and tripled if it is odd.
//  ● Log the new array to the console.

let arrofnumb = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let newarr = arrofnumb.map(i => i%2 ===0 ? i*2 :i*3);
console.log(newarr);

//  Create an array of strings.
//  ● Use the filter method with a ternary operator to create a new 
// array that only includes strings longer than 3.
//  ● Log the new array to the console.

let arrOfStr = ["Anas", "Iqbal", "is", "a", "good", "software", "engineer"];
let filteredArr = arrOfStr.filter(str => str.length > 3 ? true : false);
console.log(filteredArr);

// Create an array originalArray with some elements.
//  ● Use the spread operator to create a copy of originalArray called 
// copiedArray.
//  ● Log both arrays to the console to verify they are the same but not the 
// same reference
let originalArray = [1, 2, 3, 4, 5];
let copiedArray = [...originalArray];
console.log(originalArray);
console.log(copiedArray);
console.log(originalArray === copiedArray); 

// Create two arrays array1 and array2.
//  ● Use the spread operator to create a new array mergedArray that 
// combines the elements of array1 and array2.
//  ● Log mergedArray to the console.

let array1 = [11, 12, 23];
let array2 = [94, 54, 26];
let mergedArray = [...array1, ...array2];
console.log(mergedArray);


//  Create an array numbers with some elements.
//  ● Use the spread operator to add a new element at the beginning and at 
// the end of the numbers array.
//  ● Log the updated array to the console

let numbers = [3, 6, 9];
numbers = [4, ...numbers, 12];
console.log(numbers);


// Create an object originalObject with some key-value pairs.
//  ● Use the spread operator to create a copy of originalObject called 
// copiedObject.
//  ● Log both objects to the console to verify they are the same but not the 
// same reference
let originalObject = { name: "Anas", age: 20 };
let copiedObject = { ...originalObject };
console.log(originalObject);
console.log(copiedObject);
console.log(originalObject === copiedObject);

//  Create an object user with properties name, age, and email.
//  ● Use the spread operator to create a new object updatedUser that 
// updates the email property and adds a new address property.
//  ● Log the updatedUser object to the console

let user = { name: "Anas", age: 20, email: "anus.f.111@gmail.com" };
let updatedUser = { ...user, email: "updatedemail@gmail.com",address:"Block H North Nazimabad"};
console.log(updatedUser);

//  Create a function sum(a, b, c) that returns the sum of three 
// numbers.
//  ● Create an array numbers with three elements.
//  ● Use the spread operator to pass the elements of numbers as 
// arguments to the sum function.
//  ● Log the result to the console

function sumof3(a, b, c) {
    return a + b + c;
}
let numbrs = [5, 13, 15];
console.log(sumof3(...numbrs));

// Create a function combineArrays that takes any number of arrays 
// as arguments and returns a single array containing all elements.
//  ● Use the spread operator inside the function to combine the arrays.
//  ● Call the function with multiple arrays and log the result.

function combineArrays(...arrays) {
    return arrays.flat();
}
let combinedarr = combineArrays([1, 2], [3, 4], [5, 6]);
console.log(combinedarr);

//  Create a function multiply that takes a number and any number of 
// additional arguments.
//  ● Use the rest parameter to gather the additional arguments into an 
// array and multiply each by the first argument.
//  ● Return an array of the results.
//  ● Call the function with appropriate arguments and log the result
function multiply(firstno, ...numbers) {
    return numbers.map(j => j*firstno);
}
console.log(multiply(2, 3, 4, 5));


//  Create a nested array nestedArray and use the spread operator to 
// create a shallow copy.
//  ● Modify the inner arrays in the copied array.
//  ● Log both the original and copied arrays to observe the effect of 
// shallow copying

let nestedArray = [[19, 22], [63, 84],78];
let shallowCopy = [...nestedArray];
shallowCopy[0][1] = 99; 
shallowCopy[2] = 100;
console.log("Original Array:", nestedArray); 
console.log("Shallow Copy:", shallowCopy);

// Create a function sum that uses the rest operator to take any number 
// of arguments.
//  ● The function should return the sum of all its arguments.
//  ● Call the function with different numbers of arguments and log the 
// results.

function sum(...args) {
    return args.reduce((acc, val) => acc + val, 0);
}
console.log(sum(1, 9, 3));
console.log(sum(10, 2, 0,6, 99));
console.log(sum(5, 65));

// Create a function average that uses the rest operator to take any 
// number of arguments.
//  ● The function should return the average of all its arguments.
//  ● Call the function with different numbers of arguments and log the 
// results
function average(...args) {
    let total = args.reduce((acc, val) => acc + val, 0);
    return args.length ? total / args.length : 0;
}
console.log(average(99,76,88,45));

console.log(average(10,20));
console.log(average(5));

// ● Create an array numbers with at least 5 elements.
//  ● Use array destructuring with the rest operator to assign the first 
// element to a variable first and the remaining elements to a variable 
// rest.
//  ● Log first and rest to the console

let numbersarr = [98, 45, 63, 80, 87];
let [first, ...rest] = numbersarr;
console.log(first); 
console.log(rest);

// Create an array colors with at least 5 elements.
//  ● Use array destructuring with the rest operator to skip the first two 
// elements and assign the remaining elements to a variable 
// remainingColors.
//  ● Log remainingColors to the console

let colors = ["offwhite", "peach", "crimson red","indigo", "Yellow", "violet"];
let [, , ...remainingColors] = colors;
console.log(remainingColors);

// ● Create an object person with properties name, age, email, and 
// address.
//  ● Use object destructuring with the rest operator to assign name and 
// email to individual variables, and the remaining properties to a 
// variable rest.
//  ● Log the variables to the console

let persoobj = { nameof: "Anas", age: 20, email: "anus.f.111@gmail.com", address: "Block H North Nazimabad" };
let { nameof, email, ...restProps } = persoobj;
console.log(nameof); 
console.log(email); 
console.log(restProps);

// Create an object student with properties id, name, grades, and 
// info (where info is another object with properties age and major).
//  ● Use nested destructuring with the rest operator to extract id, name, 
// and major to individual variables, and the remaining properties to a 
// variable rest.
//  ● Log the variables to the console

let astudent = { id: 101, sname: "Anas Iqbal", grades: [90, 85, 88], info: { age: 20, major: "Computer Science" } };
let { id, sname, info: { major }, ...restStudent } = astudent;
console.log(id);
console.log(sname);
console.log(major);
console.log(restStudent);

//  Create a function filterEven that uses the rest operator to take any 
// number of arguments.
//  ● The function should return a new array containing only the even 
// numbers.
//  ● Call the function with different numbers of arguments and log the 
// results

function filterEven(...args) {
    return args.filter(num => num % 2 === 0);
}
console.log(filterEven(1, 2, 3, 4, 5, 6));
console.log(filterEven(10, 15, 20, 25, 30));
console.log(filterEven(7, 9, 11));

// ● Create a function combineAndSort that uses the rest operator to 
// take any number of arrays.
//  ● The function should combine all the arrays into one and return the 
// sorted result.
//  ● Call the function with different arrays and log the results.


function combineAndSort(...arrays) {
    return arrays.flat().sort((a, b) => a - b);
}
console.log(combineAndSort([5, 2, 9], [1, 6, 3], [8, 4, 7]));
console.log(combineAndSort([10, 20], [15, 5], [30, 25]));
console.log(combineAndSort([3, 1], [4, 2], [6, 5]));

// Create an array fruits with the elements "apple", "banana", and 
// "cherry".
//  ● Use destructuring to assign the first element to a variable 
// firstFruit, the second to secondFruit, and the third to 
// thirdFruit.
//  ● Log the variables to the console.

let fruits = ["apple", "banana", "cherry"];
let [firstFruit, secondFruit, thirdFruit] = fruits;
console.log(firstFruit); 
console.log(secondFruit); 
console.log(thirdFruit);

//  Create an array colors with the elements "red", "green", "blue", 
// "yellow".
//  ● Use destructuring to assign the first element to primaryColor and 
// the third element to tertiaryColor.
//  ● Log the variables to the console

let colorsarr = ["red", "green", "blue", "yellow"];
let [primaryColor, , tertiaryColor] = colorsarr;
console.log(primaryColor); 
console.log(tertiaryColor);

// Create an array numbers with the elements 1 through 5.
//  ● Use destructuring to assign the first element to firstNumber and 
// the rest of the elements to remainingNumbers.
//  ● Log the variables to the console

let numbersarray = [1, 2, 3, 4, 5];
let [firstNumber, ...remainingNumbers] = numbersarray;
console.log(firstNumber); 
console.log(remainingNumbers);


// Create an object person with properties name, age, and city.
//  ● Use destructuring to assign the properties to variables name, age, 
// and city.
//  ● Log the variables to the console

let person = { pname: "Anas", p_age: 20, p_city: "Karachi" };
let { pname, p_age, p_city } = person;
console.log(pname); 
console.log(p_age); 
console.log(p_city);

// Create an object car with properties make, model, and year.
//  ● Use destructuring to assign the properties to variables carMake, 
// carModel, and carYear.
//  ● Log the variables to the console
let car = { make: "Toyota", model: "Supra", year: 2022 };
let { make: carMake, model: carModel, year: carYear } = car;
console.log(carMake); 
console.log(carModel); 
console.log(carYear);

// Create an object settings with properties theme and language.
//  ● Use destructuring to assign the properties to variables theme and 
// language, and provide a default value of "English" for language.
//  ● Log the variables to the console

let settings = { theme: "Black" };
let { theme, language = "English" } = settings;
console.log(theme); 
console.log(language);

//  Create an array nestedArray with the elements [1, 2], [3, 4], 
// and [5, 6].
//  ● Use nested destructuring to assign the first elements of each 
// sub-array to variables a, b, and c.
//  ● Log the variables to the console

let nestedArray2 = [[1, 2], [3, 4], [5, 6]];
let [[a], [b], [c]] = nestedArray2;
console.log(a); 
console.log(b); 
console.log(c);

// Create an object profile with properties username, details 
// (which is another object with properties email and address).
//  ● Use nested destructuring to assign username, email, and address 
// to variables.
//  ● Log the variables to the console.

let profile = { username: "AnasIqbal", details: { useemail: "anus.f.111@gmail.com", address: "Block H North Nazimabad" } };
let { username, details: { useemail, address } } = profile;
console.log(username); 
console.log(email); 
console.log(address);

// Create an object data with properties id, info (which is an array 
// with elements {name: "Alice"} and {age: 25}).
//  ● Use nested destructuring to assign id, name, and age to variables.
//  ● Log the variables to the console.

let data = { id: 1, info: [{ a_name: "Alice" }, { per_age: 25 }] };
let { ids, info: [{ a_name }, { per_age }] } = data;
console.log(ids); 
console.log(a_name); 
console.log(age);

//  Create a function printCoordinates that takes an array [x, y] 
// as a parameter.
//  ● Use destructuring in the function parameter to extract x and y.
//  ● Log x and y inside the function.
//  ● Call the function with different coordinates.

function printCoordinates([x, y]) {
    console.log(`X: ${x}`);
    console.log(`Y: ${y}`);
    
}
printCoordinates([19, 20]);
printCoordinates([51, 15]);
printCoordinates([10, 0]);

// Create a function displayUser that takes an object {name, age} 
// as a parameter.
//  ● Use destructuring in the function parameter to extract name and age.
//  ● Log name and age inside the function.
//  ● Call the function with different user objects

function displayUser({ name, age }) {
    console.log(`Name: ${name}`);
    console.log(`Age: ${age}`);
}
displayUser({ name: "Anas", age: 20 });
displayUser({  age: 19,name: "Ali" });

//  Create an object book with properties title, author, and year.
//  ● Use Object.keys() to get an array of the property names of the 
// book object.
//  ● Log the array to the console.
let book = { title: "Fire and Blood", author: "George R.R. Martin", year: 2018 };
let bookKey_s = Object.keys(book);
console.log(bookKey_s);

// Create an object student with properties name, age, grade, and 
// school.
//  ● Use Object.keys() to get an array of the property names and 
// determine the number of properties in the student object.
//  ● Log the number of properties to the console
let student = { name: "Anas Iqbal", age: 20, grade: "A", school: "Jawan Pakistan" };
let studentKeys = Object.keys(student);
console.log(studentKeys.length);

//  Create an object product with properties name, price, and category.
//  Use Object.keys() to get an array of the property names and iterate 
// over this array to log each property name and its corresponding value

let product = { name: "School bag", price: 2500, category: "Stationery" };
let productKeys = Object.keys(product);
productKeys.forEach(key => {
    console.log(`${key}: ${product[key]}`);
});


// Create an object movie with properties title, director, year, 
// and genre.
//  ● Use Object.values() to get an array of the property values of the 
// movie object.
//  ● Log the array to the console

let movie = { title:"Jojo's Rabbit", director: "Taika Waititi", year: 2019, genre: "Comedy-Drama" };
let moviealues = Object.values(movie);
console.log(moviealues);


// Create an object scores with properties math, science, and 
// english, each with numeric values.
//  ● Use Object.values() to get an array of the property values and 
// calculate the total sum of the values.
//  ● Log the sum to the console
let scores = { math: 90, science: 85, english: 88 };
let scoreValues = Object.values(scores);
let totaL = scoreValues.reduce((a, b) => a + b, 0);
console.log(totaL);

// Create an object user with properties username, email, and 
// location.
//  ● Use Object.values() to get an array of the property values and 
// iterate over this array to log each value
let userobj = { username: "AnasIqbal", email: "anus.f.111@gmail.com", location: "Karachi" };
let userVaL = Object.values(userobj);
userVaL.forEach(value => {
    console.log(value);
});


//  Create an object car with properties make, model, and year.
//  ● Use Object.entries() to get an array of the key-value pairs of the 
// car object.
//  ● Log the array to the console.

let carobj = { make: "Toyota", model: "Supra", year: 2022 };
let carEntries = Object.entries(carobj);
console.log(carEntries);

//  Create an object person with properties firstName, lastName, 
// and age.
//  ● Use Object.entries() to convert the person object into an array 
// of key-value pairs.
//  ● Log the array to the console

let personobj = { first_Name: "Anas", last_Name: "Iqbal", age: 20 };
let personEntes = Object.entries(personobj);
console.log(personEntes);


//  Create an object settings with properties theme, 
// notifications, and privacy.
//  ● Use Object.entries() to get an array of the key-value pairs and 
// iterate over this array to log each key and value

let settingsobj = { theme: "Dark", notifications: true, privacy: "High" };
let settingsEnt = Object.entries(settingsobj);
settingsEnt.forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
});

//  Create an object inventory with properties apples, bananas, 
// oranges, and grapes, each with numeric values.
//  ● Use Object.keys() and filter() to get an array of keys where 
// the value is greater than 10.
//  ● Log the array to the console

let inventory = { apples: 15, bananas: 8, oranges: 12, grapes: 5 };
let filteredKeys = Object.keys(inventory).filter(key => inventory[key] > 10);
console.log(filteredKeys);

// Create an object temperatures with properties morning, 
// afternoon, and evening, each with numeric values.
//  ● Use Object.entries() to get an array of key-value pairs, then use 
// map() to convert the temperatures from Celsius to Fahrenheit.
//  ● Convert the transformed array back to an object.
//  ● Log the new object to the console

let temperatures = { morning: 20, afternoon: 30, evening: 25 };
let farenheitTempes = Object.fromEntries(
    Object.entries(temperatures).map(([key, value]) => [key, (value * 9/5) + 32])
);
console.log(farenheitTempes);

// Create an object roles with properties admin, editor, and 
// viewer, each with string values.
//  ● Use Object.entries() to get an array of key-value pairs, then use 
// map() to swap the keys and values.
//  ● Convert the transformed array back to an object.
//  ● Log the new object to the console.
let roles = {admin:"Anas", editor:"Ali", viewer:"Sawera"};
let swappedRoles = Object.fromEntries(
    Object.entries(roles).map(([key, value]) => [value, key])
);
console.log(swappedRoles);

// Create an array numbers with values from 1 to 10.
//  ● Write a higher-order function filterAndMap that takes an array, a 
// filter function, and a map function.
//  ● Use this function to filter out even numbers and then square the 
// remaining numbers.
//  ● Log the resulting array to the console
let anarrofnums = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function filterAndMap(array, filterFn, mapFn) {
    return array.filter(filterFn).map(mapFn);
}
let result = filterAndMap(anarrofnums, n => n % 2 !== 0, nu=> nu * nu);
console.log(result);

//  Create an array words with the values "apple", "banana", "cherry", 
// "date".
//  ● Write a higher-order function sortAndReduce that takes an array, a 
// sort function, and a reduce function.
//  ● Use this function to sort the words alphabetically and then 
// concatenate them into a single string.
//  ● Log the resulting string to the console

let words = ["apple", "banana", "cherry", "date"];
function sortAndReduce(array, sortFn, reduceFn, initialValue) {
    return array.sort(sortFn).reduce(reduceFn, initialValue);
}   
let concatenatedString = sortAndReduce(words, (a, b) => a.localeCompare(b), (acc, word) => acc + word, "");
console.log(concatenatedString);