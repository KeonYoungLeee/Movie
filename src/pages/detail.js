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


  // backdrop_path: "/ocUrMYbdjknu2TwzMHKT9PBBQRw.jpg"
  // belongs_to_collection: null
  // budget: 42000000
  // genres: (2) [{…}, {…}]
  // homepage: "https://www.bloodshot.movie/"
  // id: 338762
  // imdb_id: "tt1634106"
  // original_language: "en"
  // original_title: "Bloodshot"
  // overview: "After he and his wife are murdered, marine Ray Garrison is resurrected by a team of scientists. Enhanced with nanotechnology, he becomes a superhuman, biotech killing machine—'Bloodshot'. As Ray first trains with fellow super-soldiers, he cannot recall anything from his former life. But when his memories flood back and he remembers the man that killed both him and his wife, he breaks out of the facility to get revenge, only to discover that there's more to the conspiracy than he thought."
  // popularity: 182.468
  // poster_path: "/8WUVHemHFH2ZIP6NWkwlHWsyrEL.jpg"
  // production_companies: (9) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
  // production_countries: (2) [{…}, {…}]
  // release_date: "2020-03-05"
  // revenue: 24573617
  // runtime: 110
  // spoken_languages: [{…}]
  // status: "Released"
  // tagline: "Being a superhero is in his blood"
  // title: "Bloodshot"
  // video: false
  // vote_average: 7.1
  // vote_count: 2093

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

    @media (min-width: 1200px) {
      width: 1200px;
    }
  `

  console.log();

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
            <h3>{detailResults.genres.map(((v) => { return <>{v.name}&nbsp;</> }))}<span>{detailResults.runtime}分</span></h3>
            <p>{detailResults.overview}</p>
          </div>
        </PosterSection>
      </div>
    </div>
  );
};

Detail.propTypes = {
  movieId: PropTypes.number.isRequired,
}

Detail.getInitialProps = async ( context ) => {
  console.log(context);
  console.log('movieId getInitialProps', context.query.movieId);
  return { movieId : parseInt(context.query.movieId) }
  
};

export default Detail;

