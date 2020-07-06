import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import { Content } from './style';

const PostContent = ({ title, id }) => {
  return (
    <Content>
      <h2>今日の映画</h2>
      <h3>
        {title}
        <Link 
          href={{ pathname: '/detail', query: { movieId: parseInt(id, 10) } }} 
          as={ `/detail/${parseInt(id, 10)}` }
        >
          <button>見に行く</button>
        </Link>
      </h3>
    </Content>
  );
};

PostContent.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default PostContent;
