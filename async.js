//www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata

const searchFood = () => {
    const searchField = document.getElementById('search-field');
    const searchtext = searchField.value;
    //clear data
    searchField.value = '';
    if(searchtext == 0){
        
    }
    else{
         //load data
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchtext}`;
    fetch(url)
    .then(res =>res.json())
    .then(data =>  displaySearchResult(data.meals))
    }
    
}

const displaySearchResult = meals => {
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';
    if(meals.length == 0){
        return 'plz write a word'
    }
    meals.forEach(meal => {
        //console.log(meal);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div onclick="loadMealDEtail(${meal.idMeal})" class="card h-100">
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${meal.strMeal}</h5>
          <p class="card-text"> ${meal.strInstructions.slice(0, 200)}</p>
        </div>
      </div>
      `;
      searchResult.appendChild(div);
    });

}

 const loadMealDEtail = mealId => {
      const url2 = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
     fetch(url2)
     .then(res => res.json())
     .then(data => displayMealDetail(data.meals[0]))
 }
 const displayMealDetail = meal => {
     console.log(meal);
     const mealdetails = document.getElementById('meal-details');
     mealdetails.textContent = '';
     const div = document.createElement('div');
     div.classList.add('card');
     div.innerHTML = `
     <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
     <div class="card-body">
        <h5 class="card-title">${meal.strMeal}</h5>
       <p class="card-text">${meal.strInstructions.slice(0, 150)}</p>
       <a href="${meal.strYoutube}" class="btn btn-primary">Go somewhere</a>
     </div>
     `;
    mealdetails.appendChild(div);
 }