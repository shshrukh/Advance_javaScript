const obj1 = {
    id:212,
    age:"21" ,
    hello: function (){
        console.log("dd")
    }
}



let obj2 = Object.create(obj1);

console.log(obj2.age)

obj2.hello()