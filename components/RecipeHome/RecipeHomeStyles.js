import styled from "styled-components";

export const WrapperRecipe = styled.div`
  width: 100%;
  max-width: 900px;
  display: grid;
  grid-template-columns: 50% 1fr;
  background: #f3f4ed;
  padding: 30px;
  gap: 20px;

  user-select: none;

  & a {
    text-decoration: none;
  }

  &:hover img {
    transform: scale(1);
  }

  @media (max-width: 950px) {
    padding: 20px;

    display: flex;
    flex-direction: column;

    grid-template-columns: 1fr;

    max-width: 600px;
  }
`;

export const WrapperContentRecipe = styled.div`
  padding: 80px 0;

  @media (max-width: 950px) {
    padding: 20px 0;
    order: 1;
  }

  @media (min-width: 300px) and (max-width: 500px) {
    padding: 0;
  }
`;

export const AutorName = styled.h3`
  color: #99a8b2;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  text-transform: uppercase;
  font-size: 1em;
  letter-spacing: 2px;
  word-break: break-word;

  @media (max-width: 950px) {
    font-size: 0.85em;
  }
`;

export const TitleRecipe = styled.h1`
  color: #121212;
  font-family: "Playfair Display", serif;
  font-size: max(30px, 3vw);
  font-weight: 400;
  line-height: 1.1;
  word-break: break-word;

  @media (max-width: 950px) {
    font-size: 1.5em;
    display: inline-block;
  }
`;

export const DescriptionRecipe = styled.p`
  font-family: "Poppins", sans-serif;
  color: #939393;
  font-size: 1.1em;
  margin-top: 15px;
  text-align: left;

  @media (max-width: 950px) {
    font-size: 0.95em;
  }
`;

export const ReadMoreHome = styled.div`
  display: flex;
  justify-content: flex-end;

  margin-top: 20px;

  & a {
    width: 100%;
    display: block;
    text-transform: uppercase;
    font-family: "Poppins", sans-serif;
    font-weight: bold;
    color: #e84545;
    letter-spacing: 5px;
    text-align: right;
    font-size: 1.3em;
    text-decoration: none;
    position: relative;
  }

  & a:before {
    content: "";
    display: inline-block;
    width: calc(100% - 90px);
    height: 1px;
    background: #121212;
    position: absolute;
    top: 15px;
    left: 0;
  }

  @media (max-width: 950px) {
    & a {
      font-weight: 500;
      letter-spacing: 2px;
      font-size: 1.2em;
    }

    & a:before {
      content: "";
      display: inline-block;
      width: calc(100% - 70px);
      height: 1px;
      background: #121212;
      position: absolute;
      top: 15px;
      left: 0;
    }
  }
`;

export const WrapperImageRecipe = styled.div`
  & img {
    transition: 0.3s cubic-bezier(0.175, 0.885, 0.32, 2);
    transform: scale(0.98);
  }

  @media (max-width: 950px) {
    display: flex;
    justify-content: center;
  }
`;

export const ImageRecipe = styled.img`
  width: 100%;
  height: 100%;
  min-height: 450px;
  object-fit: cover;

  @media (max-width: 950px) {
    min-height: 100%;
    max-width: 650px;
  }
`;
