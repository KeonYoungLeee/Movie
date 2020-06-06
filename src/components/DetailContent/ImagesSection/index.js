import React from 'react';
import PropTypes from 'prop-types';
import Swiper from 'react-id-swiper';

import { Wrapper, Content } from './style';

const ImagesSection = ({ results, params }) => {
  return (
    <>
      <Wrapper>
          <h2>写真</h2>
          <Swiper {...params}>
              {
                results && results.backdrops.length > 0 && results.backdrops.map((v) => {
                  return (
                    <div>
                      <Content>
                      {v.file_path === null
                        ? 
                          <>
                            <img src="https://www.freeiconspng.com/uploads/no-image-icon-0.png" width="550" alt="Icon Photos No" />
                          </>
                        : <>
                            <img src={`https://image.tmdb.org/t/p/w300/${v.file_path}`} />
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
  results: PropTypes.object.isRequired,
  params: PropTypes.object.isRequired,
};

export default ImagesSection;
