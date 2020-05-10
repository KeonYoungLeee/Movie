import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import Router from 'next/router';
import { Card, Avatar } from 'antd';
import { useDispatch } from 'react-redux';

const MovieList = ({ movies, id }) => {
  const dispatch = useDispatch();

  const onDetail = () => {
    Router.push({ pathname: `/detail`, query: { movieId : parseInt(id) }}, `/detail/${parseInt(id)}`);
    // Router.push({ pathname: `/detail`, query: { movieId : parseInt(id) }}, `/detail/${parseInt(id)}`);
  };


  return (
    <>
      <Card 
        bodyStyle={{ padding: '5px', }}
        style={{ width: 157, height: 300, cursor: 'pointer' }} 
        cover={(
          movies.poster_path 
            ? <img src={`https://image.tmdb.org/t/p/original/${movies.poster_path}`} /> 
            : (<div style={{ backgroundColor: '#141414', height: '233px', width: '100%', lineHeight: '233px', display: 'flex', justifyContent: 'center' }}>
                <p style={{ color : 'white'}}>no image</p>
              </div>)
        )}
        onClick={onDetail}
      >
        <Card.Meta
          style={{ textAlign: "left", padding: '5px' }}
          title={movies.title}
        />
      </Card>
    </>
  );
};

MovieList.propTypes = {
  movies: PropTypes.object.isRequired,
};

export default MovieList;
