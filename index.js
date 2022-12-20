const searchBtn = document.getElementById("search-btn");
const mealOr = document.getElementById("recipe");
const mealDetailsContent = document.querySelector(".recipe-content");
const recipeShut = document.getElementById("recipe-shut-btn");

searchBtn.addEventListener("click", getRecipeList)
mealOr.addEventListener("click", getMealRecipe);
recipeShut.addEventListener("click", () => {
  mealDetailsContent.parentElement.classList.remove("showRecipe");
});

function getRecipeList() {
 const searchInputTxt = document.getElementById("search-inp").value.trim();

  fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInputTxt}`
  )
    .then((response) => response.json())
    .then((data) => {
      let html = "";
      if (data.meals) {
        data.meals.forEach((meal) => {
          html += `
                    <div class = "recipe-item" data-id = "${meal.idMeal}">
                        <div class = "recipe-img">
                            <img src = "${meal.strMealThumb}" alt = "food">
                        </div>
                        <div class = "recipe-name">
                            <h3>${meal.strMeal}</h3>
                            <a href = "#" class = "ingredients-btn">Ingredients</a>
                        </div>
                    </div>
                `;
        });
        mealOr.classList.remove("error");
      } else {
        html = "Try again, meal wasn't found!";
        mealOr.classList.add("error");
      }

      mealOr.innerHTML = html;
    });
}

function getMealRecipe(e) {
  e.preventDefault();
  if (e.target.classList.contains("ingredients-btn")) {
    let mealItem = e.target.parentElement.parentElement;
    fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealItem.dataset.id}`
    )
      .then((response) => response.json())
      .then((data) => mealRecipeModal(data.meals));
  }
}

function mealRecipeModal(meal) {
  console.log(meal);
  meal = meal[0];
  let html = `
        <h2 class = "recipe-title">${meal.strMeal}</h2>
        <p class = "recipe-category">${meal.strCategory}</p>
        <div class = "recipe-instruct">
            <h3>Instructions:</h3>
            <p>${meal.strInstructions}</p>
        </div>
        <div class = "recipe-meal-img">
            <img src = "${meal.strMealThumb}" alt = "">
        </div>
        <div class = "recipe-link">
            <a href = "${meal.strYoutube}" target = "_blank">Watch Video</a>
        </div>
    `;
  mealDetailsContent.innerHTML = html;
  mealDetailsContent.parentElement.classList.add("showRecipe");
}

const logInbtn = document.getElementById("login-btn");
const inLog = document.getElementById("login");
const loginDiv = document.getElementById('login-div')
const body = document.body
const searchDiv = document.getElementById('searchDiv')
const title = document.getElementById('title')
const titleDiv = document.getElementById('titleDiv')

body.appendChild(loginDiv)


loginDiv.style.display = 'none'

logInbtn.addEventListener('click',() => {
    searchBtn.style.display = 'none'
    mealOr.style.display = 'none'
    recipeShut.style.display = 'none'
    mealDetailsContent.style.display = 'none'
    searchDiv.style.display = 'none'
    title.style.display = 'none'
    titleDiv.style.display = 'none'
    loginDiv.style.display = 'block'
})

// inLog.addEventListener('click',() => {
//     loginDiv.style.display = "none";
//     searchBtn.style.display = "block";
//     mealOr.style.display = "block";
//     recipeShut.style.display = "block";
//     mealDetailsContent.style.display = "block";
//     searchDiv.style.display = "block";
//     title.style.display = "block";
//     titleDiv.style.display = "block";

    
// })
