import React, { useEffect } from "react";
import Paginator from "../../common/Paginator/Paginator";
import s from "./Users.module.scss";
import User from "./User/User";
import { compose } from "redux";
import { connect } from "react-redux";
import { requestUsers, toggleIsFetching } from "../../redux/usersReducer";
import Preloader from "../../common/Preloader/Preloader";

const Users = ({ users, requestUsers, isFetching, toggleIsFetching }) => {
  useEffect(() => {
    toggleIsFetching(true)
    requestUsers().then(() => {
      toggleIsFetching(false)
    });
  }, [requestUsers, toggleIsFetching]);

  return (
    <div className={s.usersComponent}>
      {isFetching ? (
        <div className={s.preloader}>
          <Preloader />
          loading...
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
  };
};
export default compose(connect(mapStateToProps, { requestUsers, toggleIsFetching}))(Users);
