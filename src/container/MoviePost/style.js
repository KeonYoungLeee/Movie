import styled from 'styled-components';

export const Background = styled.div`
  background-color: black;
`;

export const Wrapper = styled.div`
  width: 90vw;
  margin: 0px auto;
  background-color: black;
  
  @media (min-width: 1200px) {
    width: 1200px;
  }
`;

export const MovieCardLayout = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-flow: row wrap;
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
