import React from 'react';
import PropTypes from 'prop-types';
import Swiper from 'react-id-swiper';
import { Wrapper, Content, Name } from './style';


const ProfileSection = ({ results, params }) => {
  return (
    <>
      <Wrapper>
        <h2>俳優</h2>
          <Swiper {...params}>
            {
              results  && results.cast.map((v) => {
                return (
                  <div>
                    <Content>
                    {v.profile_path === null
                      ? 
                        <>
                          <img src="https://www.freeiconspng.com/uploads/no-image-icon-0.png" width="550" alt="Icon Photos No" />
                          <Name>{v.name}</Name>
                        </>
                      : <>
                          <img src={`https://image.tmdb.org/t/p/w300/${v.profile_path}`} />
                          <Name>{v.name}</Name>
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

ProfileSection.propTypes = {
  results: PropTypes.object.isRequired,
  params: PropTypes.object.isRequired,
};

export default ProfileSection;
