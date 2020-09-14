import styled, { keyframes } from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

`;

const rolling = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const LdsRing = styled.div`
  display: inline-block;
  position: relative;
  width: 25rem;
  height: 25rem;


  & div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    height: 25rem;
    width: 25rem;
    margin: 8px;
    border: 8px solid #fff;
    border-radius: 50%;
    animation: ${rolling} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #fff red red red;
  }

  & div:nth-child(1) {
    animation-delay: -0.45s;
  }
  & div:nth-child(2) {
    animation-delay: -0.3s;
  }
  & div:nth-child(3) {
    animation-delay: -0.15s;
  }
`;

