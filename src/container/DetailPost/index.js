import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import DetailContent from '../../components/DetailContent';

import { useDispatch, useSelector } from 'react-redux';
import { Wrapper, ContainerBackGround, BackgroundImageSection, Content } from './style';
import { DETAIL_MOVIES_REQUEST } from '../../reducer/movie/detailMovie';

const DetailPost = ({ movieId }) => {
  console.log(`DetailPost -> ${movieId}`);
  
  const dispatch = useDispatch();
  const { detailResults } = useSelector(state => state.movieData.Detail);

  useEffect(() => {
    dispatch({
      type: DETAIL_MOVIES_REQUEST,
      movieId,
    });
  }, [ ]);
  
  return (
    <>
      <ContainerBackGround>
        <Wrapper>
          <BackgroundImageSection backdropPath={detailResults.backdrop_path} />
        </Wrapper>
        <Content>
          <DetailContent movieId={movieId} Detail={detailResults} />
        </Content>
      </ContainerBackGround>
    </>
  );
};

DetailPost.propTypes = {
  movieId: PropTypes.number.isRequired,
};

export default DetailPost;