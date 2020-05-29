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
  align-items: center;
  color: rgb(20, 40, 80);
  text-align: center;

  & h2 {
    margin-bottom: 1rem;
  }

`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  & img {
    width: 196.5px;
    box-shadow: rgba(0, 0, 0, 0.5) 0px 5px 3px 0px;
    margin: 0px auto 0.5rem;
    border-radius: 5px;
    flex: 1 1 0%;
  }
`;
