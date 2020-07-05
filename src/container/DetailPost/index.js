import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import DetailContent from '../../components/DetailContent';

import { useDispatch, useSelector } from 'react-redux';
import { Wrapper, BackGround, BackgroundImageSection, WrapperDetailContent } from './style';
import { DETAIL_MOVIES_REQUEST } from '../../reducer/movie/detailMovie';

const DetailPost = ({ movieId }) => {
  
  const { Detail } = useSelector(state => state.movieData);
  const { isLoading, isLoaded } = useSelector(state => state.movieData.Detail);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: DETAIL_MOVIES_REQUEST,
      movieId,
    });
  }, [ ]);
  
  return (
    <>
      {
        <BackGround>
          <Wrapper>
            {
              Detail && Detail.detailResults && Detail.detailResults.backdrop_path ? 
              <BackgroundImageSection 
                backdropPath={Detail.detailResults.backdrop_path}/>
              : <div>loadingloadingloadingloadingloadingloadingloading</div>
            }
            </Wrapper>
            <WrapperDetailContent>
              <DetailContent movieId={movieId} Detail={Detail} />
            </WrapperDetailContent>
          </BackGround>
        // : <div>Loading...</div>
      }
    </>
    
  );
};

DetailPost.propTypes = {
  movieId: PropTypes.number.isRequired,
};

export default DetailPost;