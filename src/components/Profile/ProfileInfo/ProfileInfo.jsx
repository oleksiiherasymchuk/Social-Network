import React from "react";
import s from "./ProfileInfo.module.css";
import ProfileData from "./ProfileData";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
  // console.log(props.profile);
  
  // const onAvatarSelected = (e) => {
  //   if (e.target.files.length) {
  //     console.log(e.target);
  //     props.savePhoto(e.target.files[0]);
  //   }
  // };

  // // const onSubmit = (formData) => {
  // //     saveProfile(formData).then(
  // //         () => {
  // //             setEditMode(false);
  // //         }
  // //     );
  // // }
  return (
    <div className={s.profileInfo}>
      <div className={s.profileInfoAvatar}>
        <ProfileStatus
          profile={props.profile}
          status={props.status}
          getUserStatus={props.getUserStatus}
          updateStatus={props.updateStatus}
        />
      </div>

      <div className={s.profileInfoDetails}>
        <ProfileData
          profile={props.profile}
          getUserProfile={props.getUserProfile}
        />
      </div>
    </div>
  );
};

export default ProfileInfo;
