import {
  addPost,
  deletePost,
  getUserProfile,
  getUserStatus,
  savePhoto,
  updateStatus,
} from "../../redux/profileReducer";
import { connect } from "react-redux";
import { compose } from "redux";
import Profile from "./Profile";
import React, { useEffect, useState } from "react";
import Login from "../Login/Login";
import { getUserId } from "../../redux/authReducer";

const ProfileContainer = ({
  getUserProfile,
  profile,
  status,
  posts,
  getUserStatus,
  savePhoto,
  updateStatus,
  isAuth,
  userId,
  getUserId,

  ...props
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    setIsAuthenticated(!!isAuth);
  }, [isAuth, isAuthenticated, userId]);

  return (
    <>
      {!isAuthenticated && (
        <Login
          getUserProfile={getUserProfile}
          getUserId={getUserId}
          userId={userId}
        />
      )}
      {isAuth && (
        <Profile
          {...props}
          profile={profile}
          status={status}
          addPost={props.addPost}
          deletePost={props.deletePost}
          posts={posts}
          getUserStatus={getUserStatus}
          savePhoto={savePhoto}
          updateStatus={updateStatus}
          getUserProfile={getUserProfile}
          getUserId={getUserId}
          userId={userId}
        />
      )}
    </>
    // isOwner={!props.match.params.userId}
  );
};

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    userId: state.auth.userId,
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
    getUserId,
  })
)(ProfileContainer);
