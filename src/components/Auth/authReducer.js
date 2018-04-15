import { USER_SIGN_UP } from './authActions';

export default function authReducer(state = {}, action) {
  switch (action.type) {
    case USER_SIGN_UP:
      if (action.payload && action.payload.data) {
        return { ...state, ...action.payload.data };
      }
      return state;
    default:
      return state;
  }
}