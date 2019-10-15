import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import jsonHeader from '../utils/setContentTypeJson';
import * as API from '../api/paths';

import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS
} from './types';

// Load User
export const loadUser = () => async dispatch => {
  // load token into global headers
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get(API.AUTH);
    dispatch({
      type: USER_LOADED,
      payload: res.data
    });
  } catch (error) {
    dispatch({ type: AUTH_ERROR });
  }
};

// Register User
export const register = formData => async dispatch => {
  try {
    const res = await axios.post(API.USERS, formData, jsonHeader);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data // token
    });
    loadUser();
  } catch (error) {
    dispatch({
      type: REGISTER_FAIL,
      payload: error.response.data.msg
    });
  }
};

// Login User
export const login = formData => async dispatch => {
  try {
    const res = await axios.post(API.AUTH, formData, jsonHeader);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data // token
    });
    loadUser();
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
      payload: error.response.data.msg
    });
  }
};

// Logout
export const logout = () => {
  return {
    type: LOGOUT
  };
};

// Clear Errors
export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  };
};
