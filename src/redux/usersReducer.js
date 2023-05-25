import { usersAPI } from "../api/api";

const FOLLOW = "users/FOLLOW";
const UNFOLLOW = "users/UNFOLLOW";
const SET_USERS = "users/SET_USERS";
const SET_CURRENT_PAGE = "users/SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "users/SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "users/TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "users/TOGGLE_IS_FOLLOWING_PROGRESS";
const SET_FILTER = "users/SET_FILTER";
const SET_PAGE_SIZE = "users/SET_PAGE_SIZE";
const FOLLOWED_USER = "users/FOLLOWED_USER";
const UNFOLLOWED_USER = "users/UNFOLLOWED_USER";

let initialUsersState = {
  users: [],
  isFetching: true,
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  followingInProgress: [],
  followingUsers: [],
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
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
        // followingInProgress: [...state.followingInProgress, action.userId],
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
        // followingInProgress: state.followingInProgress.filter((id) => id !== action.userId),
      };
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
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id !== action.userId),
      };
    case SET_FILTER:
      return {
        ...state,
        filter: action.payload,
      };
    case SET_PAGE_SIZE:
      return {
        ...state,
        pageSize: action.payload,
      };
    case FOLLOWED_USER:
      return {
        ...state,
        followingUsers: [...state.followingUsers, action.payload],
      };
    case UNFOLLOWED_USER:
      return {
        ...state,
        followingUsers: state.followingUsers.filter((id) => id !== action.payload),
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
export const followedUser = (userId) => ({
  type: FOLLOWED_USER,
  payload: userId,
});
export const unfollowedUser = (userId) => ({
  type: UNFOLLOWED_USER,
  payload: userId,
});
export const setFilter = (filter) => ({ type: SET_FILTER, payload: filter });
export const toggleFollowingProgress = (isFetching, userId) => ({
  type: TOGGLE_IS_FOLLOWING_PROGRESS,
  isFetching,
  userId,
});
export const setPageSize = (pageSize) => ({
  type: SET_PAGE_SIZE,
  payload: pageSize,
});

export const requestUsers = (page, pageSize, filter) => {
  return async (dispatch) => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(page));
    dispatch(setFilter(filter));

    let data = await usersAPI.getUsers(
      page,
      pageSize
      // filter.term,
      // filter.friend
    );
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
  };
};

export const follow = (userId) => {
  return async (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId));
    let response = await usersAPI.follow(userId);
    if (response.data.resultCode === 0) {
      dispatch(followSuccess(userId));
      dispatch(followedUser(userId));
    }
    dispatch(toggleFollowingProgress(false, userId));
  };
};

export const unfollow = (userId) => {
  return async (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId));

    let response = await usersAPI.unfollow(userId);

    if (response.data.resultCode === 0) {
      dispatch(unfollowSuccess(userId));
      dispatch(unfollowedUser(userId));
    }

    dispatch(toggleFollowingProgress(false, userId));
  };
};

export default usersReducer;
