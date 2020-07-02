import { all, call } from 'redux-saga/effects';

import creditsMovieSaga from './creditsMovie';
import currentMovieSaga from './currentMovie';
import detailMovieSaga from './detailMovie';
import imagesMovieSaga from './imagesMovie';
import popularMovieSaga from './popularMovie';
import trendingMovieSaga from './trendingMovie';
import upcomingMovieSaga from './upcomingMovie';
import videosMovieSaga from './videosMovie';

export default function* movieSaga() {
  yield all([
    call(creditsMovieSaga),
    call(currentMovieSaga),
    call(detailMovieSaga),
    call(imagesMovieSaga),
    call(popularMovieSaga),
    call(trendingMovieSaga),
    call(upcomingMovieSaga),
    call(videosMovieSaga),
  ]);
};
