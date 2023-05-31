import { newsAPI } from "../api/news";

const SET_NEWS = "SET_NEWS";
const TOGGLE_IS_FETCHING = "news/TOGGLE_IS_FETCHING";
const SET_PAGE_SIZE = "news/SET_PAGE_SIZE";
const SET_TOTAL_USERS_COUNT = "news/SET_TOTAL_USERS_COUNT";
const SET_CURRENT_PAGE = "news/SET_CURRENT_PAGE";

let initialNewsState = {
  news: [],
  pageSize: 10,
  currentPage: 1,
  isFetching: true,
};

const newsReducer = (state = initialNewsState, action) => {
  switch (action.type) {
    case SET_NEWS:
      return {
        ...state,
        news: action.payload,
      };
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.payload,
      };
    default:
      return state;
  }
};

export const setNews = (news) => ({ type: SET_NEWS, payload: news });
export const setPageSize = (pageSize) => ({
  type: SET_PAGE_SIZE,
  payload: pageSize,
});
export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  payload: currentPage,
});
export const setTotalUsersCount = (totalUsersCount) => ({
  type: SET_TOTAL_USERS_COUNT,
  payload: totalUsersCount,
});

export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  payload: isFetching,
});

export const getNews = () => {
  return async (dispatch) => {
    dispatch(toggleIsFetching(true));
    let response = await newsAPI.getNews();
    // console.log(response);
    dispatch(setNews(response.data.results));
    dispatch(toggleIsFetching(false));
  };
};

export default newsReducer;
