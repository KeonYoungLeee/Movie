import axios from 'axios';
import { all, fork, put, takeLatest, call } from 'redux-saga/effects';
import { API_KEY, LANGUAGE } from './../index';
import { 
  IMAGES_MOVIES_REQUEST, 
  IMAGES_MOVIES_SUCCESS, 
  IMAGES_MOVIES_FAILURE } from '../../reducer/Movie/imagesMovie';

function imageMoviesAPI(movieId) {
  return axios.get(`/movie/${movieId}/images?api_key=${API_KEY}`);
}

function* imageMovies(action) {
  try {
    const result = yield call(imageMoviesAPI, action.movieId);
    yield put({
      type: IMAGES_MOVIES_SUCCESS,
      imagedata: result.data,
    });
  } catch (error) {
    console.error(error);
    yield put({
      type: IMAGES_MOVIES_FAILURE,
      error,
    });
  }
}

function* watchimageMovies() {
  yield takeLatest(IMAGES_MOVIES_REQUEST, imageMovies);
}

export default function* imageMovieSaga() {
  yield all([
    fork(watchimageMovies)
  ]);
}
