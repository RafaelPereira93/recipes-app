import Head from "next/head";

import * as Style from "../styles/globals";

import Recipe from "../components/RecipeHome";

import useSWR from "swr";

import Loader from "../components/Loader";

import NewRecipe from "../components/IconNewRecipe";

const fetcher = (pathUrl) => fetch(pathUrl).then((res) => res.json());

export default function Home() {
  const { data, error } = useSWR(
    "https://recipes-app-api-2021.herokuapp.com/recipes",
    fetcher
  );

  return (
    <>
      <Head>
        <title>Recipes App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Style.Container>
        <Style.Title>
          Recipes App <img src="/icon-recipes-app.svg" alt="" />{" "}
        </Style.Title>
        {!data && <Loader />}
        {data && <NewRecipe />}
        <Style.WrapperGridRecipes>
          {data &&
            data.allRecipes
              .map((recipe) => <Recipe key={recipe._id} recipe={recipe} />)
              .reverse()}
        </Style.WrapperGridRecipes>
      </Style.Container>
    </>
  );
}
