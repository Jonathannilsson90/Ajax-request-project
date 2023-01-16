input = document.getElementById("inputField");
contentDiv = document.getElementById("content");
buttonList = document.getElementById("list-btn");



input.addEventListener("keypress", async function () {
  try {
    const response = await fetch(
      "https://www.themealdb.com/api/json/v1/1/search.php?s=" + input.value
    );

    const data = await response.json();

    const meals = data["meals"];
    mealsHMTL = "";
    for (let meal of meals) {
      mealsHMTL += `<article class="food-content">
            <img src="${meal.strMealThumb}" alt"">
            <h1>${meal.strMeal}</h1>
            <br>
            <h2>Category: ${meal.strCategory}</h2>
            <br>
            <br>
            <p><strong>Instructions:</strong> ${meal.strInstructions}</p>
            </article>
            `;
    }

    contentDiv.innerHTML = mealsHMTL;
  } catch (error) {
    console.log(error);
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
      mealsHMTL += `<article class="food-content">
            <img src="${meal.strCategoryThumb}" alt"">
            <br>
            <h1>Category: ${meal.strCategory}</h1>
            <br>
            <br>
            <p><strong>Description:</strong> ${meal.strCategoryDescription}</p>
            </article>
            `;
    }

    contentDiv.innerHTML = mealsHMTL;
  } catch (error) {
    console.log(error);
  }
});
