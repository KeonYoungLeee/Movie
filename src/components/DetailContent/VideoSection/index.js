import React from 'react';
import PropTypes from 'prop-types';


const VideoSection = ({ results, params }) => {

  return (
    <>
      {
        results.results  && results.results.map((v) => {
          console.log(v);
          <img src={`https://www.youtube.com/watch?${v.key}=SUXWAEX2jlg`} />
        })
      }
    </>
  );
};

VideoSection.propTypes = {
  results: PropTypes.object.isRequired,
  params: PropTypes.object.isRequired,
};

export default VideoSection;
