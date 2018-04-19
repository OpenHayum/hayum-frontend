import { signUpRequest } from './authApi';
import { wrapActionWithGlobalErrorMeta } from 'Utils';

export const USER_SIGN_UP = "USER_SIGN_UP";

export const signUpUser = body => wrapActionWithGlobalErrorMeta({
  type: USER_SIGN_UP,
  payload: signUpRequest(body),
});
