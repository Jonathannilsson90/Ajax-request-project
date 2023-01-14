input = document.getElementById("inputField");
contentDiv = document.getElementById("content");
buttonRandom = document.getElementById("random-btn");
buttonList = document.getElementById("list-btn");
ingredientDiv = document.getElementById("ingredient");
dropDownMenu = document.getElementById('drop-dwn-menu')
buttonSearch = document.getElementById('btn-search')



buttonSearch.addEventListener("click", async function () {
  try {

    const response = await fetch(
      "https://www.themealdb.com/api/json/v1/1/filter.php?c=" + input.value 
    );
  

    const data = await response.json();

    const meals = data["meals"];
    mealsHMTL = "";
    for (let meal of meals) {
      

      mealsHMTL += `<article>
            <img src="${meal.strMealThumb}" alt"">
            <h1>${meal.strMeal}</h1>
           
            `;
    }

    contentDiv.innerHTML = mealsHMTL;
  } catch (error) {
    console.log(error)
  }
});



buttonList.addEventListener("click", async function () {
  try {
    const response = await fetch(
      "https://www.themealdb.com/api/json/v1/1/categories.php"
    );
    const data = await response.json();

    const meals = data["categories"];
    mealsHMTL = "";
    for (let meal of meals) {
      mealsHMTL += `<article>
            <img class="js-gen-img" src="${meal.strCategoryThumb}" alt"">
            <br>
            <h1 class="cat">${meal.strCategory}</h1>
            <br>
            <br>
            <p class="instructions">${meal.strCategoryDescription}</p>
            </article>
            `;
    }

    contentDiv.innerHTML = mealsHMTL;
  } catch (error) {
    console.log(error);
  }
});

dropDownMenu.addEventListener("click", async function (e){
  e.preventDefault()

  try {
      const response = await fetch ('https://www.themealdb.com/api/json/v1/1/list.php?i=list')
      const ingredientsArray = await response.json()
      
      const ingredients = ingredientsArray["meals"]
      ingredientHTML = "";
      for(ingredient of ingredients) {
        ingredientHTML +=
        `<option id="${ingredient.strIngredient}">${ingredient.strIngredient}</option>`
      }
      dropDownMenu.innerHTML = ingredientHTML

    } catch (error){
      console.log (error)
    }
},{once : true})

