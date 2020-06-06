import styled from 'styled-components';

export const Wrapper = styled.div`
  @media (min-width: 1200px) {
    align-items: flex-start;
    & h2 {
      font-size: 2rem;
      margin-bottom: 2rem;
    }
  }

  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  color: rgb(20, 40, 80);
  text-align: center;

  & h2 {
    margin-bottom: 1rem;
  }
`;