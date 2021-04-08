const requestURL = 'cards-json/cards.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const business = jsonObject['businesses'];
    for (let i = 0; i < business.length; i++ ) {
        let card = document.createElement('section');
        let carddiv = document.createElement('div');
        let h2 = document.createElement('h2');
        let divmotto = document.createElement('p');
        let article = document.createElement('article');
        let image = document.createElement('img');
        let adinfo1 = document.createElement('p');
        let adinfo2 = document.createElement('a');
        let ademail = document.createElement('p');

        h2.textContent = business[i].name;
        divmotto.textContent = business[i].motto;
        adinfo1.textContent = 'Phone: ' + business[i].phone + "\r\n";
        if (business[i].email != "") {
          ademail.textContent = 'Email: ' + business[i].email;
        }
        else {
          ademail.textContent = 'Email: No email provided';
        }
        adinfo2.setAttribute('href', business[i].link);
        adinfo2.setAttribute('target', "_blank")
        adinfo2.innerHTML = business[i].name + '\'s Website';
        image.setAttribute('src', 'directory-images/' + business[i].photo);
        image.setAttribute('alt', business[i].name + ' Logo');
        
        card.appendChild(h2);
        card.appendChild(image);
        card.appendChild(article);
        article.appendChild(carddiv)
        carddiv.appendChild(adinfo1);
        carddiv.appendChild(ademail);
        carddiv.appendChild(adinfo2);

        

        document.querySelector('div.ads').appendChild(card);
      
        
        
    }
});