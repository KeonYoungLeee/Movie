import styled from 'styled-components';
import { SearchOutlined } from '@ant-design/icons'


export const Wrapper = styled.div`
  background-color: black;
  color: white;
  display: flex;
  justify-content: space-around;
  padding: 1.2rem 0rem 1.2rem 0rem;
`;

export const List = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & li {
    list-style: none;
    display: inline-block;
    font-size: 1.5rem;
    padding: 0px 20px 0px 20px;

    & input {
      font-size: 1.2rem;
      color: black;
    }

    & a {
      color: white;
    }
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