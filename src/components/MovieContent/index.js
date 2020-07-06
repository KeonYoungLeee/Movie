import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import CardStyle from './style';

const MovieContent = ({ movies, id }) => {

  return (
    <>
      <Link 
        href={{ pathname: '/detail', query: { movieId: parseInt(id, 10) } }} 
        as={ `/detail/${parseInt(id, 10)}` }
      >
        <CardStyle 
          bodyStyle={{ padding: '5px', }}
          path={movies.backdrop_path}
        >
          <a><p>{movies.title}</p></a>
        </CardStyle>
      </Link>
    </>
  );
};

MovieContent.propTypes = {
  movies: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired,
};

export default MovieContent;
