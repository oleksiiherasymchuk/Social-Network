export const getNewsSelector = (state) => {
    return state.newsPage.news
}

export const getIsFetching = (state) => {
    return state.newsPage.isFetching
}