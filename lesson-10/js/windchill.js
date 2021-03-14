const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=adb46ce6ad3541245dc4d3c5158bd147";

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        document.getElementById('current-temp').textContent = jsObject.main.temp;
        const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  // note the concatenation
        const desc = jsObject.weather[0].description;  // note how we reference the weather array
        document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
        document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
        document.getElementById('icon').setAttribute('alt', desc);
    });

var highTemp = parseFloat(document.getElementById("high").innerText);
var windSpeed = parseFloat(document.getElementById("speed").innerText);
var windChill = 35.74 + (0.6215 * highTemp) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * highTemp * Math.pow(windSpeed, 0.16))

if (highTemp <= 50 && windSpeed >= 3.0) {
    document.getElementById("chill").innerHTML = Math.round(windChill);
}
else {
    document.getElementById("chill").innerHTML = "N/A";
}