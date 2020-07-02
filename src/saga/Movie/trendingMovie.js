import axios from 'axios';
import { all, fork, put, takeLatest, call } from 'redux-saga/effects';
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
    yield put({
      type: TRENDING_MOIVES_SUCCESS,
      data: result.data.results,
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
