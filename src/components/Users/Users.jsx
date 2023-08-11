import React, { useEffect } from "react";
import Paginator from "../../common/Paginator/Paginator";
import s from "./Users.module.scss";
import User from "./User/User";
import { compose } from "redux";
import { connect, useSelector } from "react-redux";
import { requestUsers, toggleIsFetching, setUsers, requestFollowingUsers } from "../../redux/usersReducer";
import Preloader from "../../common/Preloader/Preloader";
import UsersSearchForm from "./UsersSearchForm";
import { getFollowedUsers, getFollowingInProgress } from "../../redux/usersSelector";

const Users = React.memo(({
  users,
  requestUsers,
  isFetching,
  toggleIsFetching,
  currentPage,
  pageSize,
  totalUsersCount,
  filter,
  followingUsers,
  followingInProgress,
  requestFollowingUsers,
  setUsers,
  ...props
}) => {

  const followedUsersSelector = useSelector(getFollowedUsers)

  const onFilterChanged = (filter) => {
    console.log(filter);
    if (filter.friend === null) {
      // debugger
      requestUsers(1, pageSize, filter);
    } else if(filter.friend === true){
      const followedUser = users.filter(user => user.followed)
      setUsers(followedUser)
    } else if(filter.friend === false){
      const unfollowedUsers = users.filter(user => !user.followed)
      setUsers(unfollowedUsers);      
    } 
  };

  // useEffect(() => {
  //   onFilterChanged(filter);
  //   console.log(filter);
  // }, [filter]);


  useEffect(() => {
    requestUsers(currentPage, pageSize, filter);
    console.log(followedUsersSelector);
  }, [currentPage, pageSize, filter, requestUsers, followedUsersSelector]);

  return (
    <div className={s.usersComponent}>
      {isFetching ? (
        <div className={s.preloader}>
          <Preloader />
        </div>
      ) : (
        <div className={s.users}>
          <h1>Users</h1>
          <div className={s.usersSearch}>
            <UsersSearchForm
              onFilterChanged={onFilterChanged}
              filter={filter}
              followingUsers={followingUsers}
              requestUsers={requestUsers}
              {...props}
            />
          </div>
          <div className={s.paginator}>
            <Paginator />
          </div>
          <div className={s.user}>
            {users.map((user) => {
              return (
                <div className={s.userInfo} key={user.id}>
                  <User users={user} {...props} />
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
});

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    isFetching: state.usersPage.isFetching,
    currentPage: state.usersPage.currentPage,
    totalUsersCount: state.usersPage.totalUsersCount,
    pageSize: state.usersPage.pageSize,
    filter: state.usersPage.filter,
    followingUsers: state.usersPage.followingUsers,
    followingInProgress: getFollowingInProgress(state),
  };
};
export default compose(
  connect(mapStateToProps, { requestUsers, toggleIsFetching, setUsers, requestFollowingUsers })
)(Users);
