import { authAPI, securityAPI } from "../api/api";
import { stopSubmit } from "redux-form";

const SET_USER_DATA = "SET_USER_DATA";
const GET_CAPTCHA_URL_SUCCESS = "GET_CAPTCHA_URL_SUCCESS";
const TOGGLE_IS_AUTH = "TOGGLE_IS_AUTH";
const GET_USER_ID = "GET_USER_ID";
const GET_AUTH_PROFILE = "auth/GET_AUTH_PROFILE";

let initialAuthState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  captchaUrl: null,
  authProfile: null,
};

const authReducer = (state = initialAuthState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
    case GET_CAPTCHA_URL_SUCCESS:
    case GET_AUTH_PROFILE:
      return {
        ...state,
        ...action.payload,
      };
    case TOGGLE_IS_AUTH:
      return {
        ...state,
        isAuth: action.payload,
      };
    case GET_USER_ID:
      return {
        ...state,
        userId: action.payload,
      };
    default:
      return state;
  }
};

export const toggleIsAuth = (isAuth) => ({
  type: TOGGLE_IS_AUTH,
  payload: isAuth,
});

export const getUserId = (userId) => ({ type: GET_USER_ID, payload: userId });
export const getAuthProfile = (email, id, login) => ({
  type: GET_AUTH_PROFILE,
  payload: { email, id, login },
});

export const setAuthUserDataActionCreator = (userId, email, login, isAuth) => ({
  type: SET_USER_DATA,
  payload: { userId, email, login, isAuth },
});

export const getCaptchUrlSuccess = (captchaUrl) => ({
  type: GET_CAPTCHA_URL_SUCCESS,
  payload: { captchaUrl },
});

export const getCaptchaUrl = () => async (dispatch) => {
  let response = await securityAPI.getCaptchaUrl();
  const captchaUrl = response.data.url;
  dispatch(getCaptchUrlSuccess(captchaUrl));
};

export const getAuthUserData = () => async (dispatch) => {
  let response = await authAPI.me();
  dispatch(getUserId(response.data.data.id));
  if (response.data.resultCode === 0) {
    // dispatch(toggleIsAuth(true));
    let { id, login, email } = response.data.data;
    // dispatch(getAuthProfile(response.data.data));
    dispatch(setAuthUserDataActionCreator(id, email, login, true));
  }
};

export const login =
  (email, password, rememberMe, captcha) => async (dispatch) => {
    // debugger
    let response = await authAPI.login(email, password, rememberMe, captcha);
    if (response.data.resultCode === 0) {
      // debugger
      // console.log('auth login 0');
      dispatch(getAuthUserData());
      dispatch(toggleIsAuth(true));
    } else {
      if (response.data.resultCode === 10) {
        // debugger
        // console.log('auth login 10');
        dispatch(getCaptchaUrl());
      }

      let message =
        response.data.messages.length > 0
          ? response.data.messages[0]
          : "Some error in authReducer";
      dispatch(stopSubmit("login", { _error: message }));
    }
  };

export const logout = () => async (dispatch) => {
  // debugger
  dispatch(toggleIsAuth(false));
  let response = await authAPI.login();
  if (response.data.resultCode === 0) {
    dispatch(setAuthUserDataActionCreator(null, null, null, false));
  }
};

export default authReducer;
