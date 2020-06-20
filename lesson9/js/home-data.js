// fetching json
const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const towns = jsonObject['towns'];
    // console.table(jsonObject);  // temporary checking for valid response and data parsing

    const special = towns.filter(town => (town.name == 'Preston') || (town.name == 'Fish Haven') || (town.name == 'Soda Springs'));
    special.forEach(town => {
      let townArticle = document.createElement('article');
      let h2 = document.createElement('h2');
      let motto = document.createElement('h3');
      let year = document.createElement('p');
      let population = document.createElement('p');
      let rainfall = document.createElement('p');
      let image = document.createElement('img');
      let alt = document.createElement('alt');

      alt.setAttribute('alt', town.name);
      image.setAttribute('src', `images/${town.photo}`);
      h2.textContent = town.name;
      motto.innerHTML = town.motto;
      if (town.name == 'Fish Haven') motto.innerHTML += "<br>";
      year.textContent = 'Year Founded: ' + town.yearFounded;
      population.textContent = 'Population: ' + town.currentPopulation;
      rainfall.textContent = 'Annual Rain Fall: ' + town.averageRainfall;

      townArticle.appendChild(h2);
      townArticle.appendChild(motto);
      townArticle.appendChild(year);
      townArticle.appendChild(population);
      townArticle.appendChild(rainfall);
      townArticle.appendChild(image);
      townArticle.appendChild(alt);

      document.querySelector('div.towns').appendChild(townArticle);
    });
  });