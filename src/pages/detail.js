import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { DETAIL_MOVIES_REQUEST, IMAGES_MOVIES_REQUEST, CREDITS_MOVIES_REQUEST } from './../reducer/movie';
import DetailPost from '../container/DetailPost';

const Detail = ({ movieId }) => {
  const dispatch = useDispatch();
  const { isLoaded, detailResults, imageResults, creditsResults } = useSelector(state => state.movie);

  useEffect(() => {
    dispatch({
      type: DETAIL_MOVIES_REQUEST,
      movieId,
    });
    dispatch({
      type: IMAGES_MOVIES_REQUEST,
      movieId,
    });
    dispatch({
      type: CREDITS_MOVIES_REQUEST,
      movieId,
    });
  }, [movieId]);


  return (
    <DetailPost 
      detailResults={detailResults}
      imageResults={imageResults}
      creditsResults={creditsResults}
    />
  );
};

Detail.propTypes = {
  movieId: PropTypes.number.isRequired,
};

Detail.getInitialProps = async ( context ) => {
  return { movieId : parseInt(context.query.movieId) }
};

export default Detail;

