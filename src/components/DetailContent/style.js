import styled from "styled-components";

export const PosterSection = styled.div`
  display: flex;
  width: 90vw;
  margin: 0px auto;

  & img {
    width: 300px;
    margin-top: -5rem;
    margin-right: 2rem;
  }

  & h2 {
    font-size: 2.6em;
    margin: 0.67em 0px;
  }

  & h2 > span {
    font-size: 0.7em;
  }

  & h3 {
    font-size: 1.4em;
  }

  @media (min-width: 1200px) {
    width: 1200px;
  }
`;