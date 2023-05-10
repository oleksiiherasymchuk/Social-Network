import React
// , { useState, useEffect }
 from "react";
import s from "./Header.module.css";
import SignInModal from "./SignInModal/SignInModal";
import { connect, useDispatch } from "react-redux";
import { logout, toggleIsAuth } from "../../redux/authReducer";
import { getUserProfile } from "../../redux/profileReducer";
import { Navigate } from "react-router-dom";

const Header = ({ profile, isAuth, ...props }) => {
 
  const dispatch = useDispatch()

  const logout = () => {
    console.log("logout header");
    dispatch(toggleIsAuth(false))
    props.logout();
    return <Navigate to={"/login"} />;
  };

  return (
    <div className={s.header}>
      <div className={s.title}>
        Social Network | <span>Pet Project</span>
      </div>

      <div className={s.bar}>
        <button className={s.signIn}>
          <SignInModal />
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
});

export default connect(mapStateToProps, { getUserProfile, logout })(Header);
