import { USER_SIGN_UP } from './authActions';

export default function authReducer(state = {}, action) {
  switch (action.type) {
    case USER_SIGN_UP:
      return { ...state, ...action.payload.data }
    default:
      return state;
  }
}