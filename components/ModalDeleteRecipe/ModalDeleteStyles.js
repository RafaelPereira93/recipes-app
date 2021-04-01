import styled from "styled-components";

export const WrapperModalDelete = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

export const WrapperModalContent = styled.div`
  margin-top: 100px;
  background: #f3f4ed;

  padding: 50px;

  & h2 {
    font-family: "Poppins", sans-serif;
    font-weight: 500;
  }

  & span {
    display: inline-block;
    color: #e84545;
    position: relative;
  }

  & span:before {
    content: "";
    position: absolute;
    bottom: -3px;
    display: inline-block;
    width: 100%;
    height: 2px;
    background: #e84545;
  }

  @media (max-width: 950px) {
    width: 90%;
    padding: 30px;

    & h2 {
      font-size: 1.2em;
    }
  }
`;

export const WrapperButtons = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  gap: 30px;

  & button {
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
    cursor: pointer;
  }

  & button:hover {
    box-shadow: none;
  }
`;

export const RecipeDeletedMessage = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 10px;

  & p {
    font-family: "Poppins", sans-serif;
    font-size: 1.3em;
  }
`;
