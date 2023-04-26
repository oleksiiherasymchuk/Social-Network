import React from "react";
import s from "./ProfileInfo.module.css";
import man from './images/man.png'
// import woman from './images/woman.png'
import ProfileData from './ProfileData'
import ProfileStatus from './ProfileStatus'

const ProfileInfo = () => {
  return (
    <div className={s.profileInfo}>
      <div className={s.profileInfoAvatar}>
        <img src={man} alt="" />
        {/* <img src={woman} alt="" /> */}
        <input type={"file"} name="" id="" />
        <ProfileStatus />
      </div>

      <div className={s.profileInfoDetails}>
        <ProfileData />
      </div>
    </div>
  );
};

export default ProfileInfo;
