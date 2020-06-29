import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: black;
  color: white;
  display: flex;
  justify-content: center;
  padding: 1.2rem 0rem 1.2rem 0rem;
`;

export const List = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & li {
    list-style: none;
    display: inline-block;
    font-size: 3.3vw;
    padding: 0px 20px 0px 20px;

    & input {
      font-size: 2.5vw;
    }
  }
`;