import React, { useEffect } from 'react';
import PostContent from '../../components/PostContent';
import { Wrapper } from './style';
import { useSelector, useDispatch } from 'react-redux';
import { TRENDING_MOIVES_REQUEST } from '../../reducer/Movie/trendingMovie';
import Rollingloading from '../../components/Rollingloading';

const IndexPost = () => {

  const { isLoading, isLoaded, movieBackdroppath, movieTitle } = useSelector(state => state.movieData.Trending);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch({
      type: TRENDING_MOIVES_REQUEST,
    });
  }, []);

  return (
    <>
      {
        <Wrapper>
          <img src={`https://image.tmdb.org/t/p/original/${movieBackdroppath}`} />
          <PostContent title={movieTitle} />
        </Wrapper>
      }
    </>
  );
};

export default IndexPost;
