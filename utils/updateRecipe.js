const baseUrl = "https://recipes-app-api-2021.herokuapp.com/recipes";

export const updateRecipe = async (dataIngredient, idRecipe) => {
  await fetch(`${baseUrl}/${idRecipe}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dataIngredient),
  });
};
