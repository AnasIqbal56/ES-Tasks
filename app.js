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
// ● Use this tag function with a template literal.

function Tagfun(string) {
    console.log(string);
    return string;
}
