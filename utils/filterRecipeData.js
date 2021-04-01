export const filterRecipeData = (objectRecipeData) => {
  const itemsToMatch = ["nomeAutor", "nomeReceita", "descricaoReceita"];
  const recipeData = objectRecipeData?.oneRecipe;

  if (!recipeData) return;

  const objectFiltered = itemsToMatch.reduce((acc, item) => {
    if (recipeData.hasOwnProperty(item))
      return { ...acc, [item]: recipeData[item] };
  }, {});

  return objectFiltered;
};
