import styled from 'styled-components';

export const MovieLayoutList = styled.div`
  display: flex;
  justify-content: space-around;
  padding-top: 2rem;
  margin-bottom: 2rem;

  & button {
    padding: 13px 60px 15px 60px;
    font-size: 1.7rem;
    border-radius: 22px;
  }
  
  & button:nth-child(1) {
    transition-duration: 0.4s;
    background-color: black;
    color: #bbbbbb;
  }
  & button:nth-child(1):hover {
    cursor: pointer;
    color: white;
    border-top: 0.5vmin solid rgb(255, 255, 255);
    border-bottom: 0.5vmin solid rgb(255, 255, 255);
  }

  & button:nth-child(2) {
    transition-duration: 0.4s;
    background-color: black;
    color: #bbbbbb;
  }
  & button:nth-child(2):hover {
    cursor: pointer;
    color: white;
    border-top: 0.5vmin solid rgb(255, 255, 255);
    border-bottom: 0.5vmin solid rgb(255, 255, 255);
  }

  & button:nth-child(3) {
    transition-duration: 0.4s;
    background-color: black;
    color: #bbbbbb;
  }
  & button:nth-child(3):hover {
    cursor: pointer;
    color: white;
    border-top: 0.5vmin solid rgb(255, 255, 255);
    border-bottom: 0.5vmin solid rgb(255, 255, 255);
  }
`;

export const ResponsiveButton = styled.button`
  padding: 13px 60px 15px 60px;
  font-size: 1.7rem;
  border-radius: 22px;
  color: white;
  border-top: 0.5vmin solid rgb(255, 255, 255);
  border-bottom: 0.5vmin solid rgb(255, 255, 255);
`;
