import styled, { keyframes } from "styled-components";

const animateLines = keyframes`
  0, 100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(30px);
  }
`;

export const WrapperLoader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 30px;

  & span:nth-child(2) {
    animation-delay: 0.2s;
  }

  & span:nth-child(3) {
    animation-delay: 0.3s;
  }

  & span:nth-child(4) {
    animation-delay: 0.4s;
  }

  & span:nth-child(5) {
    animation-delay: 0.5s;
  }
`;

export const Line = styled.span`
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #eac8af;
  border-radius: 10px;
  animation: ${animateLines} 0.6s linear infinite;
`;
