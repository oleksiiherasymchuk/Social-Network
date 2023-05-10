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
// import { Navigate, useParams } from "react-router-dom";

const ProfileContainer = ({
  getUserProfile,
  profile,
  status,
  posts,
  getUserStatus,
  savePhoto,
  updateStatus,
  isAuth,
  ...props
}) => {
  //     // if (!props.isAuth) return <Redirect to={"/login"} /> ;
  //     let userId = props.match.params.userId;
  //     if (!userId) {
  //         userId = props.authorizedUserId;
  //     //     if (!userId) {
  //     //         props.history.push("/login");
  //     //     }
  //     }

  const [isAuthenticated, setIsAuthenticated] = useState(false);  

  useEffect(() => {
    setIsAuthenticated(!!isAuth);
    console.log('is auth on PCC', isAuth);
  }, [isAuth, isAuthenticated]);
  // if (isAuth) {
  //   debugger
  //   console.log("isauth in profile container component", isAuth);
  //   return <Navigate to={`/profile/22342`} />;
  // }
  // if (!isAuth) {
  //   debugger
  //   console.log("!is auth in profile container component ", isAuth);
  //   return <Navigate to={"/login"} />;
  // }
  return (
    <>
      {!isAuthenticated && <Login />}
      {isAuth && (
        <Profile
          {...props}
          profile={profile}
          status={status}
          addPost={props.addPost}
          deletePost={props.deletePost}
          posts={posts}
          getUserProfile={getUserProfile}
          getUserStatus={getUserStatus}
          savePhoto={savePhoto}
          updateStatus={updateStatus}
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
  })
)(ProfileContainer);
