import React from 'react';
import PropTypes from 'prop-types';

import { useSelector } from 'react-redux';
import { Wrapper } from './style';

const VideoSection = ({ params }) => {
  
  const { datas } = useSelector(state => state.movieData.Videos);

  return (
    <Wrapper>
      <h2>動画</h2>
        {
          datas.map((v) => { 
            return (
              <iframe
                src={`https://www.youtube.com/embed/${v.key}`}
                width="100%"
                height="500"
                frameBorder="3"
              >
              </iframe>
            )
          })
        }
    </Wrapper>
  );
};

VideoSection.propTypes = {
  params: PropTypes.object.isRequired,
};

export default VideoSection;
