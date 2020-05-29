import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './style';
import PostContent from '../../components/PostContent';

const IndexPost = ({ imgSrc, title }) => {
  return (
    <Wrapper>
      <img src={`https://image.tmdb.org/t/p/original/${imgSrc}`} />
      <PostContent title={title} />
    </Wrapper>
  );
};

IndexPost.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default IndexPost;
