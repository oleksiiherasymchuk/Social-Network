import React, {  } from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = ({ isOwner, ...props }) => {
  // useEffect(() => {
  //   // debugger
  //   console.log(isOwner);
  // }, [isOwner]);

  return (
    <div className={s.profile}>
      <div className={s.profileInfo}>
        <ProfileInfo
          profile={props.profile}
          status={props.status}
          savePhoto={props.savePhoto}
          updateStatus={props.updateStatus}
          isOwner={isOwner}
          saveProfile={props.saveProfile}
        />
      </div>

      <div className={s.profilePosts}>
        <MyPosts
          posts={props.posts}
          addPost={props.addPost}
          deletePost={props.deletePost}
          isOwner={isOwner}
        />
      </div>
    </div>
  );
};

export default Profile;
