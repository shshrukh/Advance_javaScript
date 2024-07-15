let numberOne = 2;
let numberTow = 5;
let numberThree = 10;
let numberFour = 7;
let numberFive;

let resultOne = numberFive = numberOne;
let resultTwo = numberOne += numberTow;
let resultThree = numberThree -= numberTow;
let resultFour = numberFour *= numberFive;
let resultFive = numberFour /= numberOne;
let resultSix = numberThree %= numberFive;
let resultSeven = numberOne **= numberFour;

document.getElementById("demoOne").innerText = '" " equal 2 = '+resultOne;
document.getElementById("demoTwo").innerText = '2 += 5 = ' +resultTwo;
document.getElementById("demoThree").innerText = '10 -= 5 = '+resultThree;
document.getElementById("demoFour").innerText = '7 *= 2 = '+resultFour;
document.getElementById("demoFive").innerText = '14 /= 7 = '+resultFive;
document.getElementById("demoSix").innerText = '5 %= 2 = '+resultSix;
document.getElementById("demoSeven").innerText = '7 **= 2 = '+resultSeven;
