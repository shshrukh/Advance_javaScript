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

