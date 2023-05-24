import React from "react";
import s from "./ProfileData.module.css";
import man from "../images/man.png";

const ProfileData = ({ isEditMode, ...props }) => {
  const onAvatarSelected = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0]);
    }
  };

  return (
    <>
      <div className={s.profileData}>
        <div className={s.avatar}>
          <img
            src={!props.profile ? man : props.profile.photos.large || man}
            // src={props.profile.photos.large || man}
            alt=""
            style={{ height: "150px", width: "50%", borderRadius: "10px" }}
          />
          {props.isOwner && <input type={"file"} onChange={onAvatarSelected} />}
        </div>

        <div>
          <b>Full name</b>: <span></span>
          {!props.profile ? "username" : props.profile.fullName}
          {/* {props.profile.fullName} */}
        </div>
        <div>
          <b>Looking for a job</b>: <span></span>
          {!props.profile ? "No" : props.profile.lookingForAJob ? "Yes" : "No"}
          {/* {props.profile.lookingForAJob} */}
        </div>
        <div>
          <b>My professional skills</b>: <span></span>
          {!props.profile
            ? "ruzophob"
            : !props.profile.lookingForAJobDescription
            ? " my soft and hard skills"
            : props.profile.lookingForAJobDescription}
          {/* {props.profile.lookingForAJobDescription} */}
        </div>
        <div>
          <b>About me</b>: <span></span>
          {!props.profile
            ? "ruzophob"
            : !props.profile.aboutMe
            ? props.profile.fullName
            : props.profile.aboutMe}
          {/* {props.profile.aboutMe} */}
        </div>
        <div>
          <b>Contacts</b>:
          <ul>
            {!props.profile
              ? "No contacts"
              : Object.keys(props.profile.contacts).map((c) => {
                  return (
                    <li key={c}>
                      <b>{c}</b>: {props.profile.contacts[c]}
                    </li>
                  );
                })}
            {/* {Object.keys(props.profile.contacts).map((c) => {
                  return (
                    <li key={c}>
                      <b>{c}</b>: {props.profile.contacts[c]}
                    </li>
                  );
                })} */}
          </ul>
        </div>
        {props.isOwner && (
          <div className={s.button}>
            <button className={s.edit} onClick={isEditMode}>
              Edit
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default ProfileData;
