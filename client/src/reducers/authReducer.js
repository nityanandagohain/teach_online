import {
    LOG_IN,
    SIGN_UP,
    LOG_OUT,
    AUTH_LOADING,
    ERROR
  } from "../actions/types";
  
  const initialState = {
    logged_in: false,
    loading: false,
    token: ""
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case LOG_IN:
        return {
          ...state,
          logged_in: true,
          token: action.payload
        };
      case SIGN_UP:
        return { ...state };
      case LOG_OUT:
        return { ...state, logged_in: false, token: "" };
      case AUTH_LOADING:
        return { ...state, loading: true };
      case ERROR:
        return { ...state}
      default:
        return state;
    }
  }