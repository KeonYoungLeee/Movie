import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CURRENT_MOVIES_REQUEST, UPCOMPING_MOIVES_REQUEST, POPULAR_MOIVES_REQUEST } from '../reducer/movie';
import MoviePost from '../container/MoviePost';


const Movie = () => {
  const { isLoaded, currentResults, upcompingResults, popularResults } = useSelector(state => state.movie);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: CURRENT_MOVIES_REQUEST,
    });
    dispatch({
      type: UPCOMPING_MOIVES_REQUEST,
    });
    dispatch({
      type: POPULAR_MOIVES_REQUEST,
    });
  }, []);

  return (
    <>
      {
        isLoaded 
        ? <MoviePost 
            isLoaded={isLoaded}
            currentResults={currentResults}
            upcompingResults={upcompingResults}
            popularResults={popularResults} /> 
        : <div>isLoading..</div>
      }
    </>
  );
};

export default Movie;
