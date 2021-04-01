import styled from "styled-components";

export const Wrapper404Page = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  font-family: "Poppins", sans-serif;
  color: #e84545;
  position: relative;
  overflow-y: hidden;
`;

export const Content404Page = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  padding: 0 20px;
  position: relative;
`;

export const _404 = styled.div`
  position: relative;

  & h1 {
    font-size: max(3em, 6vw);
    font-weight: bold;
  }

  &:after {
    content: "";
    display: block;
    width: 1px;
    height: 100%;
    background: #e84545;
    position: absolute;
    top: 0;
    right: -25px;
  }
`;

export const NotFoundTItle = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  h2 {
    font-size: max(16px, 2vw);
    font-weight: 300;
  }
`;

export const WrapperTimer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  position: absolute;
  bottom: -80px;

  & h1 {
    font-size: max(1em, 1.8vw);
  }
`;
