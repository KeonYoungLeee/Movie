import React from 'react';
import PropTypes from 'prop-types';
import DetailPost from '../container/DetailPost';

const Detail = ({ movieId }) => {

  return (
    <>
      <DetailPost movieId={movieId} />
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
