import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Content from './style';
import { useSelector } from 'react-redux';
import { DETAIL_MOVIES_REQUEST } from '../../../reducer/movie/detailMovie';

const PosterSection = ({ movieId }) => {

  const { detailResults, titleLength } = useSelector(state => state.movieData.Detail);
  const Test = useSelector(state => state.movieData.Detail);
  
  return (
    <>
      <Content>
        <img src={`https://image.tmdb.org/t/p/original/${detailResults.poster_path}`} />
        <div>
          <h2>
            { titleLength > 30 ? <>{detailResults.title}<br /></> : <>{detailResults.title}</> }
            <span>&nbsp;{`(${detailResults.release_date})`}</span>
          </h2>
          <h3>{detailResults.genres.map(((v) => { return <>{v.name} | &nbsp;</> }))}
            <span>{detailResults.runtime}分</span>
          </h3>
          <p>{detailResults.overview}</p> 
        </div>
      </Content>

      
    </>
  );
};

PosterSection.propTypes = {
  results: PropTypes.object.isRequired,
  movieId: PropTypes.number.isRequired,
};

export default PosterSection;
