import { all, call } from 'redux-saga/effects';
import axios from 'axios';
import movieAPI from './Movie/index';

export const API_KEY = '06221289d9b66d02c4572c58894a7e97';
export const LANGUAGE = 'language=ja-jp';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export default function* rootSaga() {
  yield all([
    call(movieAPI),
  ]);
}
