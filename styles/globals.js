import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  /* width */
  ::-webkit-scrollbar {
    width: 12px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, .1);
    border-radius: 10px;
  }
 
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #eac8af; 
    border-radius: 10px;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box; 
  }

  html, body {
    background: #121212;
  }

  img {
    display: block;
    width: 100%;
    max-width: 100%;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  font-family: "Playfair Display", serif;
  padding: 20px;
  overflow-x: hidden;
`;

export const Title = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  font-family: "Cormorant Garamond", serif;
  color: #eac8af;
  padding-top: 80px;
  text-align: center;
  font-size: max(45px, 4vw);

  & img {
    width: 60px;
  }
`;

export const WrapperGridRecipes = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  width: 100%;
  margin-top: 50px;
  margin-bottom: 50px;
  padding: 0 20px;
`;
