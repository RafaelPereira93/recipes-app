import React from "react";
import * as Style from "./ModalDeleteStyles";
import { removeRecipe } from "../../utils/removeRecipe";
import { useRouter } from "next/router";

const ModalDeleteRecipe = ({ recipeData, setShowModal }) => {
  const router = useRouter();
  const [recipeDeletedMessage, setRecipeDeletedMessage] = React.useState(false);

  const handleRemoveRecipe = () => {
    setRecipeDeletedMessage(true);

    removeRecipe(recipeData._id);

    setTimeout(() => {
      router.push("/");
    }, 1000);
  };

  return (
    <>
      <Style.WrapperModalDelete>
        <Style.WrapperModalContent>
          <h2>
            Are you sure you want to delete{" "}
            <span>{recipeData.nomeReceita}</span> ?
          </h2>
          {!recipeDeletedMessage ? (
            <Style.WrapperButtons>
              <button onClick={() => setShowModal(false)}>No !</button>
              <button onClick={handleRemoveRecipe}>Ok, delete</button>
            </Style.WrapperButtons>
          ) : (
            <Style.RecipeDeletedMessage>
              <p>Recipe deleted.</p>
            </Style.RecipeDeletedMessage>
          )}
        </Style.WrapperModalContent>
      </Style.WrapperModalDelete>
    </>
  );
};

export default ModalDeleteRecipe;
