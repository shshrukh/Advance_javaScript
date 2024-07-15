const numberOne = 2;
const numberTwo = 3;
const numberThree = 50;
const numberFour = 7;
let numberFive = 9;
numberFive++;
let numberSix = 10;
numberSix--;

let additionResult = numberOne + numberTwo;
let subtractionResult = numberThree - numberFour; 
let multiplicationResult = numberFour * numberOne;
let divisionResult = numberThree / numberOne;
let exponentiationResult = numberOne ** numberTwo
let modulusResult = numberFour % numberTwo;


document.getElementById("demoOne").innerText = numberOne+" + "+numberTwo+" = "+ additionResult;
document.getElementById("demoTwo").innerText = numberThree+" - "+numberFour+" = "+ subtractionResult;
document.getElementById("demoThree").innerText = numberFour+" * "+numberOne+" = "+ multiplicationResult;
document.getElementById("demoFour").innerText = numberThree+" / "+numberOne+" = "+ divisionResult;
document.getElementById("demoFive").innerText = numberOne+" ** "+numberTwo+" = "+ exponentiationResult;
document.getElementById("demoSix").innerText = numberFour+" % "+numberTwo+" = "+ modulusResult;
document.getElementById("demoSeven").innerText = "9  + 1 = "+numberFive;
document.getElementById("demoEight").innerText = "10  - 1 = "+ numberSix;
