function jsFunctionSyntax(){
    console.log("Hello to JS");
}
// function ivocation or call the function
 jsFunctionSyntax();
//  the result will be in console.log is Hello to JS and data type is number.


//types of function
//---------->Function Declaration<-----------//
// the function are acutally anonymous function (function with out name);

function addition(numOne,numTow) {
    console.log(numOne + numTow);
}
addition(1,3); 

function multplication(numOne,numTow) {
    return numOne *numTow
}
multplication(4,6);

//-------->Function Expression<---------//
const x = function(numOne,numTow){
    return numOne - numTow
}
x(3,2);

//--------->The Function() Constructor<--------//
let myFynctionOne = new Function (a, b, 'return a * b');
console.log(myFynctionOne(3,2)); //same as

let myFunctionTwo =  function (a, b){
    return a * b;
}
console.log(myFunctionTwo(3,2));

//----------->Self-Invoking functions<-----------//
// a self invoking expression started atomatically, without being called. 
(function(){
    console.log('Hello World')
})();
//The function above is actually an anonymous self-invoking function (function without name).

//-------->Important Note<---------//
//1. the typeof operater in JS return "function" for functions. But JS function can best be describe as Objects. JS function have both methods and properties

// the arguments.length properties retrun the number of arguments resived when function is invoke.
function myFunctionThree(a, b) {
    return arguments.length;
}
console.log(myFunctionThree(3,2));

//the toString() method return the function as a string;
function myFunctionFour(a, b) {
    return a * b;
}
console.log(myFunctionFour(4,2).toString()); // return the product of a*b as string.

//----->Arrow Function<-----//
// the arrow function allow a short sentex of function experssion 
// We dont't need the function keyword, the return keyword and the carly brakets only.

const myFunctionFive = (a,b)=> a*b;
console.log(myFunctionFive(4,2));
// Arrow function are not hoisted. We must be define before we can use.
//Using const is safer then using var, because function experssion is always constan value
//We can only omit the return keyword and the curly brackets if the function is a single statement. Because of this, it might be a good habit to always keep them
const myFunctionSix = (a, b)=>{return a*b};
console.log(myFunctionSix(4,3));

