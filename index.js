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
        console.log(data)
    })

}