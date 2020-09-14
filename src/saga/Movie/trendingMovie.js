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
    let randomMovieID = results[Math.floor(Math.random() * results.length)].id;
    // 코드 수정해줘야한다. 여기에서 각각의 랜덤으로 인해 정보가 다 다다르다
    let randomMovieTitle = results[Math.floor(Math.random() * results.length)].title;
    let randomMovieBackdrop_path = results[Math.floor(Math.random() * results.length)].backdrop_path;
    let randomMovieVote_average = results[Math.floor(Math.random() * results.length)].vote_average;
    yield put({
      type: TRENDING_MOIVES_SUCCESS,
      results: {
        id : randomMovieID,
        title : randomMovieTitle,
        backdrop_path : randomMovieBackdrop_path,
        vote_average : randomMovieVote_average,
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
