let currentWeather = prompt ("What is your current weather status? sunny, rainy?");
let currentTemperature = Number(prompt ("what is your currnet temperature status?"));

function aboutTemperatureComment(x , y) {
    
    let avegTemp =25;
    if (x =="sunny" && avegTemp <= y && y <= 50 ) {
        console.log ("drink more water to maintain your temperature! ");
    } else if  ( x =="rainy" && y <= avegTemp) {
        console.log("use warm food");
    } else if ( x == "sunny" || y < avegTemp) {
        console.log ("enjoy the sunny day");
    }else if ( x == "rainy" || y > avegTemp){
        console.log ("enjoy the rainy day");
    }else {
        console.log("sorry wrong inputs");
    }
}
aboutTemperatureComment(currentWeather , currentTemperature); 