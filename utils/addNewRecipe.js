const baseUrl = "https://recipes-app-api-2021.herokuapp.com/recipes";

export const addNewRecipe = async (dataRecipe) => {
  await fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dataRecipe),
  });
};
