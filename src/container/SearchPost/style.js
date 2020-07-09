import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 90vw;
  margin: 0px auto;
  @media (min-width: 1200px) {
    width: 1200px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(93vh);

  & input {
    flex-basis: 3%;
    padding: 0.7rem 0.5rem;
    border-radius: 5px;
    border-width: 2px;
    border-style: solid;
    border-color: rgb(20, 40, 80);
    border-image: initial;
    margin: 1rem 0px;
    font-weight: bold;
  }
`;

export const ResultDisplay = styled.div`
  overflow-y: auto;
  max-height: 90%;
  & a {
    display: block;
    padding: 0.5rem 0px;
    color: black;
    font-size: 1.2em;
    margin-left: 1em;
    font-weight: bold;
  }
`;

