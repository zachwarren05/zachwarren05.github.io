const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const towns = jsonObject['towns'];
    for (let i = 0; i < towns.length; i++ ) {
      if(towns[i].name == "Fish Haven")
      {
        let card = document.createElement('section');
        let carddiv = document.createElement('div');
        let h2 = document.createElement('h2');
        let hr = document.createElement('hr');
        let article = document.createElement('article');
        let townevents = document.createElement('p');
        let linebreak = document.createElement('br');

        h2.textContent = "Upcoming Events:";

        for (let x = 0; x < 3; x++ ) {
          townevents.textContent =  townevents.textContent + towns[i].events[x] + "\r\n";
        }
        
        card.appendChild(article);
        article.appendChild(carddiv)
        carddiv.appendChild(h2);
        carddiv.appendChild(hr);
        carddiv.appendChild(townevents);

        

        document.querySelector('div.currentevents').appendChild(card);
      }
        
        
    }
  });