import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
} from '../actions/types';

const initialState = {
  token: null,
  loading: false,
  error: null,
};
// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        token: action.payload.token,
      };
    case USER_LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        token: null,
        error: action.payload,
      };
    default:
      return state;
  }
};
