const apiURL = "https://api.openweathermap.org/data/2.5/onecall?lat=39.7285&lon=-121.8375&units=imperial&appid=adb46ce6ad3541245dc4d3c5158bd147";
var highT = 0;
var speed = 0;

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        document.getElementById('description').textContent = jsObject.current.weather[0].description;
        document.getElementById('high').textContent = jsObject.current.temp;
        highT = jsObject.current.temp;
        speed = jsObject.current.wind_speed;
        document.getElementById('humidity').textContent = jsObject.current.humidity;
        document.getElementById('speed').textContent = jsObject.current.wind_speed;
        
    });

var highTemp = parseFloat(highT);
var windSpeed = parseFloat(speed);
var windChill = 35.74 + (0.6215 * highTemp) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * highTemp * Math.pow(windSpeed, 0.16))

if (highTemp <= 50 && windSpeed >= 3.0) {
    document.getElementById("chill").innerHTML = Math.round(windChill);
}
else {
    document.getElementById("chill").innerHTML = "N/A";
}

