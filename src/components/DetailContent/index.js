import React from 'react';
import PropTypes from 'prop-types';
import { PosterSection, ProfileSection } from './style';

const DetailContent = ({ detailResults, imageResults, creditsResults }) => {

  return (
    <div>
      <PosterSection>
        <img src={`https://image.tmdb.org/t/p/original/${detailResults.poster_path}`} />
        <div>
          <h2>{detailResults.title} <span>{`(${detailResults.release_date.slice(0,4)})`}</span></h2>
          <h3>{detailResults.genres.map(((v) => { return <>{v.name} | &nbsp;</> }))}<span>{detailResults.runtime}分</span></h3>
          <p>{detailResults.overview}</p>
        </div>
      </PosterSection>
      <ProfileSection>
        
      </ProfileSection>
    </div>
  );
};

DetailContent.propTypes = {
  detailResults: PropTypes.object.isRequired,
  imageResults: PropTypes.object.isRequired,
};

export default DetailContent;