const searchBtn = document.getElementById('search-btn')
const mealOR = document.getElementById('meal')
const recipeContent = document.querySelector('recipe-content')
const recipeShut = document.getElementById('recipe-shut-btn')

searchBtn.addEventListener('click', getRecipeList)