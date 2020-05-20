import styled from "styled-components";

export const MovieWrapper = styled.div`
  width: 90vw;
  margin: 0px auto;

  @media (min-width: 1200px) {
    width: 1200px;
  }
`;

export const MovieCardLayout = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-flow: row wrap;
`;

export const MovieLayoutList = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 1rem;
  margin-bottom: 3rem;

  & button {
    padding: 13px 60px 15px 60px;
    font-size: 1.7rem;
    border-radius: 22px;
  }
  
  & button:nth-child(1) {
    transition-duration: 0.4s;
    background-color: #555555;
    color: #FFFFFF;
  }
  & button:nth-child(1):hover {
    background-color: #FFFFFF;
    color: #555555;
  }
  & button:nth-child(2) {
    transition-duration: 0.4s;
    background-color: #555555;
    color: #FFFFFF;
  }
  & button:nth-child(2):hover {
    background-color: #FFFFFF;
    color: #555555;
  }
  & button:nth-child(3) {
    transition-duration: 0.4s;
    background-color: #555555;
    color: #FFFFFF;
  }
  & button:nth-child(3):hover {
    background-color: #FFFFFF;
    color: #555555;
  }
`;

export const MovieCard = styled.div`

  position: relative;
  flex-basis: 100%;
  padding: 10px;

  @media (min-width: 768px) {
    flex-basis: 50%;
  }

  @media (min-width: 1200px) {
    flex-basis: 33.1%;
  }
`;