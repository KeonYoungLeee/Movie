import axios from 'axios';
import { all, fork, put, takeLatest, call } from 'redux-saga/effects';
import { API_KEY, LANGUAGE } from './../index';
import { 
  CURRENT_MOVIES_REQUEST, 
  CURRENT_MOVIES_SUCCESS, 
  CURRENT_MOVIES_FAILURE } from '../../reducer/movie/currentMovie';

function currentMoviesAPI() {
  return axios.get(`/movie/now_playing?api_key=${API_KEY}&${LANGUAGE}`);
}

function* currentMovies() {
  try {
    const result = yield call(currentMoviesAPI);
    yield put({
      type: CURRENT_MOVIES_SUCCESS,
      currentData: result.data.results,
    });
  } catch (error) {
    console.error(error);
    yield put({
      type: CURRENT_MOVIES_FAILURE,
      error,
    });
  }
}

function* watchCurrentMovies() {
  yield takeLatest(CURRENT_MOVIES_REQUEST, currentMovies);
}


export default function* currentMovieSaga() {
  yield all([
    fork(watchCurrentMovies),
  ]);
}
