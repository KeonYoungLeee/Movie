import styled from "styled-components";

export const PosterSection = styled.div`

  display: flex;

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


export const ProfileSection = styled.div`

`;

export const PropfileWrapper = styled.div`

  @media (min-width: 1200px) {
      align-items: flex-start;
  }
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  color: rgb(20, 40, 80);
  text-align: center;
`;

export const PropfileDisplay = styled.div`
  display: flex;
`;

export const PropfileContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 1rem;
  width: 172px;

  & img {
    width: 100px;
    box-shadow: rgba(0, 0, 0, 0.5) 0px 5px 3px 0px;
    margin: 0px auto 0.5rem;
    border-radius: 5px;
    flex: 1 1 0%;
  }

`;

export const PropfileName = styled.h4`
  font-weight: bold;
  margin-bottom: 0.3em;
`;