import axios from 'axios';
import { all, fork, put, takeLatest, call } from 'redux-saga/effects';
import { API_KEY } from './../index';
import { 
  POPULAR_MOIVES_REQUEST, 
  POPULAR_MOIVES_SUCCESS, 
  POPULAR_MOIVES_FAILURE } from '../../reducer/Movie/popularMovie';

function popularMoviesAPI() {
  return axios.get(`/movie/popular?api_key=${API_KEY}&${LANGUAGE}`);
}

function* popularMovies() {
  try {
    const result = yield call(popularMoviesAPI);
    yield put({
      type: POPULAR_MOIVES_SUCCESS,
      populardata: result.data.results,
    });
  } catch (error) {
    console.error(error);
    yield put({
      type: POPULAR_MOIVES_FAILURE,
      error,
    });
  }
}

function* watchPopularMovies() {
  yield takeLatest(POPULAR_MOIVES_REQUEST, popularMovies);
}

export default function* popularMovieSaga() {
  yield all([
    fork(watchPopularMovies),
  ]);
}
