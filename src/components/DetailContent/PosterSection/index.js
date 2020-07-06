import React from 'react';
import Content from './style';

import { useSelector } from 'react-redux';

const PosterSection = ({ }) => {

  const { detailResults, titleLength, genresFeatures } = useSelector(state => state.movieData.Detail);

  return (
    <>
      <Content>
        <img src={`https://image.tmdb.org/t/p/original/${detailResults.poster_path}`} />
        <div>
          <h2>
            { titleLength > 20 ? <>{detailResults.title}<br /></> : <>{detailResults.title}</> }
            <span>&nbsp;{`(${detailResults.release_date})`}</span>
          </h2>
          <h3>
            ジャンル &gt; {genresFeatures.map(v => <>{v}&nbsp;&nbsp;&nbsp;&nbsp;</> )}
            <br ></br><span>上映時間 &gt; {detailResults.runtime}分</span>
          </h3>
          <p>{detailResults.overview}</p> 
        </div>
      </Content>
    </>
  );
};

export default PosterSection;
