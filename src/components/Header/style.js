import styled from 'styled-components';

export const Background = styled.div`
  background-color: black;
`;

export const Wrapper = styled.div`
  width: 88vw;
  margin: 0px auto;

  @media (min-width: 1200px) {
    width: 1200px;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;

  & ul {
    list-style: none;
    margin: auto;
    font-size: 1.8rem;
    padding-inline-start: 0;
    margin-block-start: 0em;
    margin-block-end: 0em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    
    & li {
      & a {
        color: white;
      }
      &:hover a {
        color: yellow;
      }
    } 
  }

  & ul:nth-child(1) {
    display: flex;

    & li {
      margin-right: 1em;
    }
  }

  & ul:nth-child(2) {
    font-size: 1.5rem;
    margin-left: -7.5em;
  }
`;

export const BtnClick = styled.div`
  width: 50px;
  height: 50px;
  position: absolute;
  right: 0px;
  top: 0px;
  z-index: 1;
  background-image: url("http://s1.daumcdn.net/cfs.tistory/custom/blog/204/2048858/skin/images/menu.png");
  background-size: 50%;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
`;

export const PageCover = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0px;
  left: 0px;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 4;
  display: none;
`;

export const OpenedMenu = styled.div`
  width: 150px;
  height: 100%;
  position: fixed;
  top: 0px;
  right: -152px;
  z-index: 10;
  border: 1px solid #c9c9c9;
  background-color: white;
  text-align: center;
  transition: All 0.2s ease;
  -webkit-transition: All 0.2s ease;
  -moz-transition: All 0.2s ease;
  -o-transition: All 0.2s ease;
`;

export const CloseMenu = styled.div`
  width: 50px;
  height: 50px;
  position: absolute;
  right: 0px;
  top: 0px;
  background-image: url("http://s1.daumcdn.net/cfs.tistory/custom/blog/204/2048858/skin/images/close.png");
  background-size: 50%;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
`;
