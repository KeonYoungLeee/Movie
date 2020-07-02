import axios from 'axios';
import { all, fork, put, takeLatest, call } from 'redux-saga/effects';
import { API_KEY, LANGUAGE } from './../index';
import { 
  DETAIL_MOVIES_REQUEST, 
  DETAIL_MOVIES_FAILURE, 
  DETAIL_MOVIES_SUCCESS } from '../../reducer/movie/detailMovie';

function detailMoviesAPI(movieId) {
  // return axios.get(`/movie/${movieId}?api_key=${API_KEY}&${LANGUAGE}`);
  return axios.get(`/movie/${movieId}?api_key=${API_KEY}`);
}

function* detailMovies(action) {
  try {
    const result = yield call(detailMoviesAPI, action.movieId);
    yield put({
      type: DETAIL_MOVIES_SUCCESS,
      detaildata: result.data,
    });
  } catch (error) {
    console.error(error);
    yield put({
      type: DETAIL_MOVIES_FAILURE,
      error,
    });
  }
}

function* watchDetailMovies() {
  yield takeLatest(DETAIL_MOVIES_REQUEST, detailMovies);
}

export default function* detailMovieSaga() {
  yield all([
    fork(watchDetailMovies),
  ]);
}
