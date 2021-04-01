import React from "react";
import * as Styles from "./ModalNewRecipeStyles";

const ModalNewRecipe = ({ setModal }) => {
  React.useEffect(() => {
    let timer = setInterval(() => {
      setModal(false);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <Styles.WrapperModal>
        <Styles.ModalContent>
          <h2>Preencha todos os campos corretamente</h2>
        </Styles.ModalContent>
      </Styles.WrapperModal>
    </>
  );
};

export default ModalNewRecipe;
