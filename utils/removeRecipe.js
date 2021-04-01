const baseUrl = "https://recipes-app-api-2021.herokuapp.com/recipes";

export const removeRecipe = (recipeId) =>
  fetch(`${baseUrl}/${recipeId}`, {
    method: "DELETE",
  });
