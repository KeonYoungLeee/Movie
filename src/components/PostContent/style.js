import styled from 'styled-components';

export const Content = styled.div`
  & h2 {
    position:absolute;
    z-index:1;
    left:auto;
    top:12%;
    left:50%;
    transform:translate(-50%, -50%);
    font-size: 3em;
    font-weight: bold;
    color:white;
  }

  & h3 {
    width: 100%;
    display:flex;
    justify-content: center;
    position: absolute;
    z-index: 1;
    top: 71%;
    transform: translate(0%, -50%);
    font-size: 2.23rem;
    font-weight: 500;
    color: white;
  }

  & button {
    display:flex;
    justify-content: center;
    position: absolute;
    z-index: 1;
    top: 81%;
    font-size: 2.23rem;
    font-weight: 500;
    color: white;
    margin-top: 0.6em;
    background-color: black;
    padding: 10px 40px 10px 40px;
    border-radius: 20px;
    border-color: transparent;
    text-transform: uppercase;
    text-decoration: none;
    border: 4px solid #494949 !important;
    transition: all 0.4s ease 0s;
    :hover {
      cursor: pointer;
      color: black !important;
      background: white;
      border-color: #212024 !important;
      transition: all 0.4s ease 0s;
      border-color: transparent;
    }
  }
`;
