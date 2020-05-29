import styled from 'styled-components';

const Content = styled.div`
  display: flex;
  margin-bottom: 4rem;

  & img {
    width: 300px;
    margin-top: -5rem;
    margin-right: 2rem;
    z-index: 1;
  }

  & h2 {
    font-size: 2.6em;
    margin: 0.67em 0px;
  }

  & h2 > span {
    font-size: 0.7em;
  }

  & h3 {
    font-size: 1.4em;
  }
`;

export default Content;
