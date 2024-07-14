// java script string comparision
const textOne = "A";
const  textTwo = "B";

let resultOne = textOne > textTwo;
let resultTwo = textOne < textTwo;

let para1 = document.querySelector("#paraOne");
let para2 = document.querySelector("#paraTwo");

para1.innerHTML = "is A is grater then B?"+" "+resultOne;
para2.innerHTML = "is A is less then B?"+" "+resultTwo;

// in string comparision if we heve single character then it will compair the unicode value and pass the result