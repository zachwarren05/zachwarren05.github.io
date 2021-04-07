const apiForecastURL= "https://api.openweathermap.org/data/2.5/onecall?lat=39.7285&lon=-121.8375&units=imperial&appid=adb46ce6ad3541245dc4d3c5158bd147";

var forecastNames = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat']; 

fetch(apiForecastURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);
        const forecasts = jsonObject['daily'];
        let z = 0;
        for (let i = 1; i < 4; i++ ) {
            const imagesrc = 'https://openweathermap.org/img/w/' + jsonObject.daily[i].weather[0].icon + '.png';
            let imageName = "wimg";
            let imageNum = z.toString();
            let concatName = imageName.concat(imageNum);
            let tempName = "temp";
            let concatTemp = tempName.concat(imageNum);
            let dayName = "day";
            let concatDay = dayName.concat(imageNum);
            let date = new Date(jsonObject.daily[i].dt * 1000);
            let forDay = forecastNames[date.getDay()];
            document.getElementById(concatName).setAttribute('src', imagesrc);
            document.getElementById(concatTemp).textContent = jsonObject.daily[i].temp.day + "°F";
            document.getElementById(concatDay).textContent = forDay;


            z = z + 1;  

        }

    });