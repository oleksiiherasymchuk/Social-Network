import { v1 } from "uuid"

const ADD_POST = "ADD_POST";
const SET_STATUS = "SET_STATUS";
const DELETE_POST = "DELETE_POST"


function getTimeFormatted() {
  const date = new Date();
  const timeOptions = { hour: 'numeric', minute: 'numeric' };
  const timeString = date.toLocaleTimeString('en-US', timeOptions);

  const dateOptions = { day: 'numeric', month: 'long', year: 'numeric' };
  const dateString = date.toLocaleDateString('en-US', dateOptions);

  return `${timeString}, ${dateString}`;
}


export const initialProfileState = {
  posts: [
    { id: v1(), createdAt: '3:30 PM, April 28, 2023', message: "Hello, world!", likes: 0 },
    { id: v1(), createdAt: '3:33 PM, April 28, 2023', message: "Glory to Ukraine", likes: 4000000 },
    { id: v1(), createdAt: '3:38 PM, April 28, 2023', message: "Glory to heroes", likes: 50000 },
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
        newPostText: '',
      };
    }

    case DELETE_POST: {
      return{
        ...state,
        posts: state.posts.filter(p => p.id !== action.postID)
      }
    }

    case SET_STATUS: {
      return {
        ...state,
        status: action.status,
      };
    }

    default:
      return state;
  }
};

export const addPostActionCreator = (newPostText) => ({
  type: ADD_POST,
  newPostText,
});
export const setStatusActionCreator = (status) => ({
  type: SET_STATUS,
  status,
});
export const deletePostActionCreator = (postID) => ({type: DELETE_POST, postID})


export default profileReducer;

