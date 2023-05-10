import { authAPI, securityAPI } from "../api/api";
import { stopSubmit } from "redux-form";

const SET_USER_DATA = "SET_USER_DATA";
const GET_CAPTCHA_URL_SUCCESS = "GET_CAPTCHA_URL_SUCCESS";
const TOGGLE_IS_AUTH = "TOGGLE_IS_AUTH"

let initialAuthState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  captchaUrl: null,
};

const authReducer = (state = initialAuthState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
    case GET_CAPTCHA_URL_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    case TOGGLE_IS_AUTH: 
    return {
      ...state,
      isAuth: action.payload
    }
    default:
      return state;
  }
};

export const toggleIsAuth = (isAuth) => ({
  type: TOGGLE_IS_AUTH,
  payload: isAuth
})

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
  // console.log(response);
  const captchaUrl = response.data.url;
  dispatch(getCaptchUrlSuccess(captchaUrl));
};

export const getAuthUserData = () => async (dispatch) => {
  let response = await authAPI.me();
  console.log(response.data.data.id);
  if (response.data.resultCode === 0) {
    let { id, login, email } = response.data.data;
    dispatch(setAuthUserDataActionCreator(id, email, login, true));
  }
};

export const login =
  (email, password, rememberMe, captcha) => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe, captcha);
    // console.log(response.data.data.userId);

    if (response.data.resultCode === 0) {
      dispatch(getAuthUserData());
    } else {
      if (response.data.resultCode === 10) {
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
  let response = await authAPI.login();
  if (response.data.resultCode === 0) {
    dispatch(setAuthUserDataActionCreator(null, null, null, false));
  }
};

export default authReducer;
