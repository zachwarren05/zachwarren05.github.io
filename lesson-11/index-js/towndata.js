const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const towns = jsonObject['towns'];
    for (let i = 0; i < towns.length; i++ ) {
      if(towns[i].name == "Preston" || towns[i].name == "Fish Haven" || towns[i].name == "Soda Springs")
      {
        let card = document.createElement('section');
        let carddiv = document.createElement('div');
        let h2 = document.createElement('h2');
        let divmotto = document.createElement('p');
        let article = document.createElement('article');
        let image = document.createElement('img');
        let towninfo1 = document.createElement('p');
        let towninfo2 = document.createElement('p');
        let towninfo3 = document.createElement('p');

        h2.textContent = towns[i].name;
        divmotto.textContent = towns[i].motto;
        towninfo1.textContent = 'Year Founded: ' + towns[i].yearFounded + "\r\n";
        towninfo2.textContent = 'Population: ' + towns[i].currentPopulation + "\r\n";
        towninfo3.textContent = 'Annual Rain Fall: ' + towns[i].averageRainfall;
        image.setAttribute('src', '/lesson-9/images/' + towns[i].photo);
        
        card.appendChild(article);
        card.appendChild(image);
        article.appendChild(carddiv)
        carddiv.appendChild(h2);
        carddiv.appendChild(divmotto);
        carddiv.appendChild(towninfo1);
        carddiv.appendChild(towninfo2);
        carddiv.appendChild(towninfo3);

        

        document.querySelector('div.cards').appendChild(card);
      }
        
        
    }
  });