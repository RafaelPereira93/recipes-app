import styled, { keyframes } from "styled-components";

const animaModal = keyframes`
  to {
    opacity: 1;
    transform: translateY(30px);
  }
`;

export const WrapperModal = styled.section`
  display: flex;
  justify-content: center;
  align-items: flex-start;

  position: fixed;
  top: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(2px);
  z-index: 999;
`;

export const ModalContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0 20px;
  opacity: 0;
  transform: translateY(-100%);
  animation: ${animaModal} 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.7) forwards;

  & h2 {
    background: #e84545;
    color: #f3f4ed;
    text-transform: uppercase;
    padding: 20px;
    font-family: "Poppins", sans-serif;
    letter-spacing: 2px;
    font-size: max(14px, 1.1vw);
  }
`;
