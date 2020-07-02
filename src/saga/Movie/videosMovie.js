import axios from 'axios';
import { all, fork, put, takeLatest, call } from 'redux-saga/effects';
import { API_KEY } from './../index';
import {
  VIDEOS_MOVIES_REQUEST,
  VIDEOS_MOVIES_SUCCESS,
  VIDEOS_MOVIES_FAILURE } from '../../reducer/Movie/videosMovie';


function videosMoviesAPI(movieId) {
  return axios.get(`/movie/${movieId}/videos?api_key=${API_KEY}`);
}

function* videosMovies(action) {
  try {
    const result = yield call(videosMoviesAPI, action.movieId);
    yield put({
      type: VIDEOS_MOVIES_SUCCESS,
      videosdata: result.data,
    });
  } catch (error) {
    console.error(error);
    yield put({
      type: VIDEOS_MOVIES_FAILURE,
      error,
    });
  }
}

function* watchVideosMovies() {
  yield takeLatest(VIDEOS_MOVIES_REQUEST, videosMovies);
}

export default function* videosMovieSaga() {
  yield all([
    fork(watchVideosMovies),
  ]);
}
