import { signUpRequest } from './authApi';

export const USER_SIGN_UP = "USER_SIGN_UP";

export const signUpUser = (body) => ({
  type: USER_SIGN_UP,
  promise: signUpRequest(body)
});
