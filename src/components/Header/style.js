import styled from 'styled-components';
import {Input} from 'antd';

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

export const InputSearch = styled(Input)`
  background-color: black;
  & span {
    & span {
      & button {
        background-color: black;
    
      }
    }
    
  }
`;
