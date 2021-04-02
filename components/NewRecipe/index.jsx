import React from "react";
import * as Style from "./NewRecipeStyles";
import Head from "next/head";
import Link from "next/link";
import Modal from "../../components/ModalNewRecipe";
import { Container } from "../../styles/globals";
import { deleteIngredient } from "../../utils/deleteIngredient";
import { validateInputs } from "../../utils/validateInputs";
import { addNewRecipe } from "../../utils/addNewRecipe";
import { useRouter } from "next/router";
import { urlPreviewImage, uploadImage } from "../../utils/uploadImage";

const dataForm = {
  nomeAutor: "",
  nomeReceita: "",
  descricaoReceita: "",
};

const FormNewRecipe = () => {
  const router = useRouter();
  const [dataIngredient, setDataIngredient] = React.useState(dataForm);
  const [ingredientes, setIngredientes] = React.useState([]);
  const [input, setInput] = React.useState("");
  const [showModal, setShowModal] = React.useState(false);
  const [fileData, setFileData] = React.useState("");
  const refIngredients = React.useRef();
  const [previewImage, setPreviewImage] = React.useState();
  const [messageAddingRecipe, setMessageRecipe] = React.useState(false);

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

    setMessageRecipe(true);

    if (!resultInputs) {
      setShowModal(true);
      return;
    }

    if (previewImage) {
      const dataImagem = await uploadImage(fileData);

      await addNewRecipe({
        ...dataIngredient,
        ingredientes,
        dataImagem,
      });
    }

    router.push("/");
  };

  const handleImage = async (e) => {
    const file = e.target.files;
    const fileUrl = await urlPreviewImage(file);
    setPreviewImage(fileUrl);
    setFileData(file);
  };

  React.useEffect(() => {
    return () => setMessageRecipe(false);
  }, []);

  return (
    <>
      <Head>
        <title>Recipes App | New Recipe</title>
      </Head>
      <Container>
        <Style.TitleNewRecipe>Add New Recipe</Style.TitleNewRecipe>

        <Style.WrapperNewRecipe>
          <Style.FormNewRecipe>
            <Style.WrapperAuthorAndName>
              <input
                type="text"
                placeholder="Your name"
                onChange={handleData}
                id="nomeAutor"
                autoComplete="off"
              />
              <input
                type="text"
                placeholder="Recipe name"
                onChange={handleData}
                id="nomeReceita"
                autoComplete="off"
              />
            </Style.WrapperAuthorAndName>
            <Style.WrapperDescription>
              <textarea
                rows="5"
                placeholder="Recipe description"
                id="descricaoReceita"
                onChange={handleData}
                autoComplete="off"
              ></textarea>
            </Style.WrapperDescription>

            <Style.WrapperInputFile>
              <input
                type="file"
                name="file"
                id="file"
                placeholder="Upload recipe image"
                onChange={handleImage}
              />
              <label htmlFor="file">Choose a file</label>
              <Style.WrapperImagePreview>
                <img src={previewImage && previewImage} alt="" />
                {previewImage && (
                  <span onClick={() => setPreviewImage("")}>Remove image</span>
                )}
              </Style.WrapperImagePreview>
            </Style.WrapperInputFile>

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
                    <Style.WrapperItemAdded key={`${ingredient}+${index}`}>
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
            <button onClick={handleCreateRecipe}>Add recipe</button>
          </Style.ButtonAddNewRecipe>
          <Style.WrapperAddingRecipe>
            {messageAddingRecipe && <p>Adding recipe ...</p>}
          </Style.WrapperAddingRecipe>
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

export default FormNewRecipe;
