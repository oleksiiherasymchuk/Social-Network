import { v1 } from "uuid";
import { profileAPI, usersAPI } from "../api/api";

const ADD_POST = "ADD_POST";
const SET_STATUS = "SET_STATUS";
const DELETE_POST = "DELETE_POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SAVE_PHOTO_SUCCESS = "SAVE_PHOTO_SUCCESS";

function getTimeFormatted() {
  const date = new Date();
  const timeOptions = { hour: "numeric", minute: "numeric" };
  const timeString = date.toLocaleTimeString("en-US", timeOptions);

  const dateOptions = { day: "numeric", month: "long", year: "numeric" };
  const dateString = date.toLocaleDateString("en-US", dateOptions);

  return `${timeString}, ${dateString}`;
}

export const initialProfileState = {
  posts: [
    {
      id: v1(),
      createdAt: "3:30 PM, April 28, 2023",
      message: "Hello, world!",
      likes: 0,
    },
    {
      id: v1(),
      createdAt: "3:33 PM, April 28, 2023",
      message: "Glory to Ukraine",
      likes: 4000000,
    },
    {
      id: v1(),
      createdAt: "3:38 PM, April 28, 2023",
      message: "Glory to heroes",
      likes: 50000,
    },
  ],
  profile: null,
  status: "",
};

export const profileReducer = (state = initialProfileState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: v1(),
        createdAt: getTimeFormatted(),
        message: action.newPostText,
        likes: 0,
      };
      return {
        ...state,
        posts: [newPost, ...state.posts],
        newPostText: "",
      };
    }
    case DELETE_POST: {
      return {
        ...state,
        posts: state.posts.filter((p) => p.id !== action.postID),
      };
    }
    case SET_STATUS: {
      return {
        ...state,
        status: action.status,
      };
    }
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile,
      };
    }
    case SAVE_PHOTO_SUCCESS: {
      return {
        ...state,
        profile: { ...state.profile, photos: action.payload },
      };
    }
    default:
      return state;
  }
};

export const addPost = (newPostText) => ({
  type: ADD_POST,
  newPostText,
});
export const setStatus = (status) => ({
  type: SET_STATUS,
  status,
});

export const savePhotoSuccess = (photos) => ({
  type: SAVE_PHOTO_SUCCESS,
  payload: photos,
});
export const deletePost = (postID) => ({ type: DELETE_POST, postID });
export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});

export const getUserProfile = (userId) => async (dispatch) => {
  const response = await usersAPI.getProfile(userId);
  dispatch(setUserProfile(response.data));
};

export const getUserStatus = (userId) => async (dispatch) => {
  const response = await profileAPI.getStatus(userId);
  dispatch(setStatus(response.data));
};

export const savePhoto = (file) => async (dispatch) => {
  let response = await profileAPI.savePhoto(file);
  if (response.data.resultCode === 0) {
    dispatch(savePhotoSuccess(response.data.data.photos));
  }
};

export const updateStatus = (status) => async (dispatch) => {
  let response = await profileAPI.updateStatus(status);

  if (response.data.resultCode === 0) {
    dispatch(setStatus(status));
  }
};

export default profileReducer;

// export const saveProfile = (profile) => async (dispatch, getState) => {
//     const userId = getState().auth.userId;
//     const response = await profileAPI.saveProfile(profile);
//     if (response.data.resultCode === 0) {
//         dispatch(getUserProfile(userId));
//     } else {
//         dispatch(stopSubmit("edit-profile", {_error: response.data.messages[0] }));
//         return Promise.reject(response.data.messages[0]);
//     }
// }
