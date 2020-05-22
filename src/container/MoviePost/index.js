import React, { useState, useCallback} from 'react';
import { MovieLayoutList, MovieCardLayout, MovieCard, Wrapper } from './style';
import MovieContent from '../../components/MovieContent';

const MoviePost = ({ isLoaded, currentResults, upcompingResults, popularResults }) => {

  const [now, setNow] = useState(true);
  const [current, setCurrent] = useState(false);
  const [popular, setPopular] = useState(false);

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


  return (
    <Wrapper>
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
                  <h2>Now Playing</h2>
                  <MovieCardLayout>
                    {currentResults && currentResults.length > 0 && currentResults.map(movies => {
                      return (
                        <MovieCard>
                          <MovieContent key={movies.id} movies={movies} id={movies.id} />
                        </MovieCard>
                      );
                    })}
                  </MovieCardLayout>
                </>
              )
              || current && (
                <>
                  <h2>Current Playing</h2>
                  <MovieCardLayout>
                    {upcompingResults && upcompingResults.length > 0 && upcompingResults.map(movies => {
                      return (
                        <MovieCard>
                          <MovieContent key={movies.id} movies={movies} id={movies.id} />
                        </MovieCard>
                      );
                    })}
                  </MovieCardLayout>
                </>
              )
              || popular && (
                <>
                  <h2>Popular Playing</h2>
                  <MovieCardLayout>
                    {popularResults && popularResults.length > 0 && popularResults.map(movies => {
                      return (
                        <MovieCard>
                          <MovieContent key={movies.id} movies={movies} id={movies.id} />
                        </MovieCard>
                      );
                    })}
                  </MovieCardLayout>
                </>
              )
            : <div>isLoading...</div>
          }
        </>
      }
    </Wrapper>
  )
};

export default MoviePost;