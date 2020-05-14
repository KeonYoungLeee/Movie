import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import Router from 'next/router';
import styled from 'styled-components';
import { Card, Avatar } from 'antd';
import { useDispatch } from 'react-redux';

const MovieList = ({ movies, id }) => {

  const onDetail = () => {
    Router.push({ pathname: `/detail`, query: { movieId : parseInt(id) }}, `/detail/${parseInt(id)}`);
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
    display: flex;
    justify-content: center;
    align-items: flex-end;
    ${ movies.poster_path 
      ?
      `background: url(https://image.tmdb.org/t/p/original/${movies.poster_path}) center center / cover no-repeat;` 
      :
      `background: url();`
    }
    &:after {
      content: "";
      position: absolute;
      left: 0px;
      right: 0px;
      top: 0px;
      bottom: 0px;
      background-color: rgba(0, 0, 0, 0.3);
    }

    & p {
      position: relative;
      z-index: 1;
      color : white;
      font-size : 1.3em;
      margin-bottom: 0;
    }
  `

  return (
    <>
      <CardList 
        bodyStyle={{ padding: '5px', }}
        onClick={onDetail}
      >
        <p>{movies.title}</p>\
      </CardList>
    </>
  );
};

MovieList.propTypes = {
  movies: PropTypes.object.isRequired,
};

export default MovieList;
