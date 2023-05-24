import React, {
  useEffect, // , { useState, useEffect }
} from "react";
import s from "./Header.module.css";
import SignInModal from "./SignInModal/SignInModal";
import { connect } from "react-redux";
import { logout } from "../../redux/authReducer";
import { getUserProfile } from "../../redux/profileReducer";
import { Navigate } from "react-router-dom";

const Header = ({ profile, isAuth, authProfile, login, ...props }) => {
  const logout = () => {
    props.logout();
    return <Navigate to={"/login"} />;
  };

  let loginName = login?.slice(0, 8);

  useEffect(() => {
    // console.log(profile, 'header profile');
    // console.log('HEADER', login);
  }, [login, isAuth]);

  return (
    <div className={s.header}>
      <div className={s.title}>
        Social Network | <span>Pet Project</span>
      </div>

      <div className={s.bar}>
        <button className={s.signIn}>
          {!isAuth && <SignInModal />}
          {isAuth && <>{loginName}</>}
        </button>
        <button className={s.signOut} onClick={logout}>
          Sign Out
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  profile: state.profilePage.profile,
  login: state.auth.login,
});

export default connect(mapStateToProps, { getUserProfile, logout })(Header);
