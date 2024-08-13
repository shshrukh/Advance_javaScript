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
objectOne.nationality = "Pakistan"; //this will add the new preperty in objectOne if the same properties then its over write the value .

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

//--------->Object Constructor Function<-----------//
const ObjectFive = function(name, age, street, nationality){
    this.name = name;
    this.age = age;
    this.street = street;
    this.nationality = nationality;
}
const personSix = new ObjectFive('ali', 32, 'abc', 'xyz');
console.log(personSix);

// if we not used the new keyword afer declation function then it will give undefine. Another way that is after construting function make a empty object to rid of undefine.

const ObjectSeven = function(name, age, street, nationality){
    personDetails= {}
    personDetails.name = name;
    personDetails.age = age;
    personDetails.street = street;
    personDetails.nationality = nationality;
    return personDetails;
}
const personOneDetails = ObjectSeven('arbaz', 24, 'chickus kote ', 'pak');
console.log(personOneDetails);



//------->JS Object Methods<----------//
//1. General Method 2. Prperty Management Method 3. Object Protection Method