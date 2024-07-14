const fNmae = 'shahrukh';
const lNmae = 'arbaz'
let result = "Hello"+" "+fNmae+" "+lNmae;

let result2 =document.getElementById("demo");

result2.innerText=result

// The += assignment operator also be use to add (concatenate) strings:

let textOne = "hell to ";
textOne += "Java Script"
let result3 = document.querySelector("#demoTwo");

result3.innerHTML=textOne;
console.log(result3.innerText=textOne)