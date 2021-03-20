const apiForecastURL= "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=adb46ce6ad3541245dc4d3c5158bd147";

var dayNames = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat']; 

fetch(apiForecastURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);
        const forecasts = jsonObject['list'];
        let z = 0;
        for (let i = 0; i < forecasts.length; i++ ) {
            if (jsonObject.list[i].dt_txt.includes('18:00:00')) {
                const imagesrc = 'https://openweathermap.org/img/w/' + jsonObject.list[i].weather[0].icon + '.png';
                let imageName = "wimg";
                let imageNum = z.toString();
                let concatName = imageName.concat(imageNum);
                let tempName = "temp";
                let concatTemp = tempName.concat(imageNum);
                document.getElementById(concatName).setAttribute('src', imagesrc);
                document.getElementById(concatTemp).textContent = jsonObject.list[i].main.temp + "°F";
                z = z + 1;
            }
            

        }

    });