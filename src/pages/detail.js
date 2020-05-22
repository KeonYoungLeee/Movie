import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { DETAIL_MOVIES_REQUEST } from './../reducer/movie';
import DetailPost from '../container/DetailPost';

const Detail = ({ movieId }) => {
  const dispatch = useDispatch();
  const { isLoaded, detailResults } = useSelector(state => state.movie);

  useEffect(() => {
    dispatch({
      type: DETAIL_MOVIES_REQUEST,
      movieId,
    });
  }, [movieId]);


  return (
    <DetailPost 
      detailResults={detailResults}  
    />
  );
};

Detail.propTypes = {
  movieId: PropTypes.number.isRequired,
};

Detail.getInitialProps = async ( context ) => {
  console.log(context);
  console.log('movieId getInitialProps', context.query.movieId);
  return { movieId : parseInt(context.query.movieId) }
  
};

export default Detail;

