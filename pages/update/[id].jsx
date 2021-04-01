import React from "react";
import Head from "next/head";
import useSWR from "swr";
import { useRouter } from "next/router";
import UpdateRecipeComponent from "../../components/UpdateRecipe";

const fetcher = (path) => fetch(path).then((response) => response.json());

const baseUrl = "https://recipes-app-api-2021.herokuapp.com/recipes";

const UpdateRecipe = () => {
  const router = useRouter();
  const id = router.query.id;
  const { data } = useSWR(`${baseUrl}/${id}`, fetcher);

  return (
    <>
      <Head>
        <title>Recipes App - Update Recipe</title>
      </Head>
      <UpdateRecipeComponent recipe={data} />
    </>
  );
};

export default UpdateRecipe;
