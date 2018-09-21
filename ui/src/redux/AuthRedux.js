import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/**
 * Actions
 * 
 * @property loginRequest
 * @property loginSuccess 
 */
const { Types, Creators } = createActions({
  loginRequest:     ['email', 'passsord'],
  loginSuccess:     ['isAuthenticated']
});

export const AuthTypes = Types;
export default Creators;

/**
 * State
 * 
 * @property isAuthenticated
 * @property fetching 
 * @property error 
 */
export const INITIAL_STATE = Immutable({
  isAuthenticated:  null,
  fetching:         null,
  error:            null
});

/**
 * Selectors
 * 
 * 
 */
export const AuthSelectors = {
  isAuthenticated: (state) => {
    return state.auth.isAuthenticated;
  }
};

export const request = (state) => state.merge({ fetching: true });
export const success = (state) => state.merge({ fetching: false });

/**
 * Reducers
 * 
 * 
 */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOGIN_REQUEST]: request,
  [Types.LOGIN_SUCCESS]: success
});
