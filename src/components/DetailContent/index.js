import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import PosterSection from './PosterSection';
import ProfileSection from './ProfileSection';
import ImagesSection from './ImagesSection';
import VideoSection from './VideoSection';
import Section from './style';

import { useDispatch, useSelector } from 'react-redux';
import { IMAGES_MOVIES_REQUEST } from '../../reducer/Movie/imagesMovie';
import { CREDITS_MOVIES_REQUEST } from '../../reducer/Movie/creditsMovie';
import { VIDEOS_MOVIES_REQUEST } from '../../reducer/Movie/videosMovie';

const DetailContent = ({ movieId, Detail }) => {

  const { Credits, Images, Videos } = useSelector(state => state.movieData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: IMAGES_MOVIES_REQUEST,
      movieId,
    });
    dispatch({
      type: CREDITS_MOVIES_REQUEST,
      movieId,
    });
    dispatch({
      type: VIDEOS_MOVIES_REQUEST,
      movieId,
    });
  }, []);

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
        <PosterSection results={Detail} movieId={movieId} />
      </Section>
      {/* <Section>
        <ProfileSection results={creditsResults} params={params} />
      </Section>
      <Section>
        <ImagesSection results={imageResults} params={params} />
      </Section>
      <Section>
        <VideoSection results={videosResults} params={params} />
      </Section> */}
    </div>
  );
};

DetailContent.propTypes = {
  movieId: PropTypes.number.isRequired,
  Detail: PropTypes.object.isRequired,
};

export default DetailContent;
