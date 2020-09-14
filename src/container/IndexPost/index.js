import React, { useState, useEffect } from 'react';
import PostContent from '../../components/PostContent';
import { Wrapper } from './style';
import { useSelector, useDispatch } from 'react-redux';
import { TRENDING_MOIVES_REQUEST } from '../../reducer/Movie/trendingMovie';
import Rollingloading from '../../components/Rollingloading';

const IndexPost = () => {
  
  const { isLoading, isLoaded, id, title, backdrop_path, vote_average } = useSelector(state => state.movieData.Trending);
  const dispatch = useDispatch();

  console.log(`IndexPost => ${id}, ${title}`)

  useEffect(() => {
    dispatch({
      type: TRENDING_MOIVES_REQUEST,
    });
  }, []);
  
  return (
    <>
      {
        isLoading ? <Rollingloading />
        : <Wrapper>
            <img src={`https://image.tmdb.org/t/p/original/${backdrop_path}`} />
            <PostContent title={title} id={id} />
          </Wrapper>
      }
    </>
  );
};

export default IndexPost;
