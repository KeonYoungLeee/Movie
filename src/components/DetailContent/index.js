import React from 'react';
import PropTypes from 'prop-types';
import Swiper from 'react-id-swiper';
import { PosterSection, ProfileSection, PropfileWrapper, PropfileContent, PropfileName, PropfileDisplay } from './style';

const DetailContent = ({ detailResults, imageResults, creditsResults }) => {
  
  const params = {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      clickable: true
    },
    breakpoints: {
      768: {
        slidesPerView: 5,
      },
      1200: {
        slidesPerView: 6,
      },
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
  };

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
        <PropfileWrapper>
          <h2>俳優</h2>
            <Swiper {...params}>
              {
                creditsResults  && creditsResults.cast.map((v) => {
                  return (
                    <div>
                      <PropfileContent>
                      {v.profile_path === null
                        ? 
                          <>
                            <img src="https://www.freeiconspng.com/uploads/no-image-icon-0.png" width="550" alt="Icon Photos No" />
                            <PropfileName>{v.name}</PropfileName>
                          </>
                        : <>
                            <img src={`https://image.tmdb.org/t/p/w300/${v.profile_path}`} />
                            <PropfileName>{v.name}</PropfileName>
                          </>
                      }
                      </PropfileContent>
                    </div>
                  );
                })
              }
            </Swiper>
        </PropfileWrapper>
      </ProfileSection>
    </div>
  );
};

DetailContent.propTypes = {
  detailResults: PropTypes.object.isRequired,
  imageResults: PropTypes.object.isRequired,
};

export default DetailContent;