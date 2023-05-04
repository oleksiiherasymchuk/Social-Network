import { usersAPI } from "../api/api";

const FOLLOW = "users/FOLLOW";
const UNFOLLOW = "users/UNFOLLOW";
const SET_USERS = "users/SET_USERS";
const SET_CURRENT_PAGE = "users/SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "users/SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "users/TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "users/TOGGLE_IS_FOLLOWING_PROGRESS";
const SET_FILTER = "users/SET_FILTER";

let initialUsersState = {
  users: [],
  isFetching: true,
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  followingInProgress: [],
  filter: {
    term: "",
    friend: null,
  },
};

const usersReducer = (state = initialUsersState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        // users: updateObjectInArray(state.users, action.userId, "id", {followed: true} )
        users: state.users.map((u) => {
          if (u["id"] === action.userId) {
            // return { ...u, ...{ ["followed"]: true } };
            return { ...u, ...true };
          }
          return u;
        }),
      };
    case UNFOLLOW: {
      return {
        ...state,
        // users: updateObjectInArray(state.users, action.userId, "id", {followed: false} )
        users: state.users.map((u) => {
          if (u["id"] === action.userId) {
            return { ...u, ...false };
            //   return { ...u, ...{ ["followed"]: false } };
          }
          return u;
        }),
      };
    }
    case SET_USERS:
      return {
        ...state,
        users: action.users,
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };
    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.count,
      };
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    case TOGGLE_IS_FOLLOWING_PROGRESS:
      return {
        ...state,
        // followingInProgress: action.isFetching
        //   ? [...state.followingInProgress, action.userId]
        //   : state.followingInProgress.filter((id) => id !== action.userId),
      };
    case SET_FILTER:
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
};

export const followSuccess = (userId) => ({ type: FOLLOW, userId });
export const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});
export const setTotalUsersCount = (totalUsersCount) => ({
  type: SET_TOTAL_USERS_COUNT,
  count: totalUsersCount,
});
export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});
export const setFilter = (filter) => ({ type: SET_FILTER, payload: filter });
export const toggleFollowingProgress = (isFetching, userId) => ({
  type: TOGGLE_IS_FOLLOWING_PROGRESS,
  isFetching,
  userId,
});

export default usersReducer;

export const requestUsers = () => {
    return async(dispatch) => {
        let data = await usersAPI.getUsers()
        dispatch(setUsers(data.items))
    }
}

