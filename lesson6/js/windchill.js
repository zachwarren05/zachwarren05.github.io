var highTemp = parseFloat(document.getElementById("high").innerText);
var windSpeed = parseFloat(document.getElementById("speed").innerText);
var windChill = 35.74 + (0.6215 * highTemp) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * highTemp * Math.pow(windSpeed, 0.16))

if (highTemp <= 50 && windSpeed >= 3.0) {
    document.getElementById("chill").innerHTML = Math.round(windChill);
}
else {
    document.getElementById("chill").innerHTML = "N/A";
}