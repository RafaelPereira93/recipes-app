export const validateInputs = (inputObjets, arrayIngredients) => {
  let objectFiltered = {};

  for (const inputKey in inputObjets) {
    if (inputObjets[inputKey].trim() && arrayIngredients.length) {
      objectFiltered[inputKey] = inputObjets[inputKey];
    }
  }

  const objectLength = Object.keys(objectFiltered).length;

  if (objectLength < 3) {
    return false;
  }

  return { ...objectFiltered, arrayIngredients };
};
