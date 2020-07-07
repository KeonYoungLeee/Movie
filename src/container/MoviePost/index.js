import React, { useState, useCallback, useEffect} from 'react';
import { MovieCardLayout, MovieCard, Wrapper, Background } from './style';
import MovieContent from '../../components/MovieContent';
import MovieButtonList from '../../components/MovieButtonList';
import { useSelector, useDispatch } from 'react-redux';
import { CURRENT_MOVIES_REQUEST } from '../../reducer/movie/currentMovie';
import { UPCOMPING_MOIVES_REQUEST } from '../../reducer/Movie/upcomingMovie';
import { POPULAR_MOIVES_REQUEST } from '../../reducer/Movie/popularMovie';

const MoviePost = () => {

  const { currentResults } = useSelector(state => state.movieData.Current);
  const { upcompingResults } = useSelector(state => state.movieData.Upcoming);
  const { popularResults } = useSelector(state => state.movieData.Popular);
  
  const dispatch = useDispatch();

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
    <Background>
    <Wrapper>
      {
        <>
          <MovieButtonList 
            now={now} onChangeNow={onChangeNow} onClickNow={onClickNow}
            current={current} onChangeCurrent={onChangeCurrent} onClickCurrent={onClickCurrent}
            popular={popular} onChangePopular={onChangePopular} onClickPopular={onClickPopular} />
          {
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
          }
        </>
      }
    </Wrapper>
    </Background>
  )
};

export default MoviePost;
