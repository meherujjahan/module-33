const reloasdCountries = () => {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data =>displayCountrise(data))
}
reloasdCountries();

const displayCountrise = countries => {
countries.forEach(country => {
    const countriesContainer = document.getElementById('countries');
    const div = document.createElement('div');
    div.classList.add('country');
    div.innerHTML = `
    <h3>${country.name}</h3>
    <p>${country.capital} </p>
    <button onclick="displayCountriByName('${country.name}')">Details</button>`
//     const h3 = document.createElement('h3');
//     h3.innerText = country.name;
//     div.appendChild(h3);
//     const p = document.createElement('p');
//   p.innerText = country.capital;
//   div.appendChild(p);
//     console.log(country);
    countriesContainer.appendChild(div)
});
}

const displayCountriByName = name =>{
   const url = `https://restcountries.eu/rest/v2/name/${name}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayCountriesDetailes(data[0]))
}

const displayCountriesDetailes = (country) => {
    window.scrollTo(0,40);
const countryDiv = document.getElementById('country-detail');
countryDiv.innerHTML = `
<h4> ${country.name}</h4>
<p> ${country.population}</p>
<img width = "200px" src="${country.flag}">
`
console.log(country.name);
}
