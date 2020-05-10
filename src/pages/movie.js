import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CURRENT_MOVIES_REQUEST, UPCOMPING_MOIVES_REQUEST, POPULAR_MOIVES_REQUEST } from '../reducer/movie';
import MovieList from './../components/movieList'

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
      { isLoaded
        ? <>
            <h2>Now Playing</h2>
            <div style={{ marginTop: '25px', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, 125px)', gap: '30px', marginRight: '30px', marginLeft: '30px' }}>
              {currentResults && currentResults.length > 0 && currentResults.map(movies => {
                return (
                  <MovieList key={movies.id} movies={movies} id={movies.id} />
                );
              })}
            </div>
            <h2>Current Playing</h2>
            <div style={{ marginTop: '25px', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, 125px)', gap: '30px', marginRight: '30px', marginLeft: '30px' }}>
              {upcompingResults && upcompingResults.length > 0 && upcompingResults.map(movies => {
                return (
                  <MovieList key={movies.id} movies={movies} id={movies.id} />
                );
              })}
            </div>
            <h2>Popular Playing</h2>
            <div style={{ marginTop: '25px', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, 125px)', gap: '30px', marginRight: '30px', marginLeft: '30px' }}>
              {popularResults && popularResults.length > 0 && popularResults.map(movies => {
                return (
                  <MovieList key={movies.id} movies={movies} id={movies.id} />
                );
              })}
            </div>
          </>
        : <div>loading...</div>
      }
    </>
  );
};

export default Movie;
