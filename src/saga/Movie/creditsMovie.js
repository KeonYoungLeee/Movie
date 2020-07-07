import axios from 'axios';
import { all, fork, put, takeLatest, call } from 'redux-saga/effects';
import { API_KEY, LANGUAGE } from './../index';
import { 
  CREDITS_MOVIES_REQUEST, 
  CREDITS_MOVIES_SUCCESS, 
  CREDITS_MOVIES_FAILURE } from '../../reducer/movie/creditsMovie';

function creditsMoviesAPI(movieId) {
  return axios.get(`/movie/${movieId}/credits?api_key=${API_KEY}&${LANGUAGE}`);
}

function* creditsMovies(action) {
  try {
    const result = yield call(creditsMoviesAPI, action.movieId);
    yield put({
      type: CREDITS_MOVIES_SUCCESS,
      creditsdata: result.data,
    });
  } catch (error) {
    console.error(error);
    yield put({
      type: CREDITS_MOVIES_FAILURE,
      error,
    });
  }
}

function* watchcreditsMovies() {
  yield takeLatest(CREDITS_MOVIES_REQUEST, creditsMovies);
}

export default function* creditsMovieSaga() {
  yield all([
    fork(watchcreditsMovies),
  ]);
}
