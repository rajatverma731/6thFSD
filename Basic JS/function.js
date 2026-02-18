// function hello(){
//     console.log("Hello World of JAVASCRIPT")
// }

// hello();


// // Generating random number from one to six in a dice
// function dice(){
//     let num = Math.random();
//     num = num * 6;
//     num = Math.floor(num);
//     num = num+1;
//     console.log(num);
// }

// dice();

// Passing arguments in fnctions:- 

// function printName(name,age){
//     console.log(`${name}'s age is ${age}`);
// }

// printName("Radhika",23);

// function average(a,b,c){
//     console.log((a+b+c)/3);
// }

// average(3,5,9);

// function sum(a,b){
//     return a+b;
// }

// console.log(sum(4,3));

// function sum(a,b){
//     console.log("hello");
//     return a+b;
//     console.log("Meowww");// this is of no use here
// }

// console.log(sum(4,3));

// function sum(n){
//     let sum = 0;
//     for(let i = 1; i<=n; i++){
//         sum = sum + i;
//     }

//     return sum;

// }


// SCOPES - FUNCTION SCOPE, LEXICAL SCOPE, GLOBAL SCOPE, BLOCK SCOPE

// Function scope- variable defined inside a funnction are not accessible or visible outside that function

// function calsum(a,b){
//     let sum = a+b;
//     console.log(sum);
// }
// calsum(1,2);

// Variable declared inside the block {} cannot be used outside the block.
// only used on let and const keyword.


// Lexical function defined outside a function can be accessible inside anpther function defined after the variable declaration
// The opposite is not true

// function outerfunc(){
//     let x = 5;
//     let y = 6;
//     function innerfunc(){
//         console.log(x);
//     }
//     innerfunc(); // Bahar wale variables ander accisible honge lekin ander wale bahar n hi honge

// }


// HIGHER ORDER FUNCTION - Takes one or multiple functions as arguments and return a function
 
