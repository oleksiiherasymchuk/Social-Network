import {
  addPost,
  deletePost,
  getUserProfile,
  getUserStatus,
  savePhoto,
  updateStatus,
  saveProfile,
} from "../../redux/profileReducer";
import { toggleIsAuth, getAuthUserData, login } from "../../redux/authReducer";
import { connect } from "react-redux";
import { compose } from "redux";
import Profile from "./Profile";
import React, { useEffect } from "react";
import Login from "../Login/Login";
import { getAuthProfile } from "../../redux/authReducer";
import { Navigate, useParams } from "react-router-dom";

const ProfileContainer = ({
  getUserProfile,
  profile,
  status,
  posts,
  getUserStatus,
  savePhoto,
  updateStatus,
  isAuth,
  getAuthUserData,
  login,
  authorizedUserId,
  saveProfile,

  ...props
}) => {
  let params = useParams();
  let userId = params.userId;
  const isOwner = authorizedUserId == userId;

  useEffect(() => {
    getUserProfile(userId);
    getUserStatus(userId);
  }, [isAuth, getUserProfile, getUserStatus, userId]);

  if (!userId) {
    userId = authorizedUserId;
    userId = 22342;
    getUserProfile(userId);
    getUserStatus(userId);
    return <Navigate to={`/profile/${userId}`} />;
  }

  if (!isAuth) return <Navigate to={`/login`} />;

  // getUserProfile(userId);
  // getUserStatus(userId);

  return (
    <>
      {!isAuth && <Login {...props} />}
      {isAuth && (
        <Profile
          {...props}
          isOwner={isOwner}
          profile={profile}
          status={status}
          savePhoto={savePhoto}
          updateStatus={updateStatus}
          addPost={props.addPost}
          deletePost={props.deletePost}
          posts={posts}
          saveProfile={saveProfile}
        />
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth,
  };
};

export default compose(
  connect(mapStateToProps, {
    addPost,
    deletePost,
    getUserProfile,
    getUserStatus,
    savePhoto,
    updateStatus,
    toggleIsAuth,
    getAuthUserData,
    login,
    getAuthProfile,
    saveProfile,
  })
)(ProfileContainer);
