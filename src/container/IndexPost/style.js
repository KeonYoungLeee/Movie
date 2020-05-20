import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100vh;

  & img {
    width: 100%;
    height: 100%;
    position:relative;
    opacity: 0.88;
  }

  &:after {
    content: "";
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    background-color: black;
    opacity: 0.3;
  }
`