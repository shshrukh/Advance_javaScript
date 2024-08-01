// start with synchronous code 
//-----------------synchronous mean exsicuation of code line by line
console.log('start');

for (i = 0; i < 1000; i++) {
    console.log('hello');
}

console.log('end');

//ayschronous 
// --------------if any code consuming time like 'setTimeOut', APIs etc are aychronous code 

// function asyncCode(){
//     console.log('Hi i am async code');
// }
// make a setTimeOut function
// setTimeout(asyncCode,5000)            // setTimeOut fuction have two parameters 1. callback func and 2. time

setTimeout(() => {
    console.log('Hi i am async code')
}, 5000);    // 5s = 5000
 // as we know that JS is synchronous language, then it will be excitue first and then console'start' and 'end'? in AST the code is check first and then it observe that this line of code is responcible of Web APIs and stack memory the console 'start' and 'end' afer the sychronous code will exicute now its time to exicute the asynchronous code and after five second it will be excicuted.

console.log('start');

console.log('end');






//--------------------callBack--------------------//
// callbacks are those function we pass an argument as a function


function sum(a,b){
    return a + b;
}

function sub(a,b){
    return a - b;
}

function mult(a,b){
    return a * b;
}

function div(a,b){
    return a / b;
}

function calculater(a,b,operater){
    return operater(a,b);
}

console.log(calculater(2,4,sum));
console.log(calculater(6,4,sub));
console.log(calculater(6,4,mult));
console.log(calculater(16,4,div));


//------------------> callback Hell <----------------//




