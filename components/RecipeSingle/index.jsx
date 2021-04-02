import React from "react";
import * as Style from "./RecipeSingleStyle";
import Link from "next/link";
import { formatDate } from "../../utils/formatDate";
import ModalDelete from "../../components/ModalDeleteRecipe";
import { useRouter } from "next/router";

const RecipeSingle = ({ recipe }) => {
  const router = useRouter();
  const [showModal, setShowModal] = React.useState(false);

  if (!recipe) {
    router.push("/");
    return "";
  }

  return (
    <>
      <Style.WrapperRecipe>
        <Style.TitleRecipe>{recipe.nomeReceita}</Style.TitleRecipe>
        <Style.WrapperAuthor>
          <Style.AutorName>
            By: <span>{recipe.nomeAutor}</span>
          </Style.AutorName>
          <Style.CreatedAt>
            <p>{formatDate(recipe.createdAt)}</p>
          </Style.CreatedAt>
        </Style.WrapperAuthor>
        <Style.WrapperIcons>
          <Link href={`/update/${recipe._id}`}>
            <a>
              <img src="/update.svg" alt="" />{" "}
            </a>
          </Link>
          <Style.DeleteRecipe onClick={() => setShowModal(true)}>
            <img src="/delete.svg" alt="" />
          </Style.DeleteRecipe>
        </Style.WrapperIcons>
        <Style.WrapperImage>
          <img src={recipe.dataImagem?.secure_url} alt="" />
        </Style.WrapperImage>
        <Style.WrapperDescriptionAndIngredients>
          <Style.WrapperDescription>
            <Style.TitleDescriptionOrIngredient>
              Description
            </Style.TitleDescriptionOrIngredient>
            <p>{recipe.descricaoReceita}</p>
          </Style.WrapperDescription>
          <Style.WrapperIngredients>
            <Style.TitleDescriptionOrIngredient>
              Ingredients
            </Style.TitleDescriptionOrIngredient>
            <Style.IngredientsList>
              {recipe.ingredientes.map((ingrediente, index) => (
                <li key={`${ingrediente}-${index}`}>{ingrediente}</li>
              ))}
            </Style.IngredientsList>
          </Style.WrapperIngredients>
        </Style.WrapperDescriptionAndIngredients>

        <Style.WrapperBackToHome>
          <Link href="/">
            <a>Back to home</a>
          </Link>
        </Style.WrapperBackToHome>
      </Style.WrapperRecipe>
      {showModal && (
        <ModalDelete recipeData={recipe} setShowModal={setShowModal} />
      )}
    </>
  );
};

export default RecipeSingle;
