import React, { useState, useCallback} from 'react';
import { MovieLayoutList, MovieCardLayout, MovieCard, Wrapper, ResponsiveButton } from './style';
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
            { now 
              ? <ResponsiveButton>上映中</ResponsiveButton>
              : <button onClick={onClickNow} value={now} onChange={onChangeNow} >上映中</button>
            }
            {
              current
              ? <ResponsiveButton>上映予定</ResponsiveButton>
              : <button onClick={onClickCurrent} value={current} onChange={onChangeCurrent} >上映予定</button>
            
            }
            {
              popular
              ? <ResponsiveButton>人気</ResponsiveButton>
              : <button onClick={onClickPopular} value={popular} onChange={onChangePopular} >人気</button>
            }
          </MovieLayoutList>
          {
            isLoaded ? 
              now && (
                <>
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