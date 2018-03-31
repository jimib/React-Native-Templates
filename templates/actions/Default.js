import {
	LOGIN_FAILURE,
} from './Types';

//ADD COMMENTS HERE
export const loginSuccess = data => ({
  type: LOGIN_SUCCESS,
  payload: data
});

//AND ADD COMMENTS HERE TOO
export const loginFailed = data => ({
  type: LOGIN_FAILURE,
  payload: data
});