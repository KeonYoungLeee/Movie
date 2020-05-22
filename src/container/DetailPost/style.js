import styled from "styled-components";

export const Wrapper = styled.div`
  margin-bottom: 3em;
`;

export const BackgroundImageSection = styled.div`
  position: relative;
  z-index: -1;
  height: 40vh;
  filter: grayscale(100%);
  background: url(https://image.tmdb.org/t/p/original/${(props) => props.backdropPath}) center center / cover no-repeat;
`;
