import React from 'react';
import PropTypes from 'prop-types';
import { MovieLayoutList, ResponsiveButton } from './style';

const MovieButtonList = ({
  now,
  onChangeNow,
  onClickNow,
  current,
  onChangeCurrent,
  onClickCurrent,
  popular,
  onChangePopular,
  onClickPopular }) => {

  return (
    <>
      <MovieLayoutList>
        { now 
          ? <ResponsiveButton>上映中</ResponsiveButton>
          : <button onClick={onClickNow} value={now} onChange={onChangeNow} >上映中</button>
        }
        {
          current
          ? <ResponsiveButton>上映予定</ResponsiveButton>
          : <button onClick={onClickCurrent} value={current} onChange={onChangeCurrent} >上映予定</button>
        }
        {
          popular
          ? <ResponsiveButton>人気</ResponsiveButton>
          : <button onClick={onClickPopular} value={popular} onChange={onChangePopular} >人気</button>
        }
      </MovieLayoutList>
    </>
  );
};

MovieButtonList.propTypes = {
  now: PropTypes.bool.isRequired,
  onChangeNow: PropTypes.func.isRequired,
  onClickNow: PropTypes.func.isRequired,
  current: PropTypes.bool.isRequired,
  onChangeCurrent: PropTypes.func.isRequired,
  onClickCurrent: PropTypes.func.isRequired,
  popular: PropTypes.bool.isRequired,
  onChangePopular: PropTypes.func.isRequired,
  onClickPopular: PropTypes.func.isRequired,
};

export default MovieButtonList;
