import React from 'react';
import PropTypes from 'prop-types';
import ContentFont from './style';

const PostContent = ({ title }) => {
  return (
    <ContentFont>
      <h2>今日の映画</h2>
      <h3>{title}</h3>
    </ContentFont>
  );
};

PostContent.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PostContent;
