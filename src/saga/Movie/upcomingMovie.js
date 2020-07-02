import axios from 'axios';
import { all, fork, put, takeLatest, call } from 'redux-saga/effects';
import { API_KEY, LANGUAGE } from './../index';
import {
  UPCOMPING_MOIVES_REQUEST,
  UPCOMPING_MOIVES_SUCCESS,
  UPCOMPING_MOIVES_FAILURE } from '../../reducer/Movie/upcomingMovie';

function upcomingMoivesAPI() {
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
      error,
    });
  }
}

function* watchUpcomingMoives() {
  yield takeLatest(UPCOMPING_MOIVES_REQUEST, upcomingMoives);
}

export default function* upcomingMoiveSaga() {
  yield all([
    fork(watchUpcomingMoives),
  ]);
}
