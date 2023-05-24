import React, { useState } from "react";
import s from "./ProfileInfo.module.css";
import ProfileData from "./ProfileData/ProfileData"
import ProfileStatus from "./ProfileStatus";
import ProfileDataForm from "./ProfileDataForm/ProfileDataForm";

const ProfileInfo = ({ saveProfile, ...props }) => {
  const [editMode, setEditMode] = useState(false);

  const onSubmit = (formData) => {
    // debugger
    saveProfile(formData).then(() => {
      // debugger;
      console.log(formData);
      setEditMode(false);
    });
  };

  return (
    <div className={s.profileInfo}>
      <div className={s.profileInfoAvatar}>
        <ProfileStatus
          profile={props.profile}
          status={props.status}
          updateStatus={props.updateStatus}
          isOwner={props.isOwner}
          {...props}
        />
      </div>

      <div className={s.profileInfoDetails}>
        {editMode ? (
          <ProfileDataForm
            onSubmit={onSubmit}
            saveProfile={props.saveProfile}
            savePhoto={props.savePhoto}
            initialValues={props.profile}
            profile={props.profile}
            // isOwner={props.isOwner}
          />
        ) : (
          <ProfileData
            profile={props.profile}
            isOwner={props.isOwner}
            {...props}
            isEditMode={() => setEditMode(true)}
          />
        )}
      </div>
    </div>
  );
};

export default ProfileInfo;
