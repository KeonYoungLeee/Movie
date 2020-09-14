import axios from 'axios';
import { all, fork, put, takeLatest, call, delay } from 'redux-saga/effects';
import { API_KEY, LANGUAGE } from './../index';
import {
  TRENDING_MOIVES_REQUEST,
  TRENDING_MOIVES_SUCCESS,
  TRENDING_MOIVES_FAILURE } from '../../reducer/Movie/trendingMovie';


function trendingMoivesAPI() {
  return axios.get(`/trending/movie/week?api_key=${API_KEY}&${LANGUAGE}`);
}

function* trendingMoives() {
  try {
    const result = yield call(trendingMoivesAPI);
    const { results } = result.data;
    const randomIdLength = parseInt(results.length, 10);
    const randomIdIndex = Math.floor(Math.random() * randomIdLength);
    const movieId = results[`${randomIdIndex}`].id; 
    const movieBackdroppath = results[`${randomIdIndex}`].backdrop_path;	
    const movieTitle = results[`${randomIdIndex}`].title;	
    const movieVoteaverage = results[`${randomIdIndex}`].vote_average;
    yield put({
      type: TRENDING_MOIVES_SUCCESS,
      results: {
        id : movieId,
        title : movieTitle,
        backdrop_path : movieBackdroppath,
        vote_average : movieVoteaverage,
      },
    });
  } catch (error) {
    console.error(error);
    yield put({
      type: TRENDING_MOIVES_FAILURE,
      error,
    });
  }
}

function* watchTrendingMoives() {
  yield takeLatest(TRENDING_MOIVES_REQUEST, trendingMoives)
}

export default function* trendingMoiveSaga() {
  yield all([
    fork(watchTrendingMoives),
  ]);
}
