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

  @media (max-width: 1200px) {
    position: relative;
    text-align: center;
    display: block;
    & img {
      width: 50vw;
      margin-right: 0rem;
    }
    & p {
      text-align: left;
    }
  }
`;

export default Content;
