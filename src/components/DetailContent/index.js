import React from 'react';
import PropTypes from 'prop-types';
import { PosterSection } from './style';

const DetailContent = ({ detailResults }) => {
  return (
    <PosterSection>
      <img src={`https://image.tmdb.org/t/p/original/${detailResults.poster_path}`} />
      <div>
        <h2>{detailResults.title} <span>{`(${detailResults.release_date.slice(0,4)})`}</span></h2>
        <h3>{detailResults.genres.map(((v) => { return <>{v.name} | &nbsp;</> }))}<span>{detailResults.runtime}分</span></h3>
        <p>{detailResults.overview}</p>
      </div>
    </PosterSection>
  );
};

DetailContent.propTypes = {
  detailResults: PropTypes.object.isRequired,
};

export default DetailContent;