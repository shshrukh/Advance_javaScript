const textOne = 2;
const textTwo = 3;
const textThree = 50;
const textFour = 7;
let textFive = 9;

let additionResult = textOne + textTwo;
let subtractionResult = textThree - textFour; 
let multplicationResult = textFour * textOne;
let divisionResult = textThree / textOne;
let exponentiationResult = textOne ** textTwo
let modulusResult = textFour % textTwo;
textFive++;
textFive--;

document.getElementById("demoOne").innerText = textOne+" + "+textTwo+" = "+ additionResult;
document.getElementById("demoTwo").innerText = textThree+" - "+textFour+" = "+ subtractionResult;
document.getElementById("demoThree").innerText = textFour+" * "+textOne+" = "+ multplicationResult;
document.getElementById("demoFour").innerText = textThree+" / "+textOne+" = "+ divisionResult;
document.getElementById("demoFive").innerText = textOne+" ** "+textTwo+" = "+ exponentiationResult;
document.getElementById("demoSix").innerText = textFour+" % "+textTwo+" = "+ modulusResult;
document.getElementById("demoSeven").innerText = textFive+" + 1 = "+ textFive;
document.getElementById("demoEight").innerText = textFive+" - 1 = "+ textFive;
