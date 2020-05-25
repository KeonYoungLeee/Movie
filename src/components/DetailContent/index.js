import React from 'react';
import PropTypes from 'prop-types';
import { PosterSection, ProfileSection } from './style';

const DetailContent = ({ detailResults, imageResults, creditsResults }) => {
  

  const character = creditsResults.cast.map(v => v.character);

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
        <h2>俳優</h2>
        <div>
          <div>
            {
              creditsResults.map((v) => {
                return (
                  <img src={`https://image.tmdb.org/t/p/w300/${propfilePath}`} />
                );
              })
            }
            
          </div>
            <h3>{character}</h3>
            {
              creditsResults  && creditsResults.cast.map((v) => {
                return (
                  <>
                    {v.profile_path === null 
                      ? <p>image x</p>
                      : <img src={`https://image.tmdb.org/t/p/w300/${v.profile_path}`} />
                    }
                  </>
                );
              })
            }
        </div>
      </ProfileSection>
    </div>
  );
};

DetailContent.propTypes = {
  detailResults: PropTypes.object.isRequired,
  imageResults: PropTypes.object.isRequired,
};

export default DetailContent;