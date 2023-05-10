import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div className={s.profile}>
      <div className={s.profileInfo}>
        <ProfileInfo
          profile={props.profile}
          getUserProfile={props.getUserProfile}
          status={props.status}
          getUserStatus={props.getUserStatus}
          savePhoto={props.savePhoto}
          updateStatus={props.updateStatus}
        />
      </div>

      <div className={s.profilePosts}>
        <MyPosts
          posts={props.posts}
          addPost={props.addPost}
          deletePost={props.deletePost}
        />
      </div>
    </div>
  );
};

export default Profile;
