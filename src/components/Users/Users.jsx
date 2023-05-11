import React, { useEffect } from "react";
import Paginator from "../../common/Paginator/Paginator";
import s from "./Users.module.scss";
import User from "./User/User";
import { compose } from "redux";
import { connect } from "react-redux";
import { requestUsers, toggleIsFetching } from "../../redux/usersReducer";
import Preloader from "../../common/Preloader/Preloader";

const Users = ({ users, requestUsers, isFetching, toggleIsFetching, currentPage, pageSize, totalUsersCount, filter }) => {
  useEffect(() => {
    toggleIsFetching(true);
    requestUsers(currentPage, pageSize, totalUsersCount, filter).then(() => {
      toggleIsFetching(false);
    });
  }, [requestUsers, toggleIsFetching, currentPage, filter, totalUsersCount, pageSize]);

  return (
    <div className={s.usersComponent}>
      {isFetching ? (
        <div className={s.preloader}>
          <Preloader />
        </div>
      ) : (
        <div className={s.users}>
          <div className={s.paginator}>
            <Paginator />
          </div>
          <div className={s.user}>
            {users.map((user) => {
              return (
                <div className={s.userInfo} key={user.id}>
                  <User users={user} />
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    isFetching: state.usersPage.isFetching,
    currentPage: state.usersPage.currentPage,
    totalUsersCount: state.usersPage.totalUsersCount,
    pageSize: state.usersPage.pageSize,
    filter: state.usersPage.filter
    // followingInProgress: getFollowingInProgress(state),
  };
};
export default compose(
  connect(mapStateToProps, { requestUsers, toggleIsFetching })
)(Users);

