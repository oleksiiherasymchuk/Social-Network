import {createSelector} from "reselect";

const getUsersSelector = (state) => {
    return state.usersPage.users
}

export const getUsers = createSelector(getUsersSelector, (users) => {
    return users
    // return users.filter(u => true)
})

export const getPageSize = (state) => {
    return state.usersPage.pageSize
}

export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount
}

export const getCurrentPage = (state) => {
    return state.usersPage.currentPage
}

export const getIsFetching = (state) => {
    return state.usersPage.isFetching
}

export const getFollowingInProgress = (state) => {
    return state.usersPage.followingInProgress
}
export const getFollowedUsers = (state) => {
    return state.usersPage.followingUsers
}

export const getUsersFilter = (state) => {
    return state.usersPage.filter
}

