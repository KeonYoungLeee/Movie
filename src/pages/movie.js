import React, { useEffect, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { CURRENT_MOVIES_REQUEST, UPCOMPING_MOIVES_REQUEST, POPULAR_MOIVES_REQUEST } from '../reducer/movie';
import MovieList from './../components/movieList';


const Movie = () => {
  const { isLoaded, currentResults, upcompingResults, popularResults } = useSelector(state => state.movie);
  const dispatch = useDispatch();

  const [now, setNow] = useState(true);
  const [current, setCurrent] = useState(false);
  const [popular, setPopular] = useState(false);
  
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

  const onChangeNow = useCallback((e) => {
    setNow(e.target.value);
  });
  const onChangeCurrent = useCallback((e) => {
    setNow(e.target.value);
  });
  const onChangePopular = useCallback((e) => {
    setNow(e.target.value);
  });

  const onClickNow = useCallback(() => {
    setNow(true);
    setCurrent(false);
    setPopular(false);
  }, [now, current, popular]);

  const onClickCurrent = useCallback(() => {
    setNow(false);
    setCurrent(true);
    setPopular(false);
  }, [now, current, popular]);

  const onClickPopular = useCallback(() => {
    setNow(false);
    setCurrent(false);
    setPopular(true);
  }, [now, current, popular]);

  const MovieLayout = styled.div`
    width: 90vw;
    margin: 0px auto;
    
    @media (min-width: 1200px) {
      width: 1200px;
    }
  `;

  const MovieState = styled.div`
    & h2 {

    }
  `;

  const MovieCardLayout = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-flow: row wrap;
  `



  const MovieLayoutList = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 1rem;
    margin-bottom: 3rem;

    & button {
      padding: 13px 60px 15px 60px;
      font-size: 1.7rem;
      border-radius: 22px;
    }
    
    & button:nth-child(1) {
      transition-duration: 0.4s;
      background-color: #555555;
      color: #FFFFFF;
    }
    & button:nth-child(1):hover {
      background-color: #FFFFFF;
      color: #555555;
    }
    & button:nth-child(2) {
      transition-duration: 0.4s;
      background-color: #555555;
      color: #FFFFFF;
    }
    & button:nth-child(2):hover {
      background-color: #FFFFFF;
      color: #555555;
    }
    & button:nth-child(3) {
      transition-duration: 0.4s;
      background-color: #555555;
      color: #FFFFFF;
    }
    & button:nth-child(3):hover {
      background-color: #FFFFFF;
      color: #555555;
    }
  `


  const MovieCard = styled.div`
  
    position: relative;
    flex-basis: 100%;
    padding: 10px;

    @media (min-width: 768px) {
      flex-basis: 50%;
    }

    @media (min-width: 1200px) {
      flex-basis: 33.1%;
    }
  `;

  return (
    <>
      <MovieLayout>
        {
          <>
            <MovieLayoutList>
              <button onClick={onClickNow} value={now} onChange={onChangeNow} >now</button>
              <button onClick={onClickCurrent} value={current} onChange={onChangeCurrent} >current</button>
              <button onClick={onClickPopular} value={popular} onChange={onChangePopular} >popular</button>
            </MovieLayoutList>
            {
              isLoaded ? 
                now && (
                  <>
                    <MovieState>
                      <h2>Now Playing</h2>
                      <MovieCardLayout>
                        {currentResults && currentResults.length > 0 && currentResults.map(movies => {
                          return (
                            <MovieCard>
                              <MovieList key={movies.id} movies={movies} id={movies.id} />
                            </MovieCard>
                          );
                        })}
                      </MovieCardLayout>
                    </MovieState>
                  </>
                )
                || current && (
                  <>
                    <MovieState>
                      <h2>Current Playing</h2>
                      <MovieCardLayout>
                        {upcompingResults && upcompingResults.length > 0 && upcompingResults.map(movies => {
                          return (
                            <MovieCard>
                              <MovieList key={movies.id} movies={movies} id={movies.id} />
                            </MovieCard>
                          );
                        })}
                      </MovieCardLayout>
                    </MovieState>
                  </>
                )
                || popular && (
                  <>
                    <MovieState>
                      <h2>Popular Playing</h2>
                      <MovieCardLayout>
                        {popularResults && popularResults.length > 0 && popularResults.map(movies => {
                          return (
                            <MovieCard>
                              <MovieList key={movies.id} movies={movies} id={movies.id} />
                            </MovieCard>
                          );
                        })}
                      </MovieCardLayout>
                    </MovieState>
                  </>
                )
              : <div>isLoading...</div>
            }
          </>
        }
      </MovieLayout>
    </>
  );
};

export default Movie;
