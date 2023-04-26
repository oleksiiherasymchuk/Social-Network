const ADD_POST = "ADD_POST";
const SET_STATUS = "SET_STATUS";

export const initialProfileState = {
  posts: [
    { id: 1, message: "Hello, world!", likes: 0 },
    { id: 2, message: "Glory to Ukraine", likes: 4000000 },
    { id: 3, message: "Glory to heroes", likes: 50000 },
  ],
  profile: null,
  status: "",
};

export const profileReducer = (state = initialProfileState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 4,
        message: action.newPostText,
        likes: 0,
      };
      return {
        ...state,
        posts: [newPost, ...state.posts],
        newPostText: "",
      };
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

export default profileReducer;

