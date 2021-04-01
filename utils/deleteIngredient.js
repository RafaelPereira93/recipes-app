export const deleteIngredient = (idIngredient, ingredients) => {
  const newIngredients = ingredients.filter(
    (_, index) => index !== idIngredient
  );
  return newIngredients;
};
