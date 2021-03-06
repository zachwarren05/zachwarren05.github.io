const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const towns = jsonObject['towns'];
    for (let i = 0; i < towns.length; i++ ) {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let h3 = document.createElement('h3');
        let article = document.createElement('article');
        let image = document.createElement('img');
        let towninfo = document.createElement('p');

        h2.textContent = towns[i].name;
        h3.textContent = towns[i].motto;
        towninfo.textContent = 'Year Founded: ' + towns[i].yearFounded + "\r\n";
        towninfo.textContent += 'Population: ' + towns[i].currentPopulation + "\r\n";
        towninfo.textContent += 'Annual Rain Fall: ' + towns[i].averageRainfall;
        image.setAttribute('src', '/lesson-9/images/' + towns[i].photo);
        
        card.appendChild(article);
        article.appendChild(h2);
        article.appendChild(h3);
        article.appendChild(towninfo);
        article.appendChild(image);

        document.querySelector('div.cards').appendChild(card);
        
        
    }
  });