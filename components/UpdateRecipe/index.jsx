import React from "react";
import * as Style from "./UpdateRecipeStyle";
import Head from "next/head";
import Link from "next/link";
import Modal from "../../components/ModalNewRecipe";
import { Container } from "../../styles/globals";
import { deleteIngredient } from "../../utils/deleteIngredient";
import { validateInputs } from "../../utils/validateInputs";
import { useRouter } from "next/router";
import { filterRecipeData } from "../../utils/filterRecipeData";
import { updateRecipe } from "../../utils/updateRecipe";

const UpdateRecipe = ({ recipe }) => {
  const router = useRouter();

  const [dataIngredient, setDataIngredient] = React.useState();
  const [ingredientes, setIngredientes] = React.useState([]);
  const [input, setInput] = React.useState("");
  const [showModal, setShowModal] = React.useState(false);
  const refIngredients = React.useRef();

  const handleData = (e) => {
    const inputId = e.target.id;
    const inputvalue = e.target.value;
    setDataIngredient({ ...dataIngredient, [inputId]: inputvalue });
  };

  const handleAddIngredient = () => {
    if (!input.trim().length) return;

    setIngredientes([...ingredientes, input]);
    setInput("");
  };

  const handleDeleteIngredient = ({ currentTarget }) => {
    const idIngredient = Number(currentTarget.dataset.id);
    const newIngredients = deleteIngredient(idIngredient, ingredientes);
    setIngredientes(newIngredients);
  };

  const handleCreateRecipe = async () => {
    const resultInputs = validateInputs(dataIngredient, ingredientes);

    if (!resultInputs) {
      setShowModal(true);
      return;
    }

    const idRecipe = router.query.id;

    updateRecipe({ ...dataIngredient, ingredientes }, idRecipe);

    setTimeout(() => {
      router.back();
    }, 500);
  };

  React.useEffect(() => {
    setIngredientes(recipe?.oneRecipe.ingredientes);
    setDataIngredient(filterRecipeData(recipe));
  }, [recipe]);

  return (
    <>
      <Head>
        <title>Recipes App | Update Recipe</title>
      </Head>
      <Container>
        <Style.TitleNewRecipe>
          {recipe ? `Update ${recipe?.oneRecipe.nomeReceita}` : "Update Recipe"}
        </Style.TitleNewRecipe>

        <Style.WrapperNewRecipe>
          <Style.FormNewRecipe>
            <Style.WrapperAuthorAndName>
              <input
                type="text"
                placeholder="Your name"
                id="nomeAutor"
                value={dataIngredient?.nomeAutor || ""}
                onChange={handleData}
              />
              <input
                type="text"
                placeholder="Recipe name"
                id="nomeReceita"
                value={dataIngredient?.nomeReceita || ""}
                onChange={handleData}
              />
            </Style.WrapperAuthorAndName>
            <Style.WrapperDescription>
              <textarea
                name=""
                id=""
                rows="5"
                placeholder="Recipe description"
                id="descricaoReceita"
                value={dataIngredient?.descricaoReceita || ""}
                onChange={handleData}
              ></textarea>
            </Style.WrapperDescription>
            <Style.WrapperNewIngredient>
              <Style.TitleNewIngredient>Ingredients</Style.TitleNewIngredient>
            </Style.WrapperNewIngredient>
            <Style.WrapperIngredientToAdd>
              <Style.WrapperInputNewIngredient>
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                />
                <span onClick={handleAddIngredient}>
                  <img src="/add-ingredient.svg" alt="" />
                </span>
              </Style.WrapperInputNewIngredient>
              <Style.WrapperIngredientAdded ref={refIngredients}>
                {ingredientes &&
                  ingredientes.map((ingredient, index) => (
                    <Style.WrapperItemAdded key={`${ingredient}-${index}`}>
                      <p data-js="ingredient">{ingredient}</p>
                      <span
                        data-id={`${index}`}
                        onClick={handleDeleteIngredient}
                      >
                        <img src="/remove.svg" alt="" />
                      </span>
                    </Style.WrapperItemAdded>
                  ))}
              </Style.WrapperIngredientAdded>
            </Style.WrapperIngredientToAdd>
          </Style.FormNewRecipe>
          <Style.ButtonAddNewRecipe>
            <button onClick={handleCreateRecipe}>Update recipe</button>
          </Style.ButtonAddNewRecipe>
        </Style.WrapperNewRecipe>
        <Style.WrapperBackToHome>
          <Link href="/">
            <a>Back to home</a>
          </Link>
        </Style.WrapperBackToHome>
      </Container>
      {showModal && <Modal setModal={setShowModal} />}
    </>
  );
};

export default UpdateRecipe;
