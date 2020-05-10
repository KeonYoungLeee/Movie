import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TRENDING_MOIVES_REQUEST } from '../reducer/movie';



const Home = () => {
  const { 
    results, 
    movieBackdroppath, 
    movieTitle,
    movieVoteaverage } = useSelector(state => state.movie);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: TRENDING_MOIVES_REQUEST,
    });
  }, []);

  return (
    <>
      <div style={{ display: 'flex', flexWrap : 'wrap' }}>
        <div style={{ width: '100%', height: '100%', backgroundColor: '#141414', }}>
          <h2 style={{ position:'absolute', zIndex:'1', left:'auto', top:'12%', left:'50%', transform:'translate(-50%, -50%)', fontSize: '4.5em', color:'white'}}>Week Movie</h2>
          {/* <img src={`https://image.tmdb.org/t/p/w300/${moviePosterpath}`} /> */}
          <img src={`https://image.tmdb.org/t/p/original/${movieBackdroppath}`} 
            style={{ width: '100%', height: '100%', position:'relative', opacity: '0.88' }} />
          <h3 style={{ width: '100%', display:'flex', justifyContent: 'center', position: 'absolute', zIndex: '1', top: '71%', transform: 'translate(0%, -50%)', fontSize: '2.2rem', color: 'white'  }}>{movieTitle}</h3>
          <h4 style={{ position:'absolute', zIndex:'1', left:'50%',  top: "81%", transform:'translate(-50%, -50%)', fontSize: '2rem', color:'yellow'}}>
            grade : {movieVoteaverage}
          </h4>
        </div>
      </div>
    </>
  );
};

export default Home;
