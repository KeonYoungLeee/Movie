import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Wrapper } from './style';


const VideoSection = ({ results, params }) => {

  return (
    <Wrapper>
      <h2>動画</h2>
      
    </Wrapper>
  );
};

VideoSection.propTypes = {
  results: PropTypes.object.isRequired,
  params: PropTypes.object.isRequired,
};

export default VideoSection;
