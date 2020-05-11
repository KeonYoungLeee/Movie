import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { TRENDING_MOIVES_REQUEST } from '../reducer/movie';



const Home = () => {
  const { 
    results, 
    movieBackdroppath, 
    movieTitle,
    movieVoteaverage } = useSelector(state => state.movie);
  const dispatch = useDispatch();

  console.log(results);

  const IndexPost = styled.div`
    position: absolute;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100vh;

    & img {
      width: 100%;
      height: 100%;
      position:relative;
      opacity: 0.88;
    }

    &:after {
      content: "";
      position: absolute;
      top: 0px;
      left: 0px;
      right: 0px;
      bottom: 0px;
      background-color: black;
      opacity: 0.3;
    }
  `

  const IndexBackground = styled.div`
    
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
      font-size: 2.3rem;
      font-weight: 500;
      color: white;
    }
    & h4 {
      position:absolute;
      z-index:1;
      left:50%;
      top: 81%;
      transform:translate(-50%, -50%);
      font-size: 2rem;
      color:yellow;
    }
  `;

  useEffect(() => {
    dispatch({
      type: TRENDING_MOIVES_REQUEST,
    });
  }, []);

  return (
    <>
      <IndexPost>
        <img src={`https://image.tmdb.org/t/p/original/${movieBackdroppath}`} />
        <IndexBackground>
          <h2>今日の映画</h2>
          <h3>{movieTitle}</h3>
          <h4>{movieVoteaverage}</h4>
        </IndexBackground>
      </IndexPost>
    </>
  );
};

export default Home;
