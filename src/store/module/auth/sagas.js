import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '../../../services/api';
import history from '../../../services/history';

import { signInSuccess } from './actions';

export function* singIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, 'sessions', {
      email,
      password,
    });

    const { token, user } = response.data;

    yield put(signInSuccess(token, user));

    history.pushState('/deliveries');
  } catch (error) {
    console.tron.log(error);
  }
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', singIn)]);
