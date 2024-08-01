//  how to create promice

let age = 18;
const myPromise = new Promise((resolve, reject)=>{
    if (age >= 18){
        resolve(["you can drive auto mobile"]);
    }else{
        reject(["sorry you cnn't drive"]);
    }
});
myPromise.then((result)=>{
    console.log(result);
}).catch((error)=>{
    console.log(error)
});