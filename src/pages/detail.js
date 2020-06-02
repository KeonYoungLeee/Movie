import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import DetailPost from '../container/DetailPost';
import { DETAIL_MOVIES_REQUEST, IMAGES_MOVIES_REQUEST, CREDITS_MOVIES_REQUEST, VIDEOS_MOVIES_REQUEST } from '../reducer/movie';

const Detail = ({ movieId }) => {
  const dispatch = useDispatch();
  const { isLoaded, detailResults, imageResults, creditsResults, videosResults } = useSelector(state => state.movie);

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
    dispatch({
      type: VIDEOS_MOVIES_REQUEST,
      movieId,
    });
  }, [movieId]);


  return (
    <>
      {
        isLoaded 
        ? <DetailPost 
            detailResults={detailResults}
            imageResults={imageResults}
            creditsResults={creditsResults} 
            videosResults={videosResults} />
        : <div>isLoading...</div>
      }
    </>
  );
};

Detail.propTypes = {
  movieId: PropTypes.number.isRequired,
};

Detail.getInitialProps = async (context) => {
  return { movieId: parseInt(context.query.movieId, 10) };
};

export default Detail;
