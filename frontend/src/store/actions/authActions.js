export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export const loginSuccess = (token, user) => ({
  type: LOGIN_SUCCESS,
  token: token,
  payload: user,
});
