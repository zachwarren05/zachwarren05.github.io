const apiForecastURL= "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=adb46ce6ad3541245dc4d3c5158bd147";

fetch(apiForecastURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
    });