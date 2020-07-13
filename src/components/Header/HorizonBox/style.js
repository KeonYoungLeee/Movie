import styled, {keyframes} from 'styled-components';
import {MenuOutlined, ArrowLeftOutlined, SearchOutlined, CloseOutlined} from '@ant-design/icons'

export const Wrapper = styled.div`
  color: red;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const HambugerMenu = styled(MenuOutlined)`
  z-index: 1;
  width: 3rem;
  height: 3rem;

  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  transition: all 0.3s linear;
  transform-origin: 1px;

  :hover {
    background-color: #586868;
    border-radius: 50%;
    & svg {
      color: white;
    }
  }

  & svg {
    color: white;
    width: 50px;
    height: 30px;
    width: 70%;
    height: 70%
  }
`;

const coolBoxKeyframes = keyframes`
  0% {
    width: 0rem;
    background-color: #333333;
  }
  1000% {
    width: 15rem;
    background-color: #333333;
  }
`;

export const Menu = styled.div`
  z-index: 3;
  width: 15rem;
  height: 100%;
  position: fixed;
  right: 0px;
  top: 0px;
  background-color: #333333;
  display: flex;
  flex-direction: column;
  padding: 3rem 0;
  animation-name: ${coolBoxKeyframes};
  animation-duration: 0.3s;
  animation-timing-function: ease-in-out;
  animation-delay: 0s;
`;

export const CloseBtn = styled(CloseOutlined)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  & svg {
    color: white;
    width: 70%;
    height: 70%;
  }

  :hover {
    background-color: white;
    border-radius: 50%;
    & svg {
      color: #686868;
    }
  }
`;

export const List = styled.ul`
  padding-left: 0px;
  position: relative;
  top: 50px;

  & > li {
    &:hover {
      background-color: ${props => (props.hoverEvent ? "#666666" : "none")};
      cursor: pointer;
    }
  }

  & li {
    color: white;
    width: 100%;
    background-color: #333333;
    list-style: none;
    font-size: 1.5rem;
    padding: 1rem 0rem 1rem 1.5rem;
    font-weight: bold;
    text-align: left;

    & a {
      color: white;
      font-size: 1.2rem;
    }
  }

  & li:hover:nth-child(1) {
    color: ${props => props};
    cursor: pointer;
  }
`;

export const BackIcon = styled(ArrowLeftOutlined)`
  width: 3rem;
  height: 3rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1.25rem;

  & svg {
    color: white;
    width: 70%;
    height: 70%;
  }
`;

const ScreenKeyFrames = keyframes`
  0% {
    height: 0px;
    background-color: rgb(0,0,0,1);
  }
  100% {
    height: 100%;
    background-color: rgb(0,0,0,1);
  }
`;

export const SearchScreen = styled.div`
  top: 0;
  left: 0;
  position: absolute;
  background-color: rgb(0,0,0,1);
  width: 100%;
  height: 100%;
  z-index: 2;

  animation-name: ${ScreenKeyFrames};
  animation-duration: 1s;
  animation-timing-function: ease-in-out;
  animation-delay: 0s;
`;

export const SearchForm = styled.form`
  width: 300px;
  height: 200px;
  margin: 0;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;

  & h2 {
    text-align: center;
    color: white;
  }
`;

export const SearchIcon = styled(SearchOutlined)`
  width: 3rem;
  height: 3rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  & svg {
    color: white;
    width: 70%;
    height: 70%;
  }
`;

export const SearchInput = styled.input`
  text-align: center;
  border: none;
  border-bottom: 2px solid white;
  background: transparent;
  color: white;
  text-align: left;
  margin-left: 0.4rem;
`;

export const SearchCloseBtn = styled(CloseOutlined)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  & svg {
    color: white;
    width: 70%;
    height: 70%;
  }

  :hover {
    background-color: white;
    border-radius: 50%;
    & svg {
      color: #686868;
    }
  }

`;

export const MenuBackGround = styled.div`
  position: fixed;
  z-index: 7;
  left: 0px;
  right: 0px;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  visibility: visible;
  opacity: 1;
  transition: all 0.3s linear 0s;
`;
