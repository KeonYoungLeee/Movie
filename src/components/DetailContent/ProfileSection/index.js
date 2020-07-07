import React from 'react';
import PropTypes from 'prop-types';
import Swiper from 'react-id-swiper';

import { Wrapper, Content, Name } from './style';
import { useSelector } from 'react-redux';

const ProfileSection = ({ params }) => {

  const { casts } = useSelector(state => state.movieData.Credits);

  return (
    <>
      <Wrapper>
        <h2>俳優</h2>
        <Swiper {...params}>
          {
            casts.map((items) => {
              return (
                <div>
                  <Content>
                    { items.profile_path === null
                      ? <>
                          <img src="https://www.freeiconspng.com/uploads/no-image-icon-0.png" width="550" alt="Icon Photos No" />
                          <Name>{items.name}</Name>
                        </>
                      : <>
                          <img src={`https://image.tmdb.org/t/p/w300/${items.profile_path}`} />
                          <Name>{items.name}</Name>
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
  params: PropTypes.object.isRequired,
};

export default ProfileSection;
