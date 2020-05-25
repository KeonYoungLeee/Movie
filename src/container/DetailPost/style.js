import styled from "styled-components";

export const BackGround = styled.div`
  background-color: white;
`

export const Wrapper = styled.div`
  margin-bottom: 3em;
`;

export const BackgroundImageSection = styled.div`
  position: relative;
  z-index: -1;
  height: 40vh;
  filter: grayscale(100%);
  background: url(https://image.tmdb.org/t/p/original/${(props) => props.backdropPath}) center center / cover no-repeat;
  z-index: 0;
`;

export const WrapperDetailContent = styled.div`

  width: 90vw;
  margin: 0px auto;

  @media (min-width: 1200px) {
    width: 1200px;
  }

`;