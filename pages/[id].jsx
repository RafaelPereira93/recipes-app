import React from "react";
import { useRouter } from "next/router";
import { Container } from "../styles/globals";
import useSWR from "swr";
import Head from "next/head";
import RecipeSingle from "../components/RecipeSingle";

const baseUrl = "https://recipes-app-api-2021.herokuapp.com/recipes";

const fetcher = (baseUrl) => fetch(baseUrl).then((res) => res.json());

const Recipe = () => {
  const router = useRouter();
  const idRecipe = router.query.id;

  const { data, error } = useSWR(`${baseUrl}/${idRecipe}`, fetcher);

  if (!data) return <p>...</p>;

  return (
    <>
      <Head>
        <title>Recipes App | {data.oneRecipe?.nomeReceita}</title>
      </Head>
      <Container>
        <RecipeSingle recipe={data.oneRecipe} />
      </Container>
    </>
  );
};

export default Recipe;
