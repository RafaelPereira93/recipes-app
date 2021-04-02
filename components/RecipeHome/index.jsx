import React from "react";
import * as Style from "./RecipeHomeStyles";
import Link from "next/link";
import { excerptDescriptionHome } from "../../utils/excerptDescriptionHome";

const RecipeHome = ({ recipe }) => {
  return (
    <>
      <Style.WrapperRecipe>
        <Style.WrapperContentRecipe>
          <Style.AutorName>{recipe.nomeAutor}</Style.AutorName>
          <Link href={`/${recipe._id}`}>
            <a>
              <Style.TitleRecipe>{recipe.nomeReceita}</Style.TitleRecipe>
            </a>
          </Link>
          <Style.DescriptionRecipe>
            {excerptDescriptionHome(recipe.descricaoReceita)}
          </Style.DescriptionRecipe>
          <Style.ReadMoreHome>
            <Link href={`/${recipe._id}`}>
              <a>Read</a>
            </Link>
          </Style.ReadMoreHome>
        </Style.WrapperContentRecipe>
        <Style.WrapperImageRecipe>
          <Link href={`/${recipe._id}`}>
            <a>
              <Style.ImageRecipe src={recipe.dataImagem?.secure_url} />
            </a>
          </Link>
        </Style.WrapperImageRecipe>
      </Style.WrapperRecipe>
    </>
  );
};

export default RecipeHome;
