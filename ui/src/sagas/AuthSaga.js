import { put } from 'redux-saga/effects';
import AuthActions from '../redux/AuthRedux';

/**
 * Login
 * 
 * Yield login result for the auth saga
 * @see https://redux-saga.js.org/docs/introduction/BeginnerTutorial.html
 * 
 * @param ...
 */
export function* login () {
  try {

    // ...
    // if 200 OK -> succeed, else fail

    // Default to success for now
    yield put(AuthActions.loginSuccess(true));
    console.log('success');
  } catch (err) {
    console.error(err);
  }
}

/**
 * Some other generator
 * 
 * 
 */
