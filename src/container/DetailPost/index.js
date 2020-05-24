import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, BackGround, BackgroundImageSection, MediaQueryDetail } from './style';
import DetailContent from '../../components/DetailContent';

const DetailPost = ({ detailResults, imageResults, creditsResults }) => {
  return (
    <BackGround>
      <Wrapper>
        <BackgroundImageSection 
          backdropPath={detailResults.backdrop_path}/>
      </Wrapper>
      {/* <Wrapper> */}
      <MediaQueryDetail>
        <DetailContent 
          detailResults={detailResults} 
          imageResults={imageResults} 
          creditsResults={creditsResults} />
      {/* </Wrapper> */}
      </MediaQueryDetail>
    </BackGround>
  );
};

DetailPost.propTypes = {
  detailResults: PropTypes.object.isRequired,
  imageResults: PropTypes.object.isRequired,
  creditsResults: PropTypes.object.isRequired,
};

export default DetailPost;