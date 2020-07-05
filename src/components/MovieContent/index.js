import React from 'react';
import PropTypes from 'prop-types';
import Router from 'next/router';
import CardStyle from './style';

const MovieContent = ({ movies, id }) => {
  const onDetail = () => {
    Router.push({ pathname: '/detail', query: { movieId: parseInt(id, 10) }}, `/detail/${parseInt(id, 10)}`);
  };

  return (
    <>
      <CardStyle 
        bodyStyle={{ padding: '5px', }}
        onClick={onDetail}
        path={movies.backdrop_path}
      >
        <p>{movies.title}</p>
      </CardStyle>
    </>
  );
};

MovieContent.propTypes = {
  movies: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired,
};

export default MovieContent;
