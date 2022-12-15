const searchBtn = document.getElementById('search-btn')
const mealOR = document.getElementById('recipe')
const recipeContent = document.querySelector('recipe-content')
const recipeShut = document.getElementById('recipe-shut-btn')

searchBtn.addEventListener('click', getRecipeList)

function getRecipeList(){
    let searchInput = document.getElementById 
    ('search-inp').value.trim()
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInput}`)
    .then(response => response.json())
    .then(data => {
        let html = ""
        if(data.meals){
            data.meals.forEach(meal =>{
                html += `<div class="recipe-item" data-id = "${meal.idMeal}">
                        <div class="recipe-img">
                            <img src="${meal.strMealThumb}" alt="lasagna">
                        </div>
                        <div class="recipe-name">
                            <h3>${meal.strMeal}</h3>
                            <a href="#" class="ingredients-btn">Ingredients</a>
                        </div>
                    </div>`;
            })
        }
        mealOR.innerHTML = html;
    })

}