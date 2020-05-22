import React from 'react';
import PropTypes from 'prop-types';
import { BackgroundImageSection, Wrapper } from './style';
import DetailContent from '../../components/DetailContent';

const DetailPost = ({ detailResults }) => {
  return (
    <div>
      <Wrapper>
        <BackgroundImageSection 
          backdropPath={detailResults.backdrop_path}/>
      </Wrapper>
      <Wrapper>
        <DetailContent 
          detailResults={detailResults} />
      </Wrapper>
    </div>
  );
};

DetailPost.propTypes = {
  detailResults: PropTypes.object.isRequired,
};

export default DetailPost;