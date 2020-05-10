import { all, fork, put, takeLatest, call } from 'redux-saga/effects';
import { 
  CURRENT_MOVIES_SUCCESS, 
  CURRENT_MOVIES_FAILURE, 
  CURRENT_MOVIES_REQUEST, 
  TRENDING_MOIVES_SUCCESS, 
  TRENDING_MOIVES_FAILURE, 
  TRENDING_MOIVES_REQUEST, 
  UPCOMPING_MOIVES_FAILURE, 
  UPCOMPING_MOIVES_SUCCESS, 
  UPCOMPING_MOIVES_REQUEST, 
  POPULAR_MOIVES_SUCCESS,
  POPULAR_MOIVES_FAILURE,
  POPULAR_MOIVES_REQUEST,
  DETAIL_MOVIES_FAILURE,
  DETAIL_MOVIES_REQUEST,
  DETAIL_MOVIES_SUCCESS
} from '../reducer/movie';
import axios from 'axios';
import { API_KEY, LANGUAGE } from './index';

function trendingMoivesAPI () {
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
      error: error,
    });
  }
}

function* watchTrendingMoives() {
  yield takeLatest(TRENDING_MOIVES_REQUEST, trendingMoives)
}

function currentMoviesAPI () {
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
      error: error,
    });
  }
}

function* watchCurrentMovies() {
  yield takeLatest(CURRENT_MOVIES_REQUEST, currentMovies)
}

function upcomingMoivesAPI () {
  return axios.get(`/movie/upcoming?api_key=${API_KEY}&${LANGUAGE}`);
}

function* upcomingMoives() {
  try {
    const result = yield call(upcomingMoivesAPI);
    yield put({
      type: UPCOMPING_MOIVES_SUCCESS,
      upCompingdata: result.data.results,
    });
  } catch (error) {
    console.error(error);
    yield put({
      type: UPCOMPING_MOIVES_FAILURE,
      error: error,
    });
  }
}

function* watchUpcomingMoives() {
  yield takeLatest(UPCOMPING_MOIVES_REQUEST, upcomingMoives)
}

function popularMoviesAPI () {
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
      error: error,
    });
  }
}

function* watchPopularMovies() {
  yield takeLatest(POPULAR_MOIVES_REQUEST, popularMovies)
}

function detailMoviesAPI (movieId) {
  console.log(movieId);
  // return axios.get(`/movie/${movieId}?api_key=${API_KEY}&${LANGUAGE}`);
  return axios.get(`/movie/${movieId}?api_key=${API_KEY}`);
}

function* detailMovies(action) {
  try {
    console.log(action);
    const result = yield call(detailMoviesAPI, action.movieId);
    console.log(result);
    yield put({
      type: DETAIL_MOVIES_SUCCESS,
      detaildata: result.data,
    });
  } catch (error) {
    console.error(error);
    yield put({
      type: DETAIL_MOVIES_FAILURE,
      error: error,
    });
  }
}

function* watchDetailMovies() {
  yield takeLatest(DETAIL_MOVIES_REQUEST, detailMovies)
}

export default function* movieSaga() {
  yield all([
    fork(watchCurrentMovies),
    fork(watchTrendingMoives),
    fork(watchUpcomingMoives),
    fork(watchPopularMovies),
    fork(watchDetailMovies),
  ]);
}

