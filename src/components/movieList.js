import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import Router from 'next/router';
import styled from 'styled-components';
import { Card, Avatar } from 'antd';
import { useDispatch } from 'react-redux';

const MovieList = ({ movies, id }) => {
  const dispatch = useDispatch();

  const onDetail = () => {
    Router.push({ pathname: `/detail`, query: { movieId : parseInt(id) }}, `/detail/${parseInt(id)}`);
    // Router.push({ pathname: `/detail`, query: { movieId : parseInt(id) }}, `/detail/${parseInt(id)}`);
  };

  const CardList = styled(Card)`
    position: relative;
    flex-basis: 100%;
    height: 30vh;
    margin-bottom: 3px;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 5px 3px 0px;
    cursor: pointer;
    border-radius: 5px;
    overflow: hidden;
    ${ movies.poster_path 
      ?
      `background: url(https://image.tmdb.org/t/p/original/${movies.poster_path}) center center / cover no-repeat;` 
      :
      (<div style={{ backgroundColor: '#141414', height: '233px', width: '100%', lineHeight: '233px', display: 'flex', justifyContent: 'center' }}>
        <p style={{ color : 'white'}}>no image</p>
      </div>
      )}
    &:after {
      content: "";
      position: absolute;
      left: 0px;
      right: 0px;
      top: 0px;
      bottom: 0px;
      background-color: rgba(0, 0, 0, 0.3);
    }
  `

  const CardMeta = styled(Card.Meta)`
    textAlign: left; 
    padding: 5px;
    color : white;
  `;


  return (
    <>
      <CardList 
        bodyStyle={{ padding: '5px', }}
        onClick={onDetail}
      >
        <CardMeta
          title={movies.title}
        />
      </CardList>
    </>
  );
};

MovieList.propTypes = {
  movies: PropTypes.object.isRequired,
};

export default MovieList;
