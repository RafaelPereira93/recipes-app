import styled from "styled-components";

export const WrapperRecipe = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
  max-width: 900px;
  padding: 100px 20px;

  @media (max-width: 950px) {
    max-width: 600px;
    padding: 50px 20px;
  }

  @media (min-width: 300px) and (max-width: 500px) {
    padding: 80px 5px;
  }
`;

export const TitleRecipe = styled.h2`
  color: #e84545;
  font-size: max(50px, 3.5vw);
  text-align: center;

  @media (max-width: 950px) {
    line-height: 1.1;
    font-size: 2.5em;
    margin-bottom: 15px;
  }

  @media (min-width: 300px) and (max-width: 500px) {
    font-size: 2em;
  }
`;

export const WrapperAuthor = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 10px;
  margin-bottom: 20px;
  color: #eac8af;
`;

export const AutorName = styled.h3`
  font-family: "Playfair Display", serif;
  font-weight: 300;

  & span {
    display: inline-block;
    font-weight: 300;
    font-family: "Poppins", sans-serif;
  }

  @media (min-width: 300px) and (max-width: 500px) {
    font-size: 0.9em;
  }
`;

export const CreatedAt = styled.h3`
  font-family: "Playfair Display", serif;
  font-weight: 300;

  & p {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 300;
    font-family: "Poppins", sans-serif;
    color: #f3f4ed;
    font-size: 0.8em;
  }

  & p:before {
    content: "";
    display: inline-block;
    width: 1px;
    height: 20px;
    background: rgba(255, 255, 255, 0.5);
    margin-right: 8px;
  }

  @media (min-width: 300px) and (max-width: 500px) {
    font-size: 1em;
  }
`;

export const WrapperImage = styled.div`
  & img {
    display: block;
    width: 100%;
    margin: 0 auto;
  }
`;

export const WrapperDescriptionAndIngredients = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
  gap: 30px;
  padding: 0 5px;
  margin-top: 30px;
  width: 100%;

  @media (max-width: 950px) {
    grid-template-columns: 1fr;
  }
`;

export const WrapperDescription = styled.div`
  & p {
    font-family: "Poppins", sans-serif;
    color: #f3f4ed;
    word-break: break-word;
  }

  @media (min-width: 300px) and (max-width: 500px) {
    & p {
      font-size: 0.95em;
    }
  }
`;

export const WrapperIngredients = styled.div`
  & h1 {
    text-align: right;
  }

  @media (max-width: 950px) {
    & h1 {
      text-align: left;
    }
  }
`;

export const TitleDescriptionOrIngredient = styled.h1`
  margin: 0 0 15px;
  color: #e84545;
  font-size: 1.3em;
`;

export const IngredientsList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-left: 20px;
  color: #f3f4ed;
  font-family: "Poppins", sans-serif;

  & li {
    list-style: none;
    font-size: 0.95em;
    margin-bottom: 10px;
    position: relative;
    line-height: 1.3;
    text-align: right;
    word-break: break-word;
    position: relative;
  }

  & li:before {
    content: "•";
    color: #e84545;
    padding-right: 20px;
  }

  @media (max-width: 950px) {
    padding-left: 0;

    & li {
      text-align: left;
    }
  }

  @media (min-width: 300px) and (max-width: 500px) {
    & li:before {
      content: "•";
      color: #e84545;
      padding-right: 10px;
    }
  }
`;

export const WrapperBackToHome = styled.div`
  margin-top: 50px;

  & a {
    display: block;
    background: #f3f4ed;
    padding: 8px 20px;
    color: #121212;
    font-family: "Poppins", sans-serif;
    text-transform: uppercase;
    font-weight: 500;
    text-decoration: none;
    box-shadow: 4px 6px 0 0 #e84545;
    transition: 0.3s cubic-bezier(0.86, 0, 0.07, 1);
  }

  & a:hover {
    box-shadow: none;
  }
`;

export const WrapperIcons = styled.div`
  display: flex;
  gap: 40px;
  margin-bottom: 30px;

  & img {
    width: 30px;
  }

  @media (min-width: 300px) and (max-width: 500px) {
    & img {
      width: 25px;
    }
  }
`;

export const DeleteRecipe = styled.button`
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`;
