import React from 'react';
import PropTypes from 'prop-types';

import PosterSection from './PosterSection';
import ProfileSection from './ProfileSection';
import ImagesSection from './ImagesSection';
import VideoSection from './VideoSection';
import Section from './style';

const DetailContent = ({ detailResults, creditsResults, imageResults, videosResults }) => {

  const params = {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 5,
      },
      1200: {
        slidesPerView: 6,
      },
    },
  };

  return (
    <div>
      <Section>
        <PosterSection results={detailResults} />
      </Section>
      <Section>
        <ProfileSection results={creditsResults} params={params} />
      </Section>
      <Section>
        <ImagesSection results={imageResults} params={params} />
      </Section>
      <Section>
        <VideoSection results={videosResults} params={params} />
      </Section>
    </div>
  );
};

DetailContent.propTypes = {
  detailResults: PropTypes.object.isRequired,
  imageResults: PropTypes.object.isRequired,
  creditsResults: PropTypes.object.isRequired,
  videosResults: PropTypes.object.isRequired,
};

export default DetailContent;