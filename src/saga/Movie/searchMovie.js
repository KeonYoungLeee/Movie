import axios from 'axios';
import { all, fork, put, takeLatest, call } from 'redux-saga/effects';
import { API_KEY, LANGUAGE } from './../index';
import { 
  SEARCH_MOIVES_SUCCESS, 
  SEARCH_MOIVES_FAILURE, 
  SEARCH_MOIVES_REQUEST 
} from '../../reducer/Movie/searchMovie';


function searchMoviesAPI(title) {
  console.log(title);
  return axios.get(`/search/movie?api_key=${API_KEY}&${LANGUAGE}`, {
    params: { query: encodeURIComponent(title) }
  });
}

function* searchMovies(action) {
  try {
    const result = yield call(searchMoviesAPI, action.title);
    yield put({
      type: SEARCH_MOIVES_SUCCESS,
      searchdata: result.data.results,
    });
  } catch (error) {
    console.error(error);
    yield put({
      type: SEARCH_MOIVES_FAILURE,
      error,
    });
  }
}

function* watchSearchMovies() {
  yield takeLatest(SEARCH_MOIVES_REQUEST, searchMovies);
}

export default function* searchMovieSaga() {
  yield all([
    fork(watchSearchMovies),
  ]);
}
