import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { DETAIL_MOVIES_REQUEST } from './../reducer/movie';
import styled from 'styled-components';

const Detail = ({ movieId }) => {
  const dispatch = useDispatch();
  const { isLoaded, detailResults } = useSelector(state => state.movie);

  useEffect(() => {
    dispatch({
      type: DETAIL_MOVIES_REQUEST,
      movieId,
    });
  }, [movieId]);

  const BackgroundImageSection = styled.div`
    position: relative;
    z-index: -1;
    height: 40vh;
    filter: grayscale(100%);
    background: url(https://image.tmdb.org/t/p/original/${detailResults.backdrop_path}) center center / cover no-repeat;
  `

  const PosterSection = styled.div`
    display: flex;
    width: 90vw;
    margin: 0px auto;

    & img {
      width: 300px;
      margin-top: -5rem;
      margin-right: 2rem;
    }

    & h2 {
      font-size: 2.6em;
      margin: 0.67em 0px;
    }

    & h2 > span {
      font-size: 0.7em;
    }

    & h3 {
      font-size: 1.4em;
    }

    @media (min-width: 1200px) {
      width: 1200px;
    }
  `

  return (
    <div>
      <div style= {{ marginBottom: '3em'}}>
        <BackgroundImageSection />
      </div>
      <div style= {{ marginBottom: '3em'}}>
        <PosterSection>
          <img src={`https://image.tmdb.org/t/p/original/${detailResults.poster_path}`} />
          <div>
            <h2>{detailResults.title} <span>{`(${detailResults.release_date.slice(0,4)})`}</span></h2>
            <h3>{detailResults.genres.map(((v) => { return <>{v.name} | &nbsp;</> }))}<span>{detailResults.runtime}分</span></h3>
            <p>{detailResults.overview}</p>
          </div>
        </PosterSection>
      </div>
    </div>
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

