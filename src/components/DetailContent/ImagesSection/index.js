import React from 'react';
import PropTypes from 'prop-types';
import Swiper from 'react-id-swiper';

import { Wrapper, Content } from './style';
import { useSelector } from 'react-redux';

const ImagesSection = ({ params }) => {

  const { backdrops } = useSelector(state => state.movieData.Images);

  return (
    <>
      <Wrapper>
        <h2>写真</h2>
        <Swiper {...params}>
          {
            backdrops.map((items) => {
              return (
                <div>
                  <Content>
                    { items.file_path === null
                      ? <>
                          <img src="https://www.freeiconspng.com/uploads/no-image-icon-0.png" width="550" alt="Icon Photos No" />
                        </>
                      : <>
                          <img src={`https://image.tmdb.org/t/p/w300/${items.file_path}`} />
                        </>
                    }
                  </Content>
                </div>
              );
            })
          }
        </Swiper>
      </Wrapper>
    </>
  );
};

ImagesSection.propTypes = {
  params: PropTypes.object.isRequired,
};

export default ImagesSection;
