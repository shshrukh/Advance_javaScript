//-------->JS Objects<---------//
const car = {
    type: "Nisan",
    color: "Black",
    model: "1997"
} // it is good practice to declare object with const keyword.


// How to define a JS objects?
//. Using objects literal, object literals are also called object initializers.
//. Using the new keyword
//. Using object constructors

//------->objects literal<-------//
const objectOne = {name:"Rashid",age:21,adderess: "street xyz"};
console.log(objectOne);

const objectTwo = {}
objectTwo.name = "Saleem";
objectTwo.age = 31;
objectTwo.adderess = "street abc,xyz";
console.log(objectTwo); //for readability, simplicity and execuation speed we use object literals

//--------->new keyword<---------//
const objectThree = new Object(); // the new keyword create an empty object and letter on we add the keys and values;
objectThree.name = "shah";
objectThree.age = 31;
objectThree.adderess = "street abc";
console.log(objectThree);


// how to accessing the property of an object?
const nameOne = objectThree.name;
console.log(nameOne);
const nameTow = objectOne['name'];
console.log(nameTow);


// adding new properties to object 
objectOne.nationality = "Pakistan"; //this will add the new preperty in objectOne if the same properties then its cover write the value .

//Deleting Properties
delete objectThree.adderess; // the delete keyword delete both property and values

// Nested Objects
objectFour = {
    name: 'khan',
    age: 23,
    car: {
        car1: 'BMW',
        car2: 'Nisan',
        car3: 'Honda'
    }
} 
console.log(objectFour.car.car2);


