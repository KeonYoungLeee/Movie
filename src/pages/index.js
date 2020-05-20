import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TRENDING_MOIVES_REQUEST } from '../reducer/movie';
import IndexPost from '../container/IndexPost';


const Home = () => {
  const { 
    movieBackdroppath, 
    movieTitle } = useSelector(state => state.movie);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: TRENDING_MOIVES_REQUEST,
    });
  }, []);

  return (
    <>
      <IndexPost 
        imgSrc={movieBackdroppath}
        title={movieTitle}
      />
    </>
  );
};

export default Home;
