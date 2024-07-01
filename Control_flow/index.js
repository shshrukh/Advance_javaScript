let passingMarkes= 50;
let obtaningMarkes = prompt("mention your obtaning marks!");

if (obtaningMarkes >= passingMarkes) {
    console.log("Conguratulation you are pass")
} else{
    console.log("try your best next time")
}

// making temperature and comment how to responce

let avegTemp =25;
let currentWeather = prompt ("What is your current weather status? sunny, rainy?");
let currentTemperature = Number(prompt ("what is your currnet temperature status?"));
if (currentWeather==="sunny" && avegTemp <= currentTemperature && currentTemperature <= 50 ) {
    console.log ("drink more water to maintain your temperature! ");
} else if  ( currentWeather === "rainy" && currentTemperature <= avegTemp) {
    console.log("use warm food");
} else if ( currentWeather === "sunny" || currentTemperature < avegTemp) {
    console.log ("enjoy the sunny day");
}else if ( currentWeather === "rainy" || currentTemperature > avegTemp){
    console.log ("enjoy the rainy day");
}else {
    console.log("sorry not required input");
}