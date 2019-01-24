import axios from "axios";

import {
  LOG_IN,
  SIGN_UP,
  LOG_OUT,
  AUTH_LOADING,
  ERROR
} from "../actions/types";

export const signUp = (name, email, password) => dispatch => {
  axios
    .post(
      "/users/register",
      JSON.stringify({
        name: name,
        email: email,
        password: password
      }),
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    )
    .then(res => {
      dispatch({
        type: LOG_IN
      });
    })
    .catch(err => {
      dispatch({
        type: ERROR
      });
    });
  return {
    type: SIGN_UP
  };
};

export const logIn = (email, password) => dispatch => {
  axios
    .post(
      "/users/auth",
      JSON.stringify({
        email: email,
        password: password
      }),
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    )
    .then(res => {
      dispatch({
        type: LOG_IN,
        payload: res.data.token
      });
    })
    .catch(err => {
      dispatch({
        type: ERROR
      });
    });
};

export const logOut = () => {
  return {
    type: LOG_OUT
  };
};

export const setAuthLoading = () => {
  return {
    type: AUTH_LOADING
  };
};