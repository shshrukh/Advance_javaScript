const fNmae = 'shahrukh';
const lNmae = 'arbaz'
let result = "Hello"+" "+fNmae+" "+lNmae;

let result2 =document.getElementById("demo");

result2.innerText=result

// The += assignment operator also be use to add (concatenate) strings:

let textOne = "hell to ";
textOne += "Java Script";
let result3 = document.querySelector("#demoTwo");

result3.innerHTML=textOne;

const textTwo = 5;
const textThree = '5';
const textFour= 'hello';
let resultOne = textTwo + textTwo;
let resultTwo = textTwo + textThree;
let resultThree = textTwo + textFour;

let result4 =document.getElementById("demoThree");
let result5 =document.getElementById("demoFour");
let result6 =document.getElementById("demoFive");
result4.innerText=resultOne;
result5.innerText=resultTwo;
result6.innerText=resultThree;

