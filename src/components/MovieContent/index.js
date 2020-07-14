import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { CardStyle, Title, VoteContent, Vote, Star } from './style';

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
          <a><Title>{movies.title}</Title></a>
          <VoteContent>
            <Star /><Vote>{movies.vote_average}</Vote>
          </VoteContent>
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
