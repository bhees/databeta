import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function userReducer(state = initialState.user, action) {
  switch(action.type) {
    case types.AUTH_USER_SUCCESS:
      return {...state, logStatus: true, access_token: action.user, authStatus: "Success" };
    case types.AUTH_USER_FAILURE:
      return {...state, logStatus: false, access_token: null, authStatus: "Fail" };
    default:
      return state;
  }
}


