import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
} from './types';
import axios from 'axios';

export const login = (formData) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const res = await axios.post('/api/v1/auth/login', formData, config);

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: res.data.token,
    });

    localStorage.setItem('token', res.data.token);
  } catch (error) {
    console.error(error);

    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
