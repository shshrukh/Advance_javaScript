function jsFunctionSyntax(){
    console.log("Hello to JS");
}
// function ivocation
 jsFunctionSyntax();
//  the result will be in console.log is Hello to JS and data type is number.

function addition(){
    console.log(1 *2);
}
addition();
// the result will be in console.log is 2 and data type is number.

// return
function multplication(){
    return 4 * 5 ;
}
let resultOne = multplication();
console.log(resultOne);
 
// when we call or invoked the function it will excicute and if we used return keyword then it will stope excution of rset of the code after return keyword and return the value

// Parameters and arguments 
 function subtraction(parameter1, parameter2){
    return parameter1 - parameter2;
 }
 let resultTow = subtraction(5 - 3);
 console.log(resultTow);
//  here when we define the function and inside the round brackets we define the parameters and using that parameters in function or function scope and when we call or invoked the function we define arguments. Arguments can hold the calue of parameters


//------->arrow function <--------//
const myFunctions = (a,b)=> a*b;