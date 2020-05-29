import React from 'react';
import PropTypes from 'prop-types';
import Content from './style';

const PosterSection = ({ results }) => {
  return (
    <>
      <Content>
        <img src={`https://image.tmdb.org/t/p/original/${results.poster_path}`} />
        <div>
          <h2>{results.title}
            <span>{`(${results.release_date.slice(0,4)})`}</span>
          </h2>
          <h3>{results.genres.map(((v) => { return <>{v.name} | &nbsp;</> }))}<span>{results.runtime}分</span></h3>
          <p>{results.overview}</p>
        </div>
      </Content>
    </>
  );
};

PosterSection.propTypes = {
  results: PropTypes.object.isRequired,
};

export default PosterSection;
