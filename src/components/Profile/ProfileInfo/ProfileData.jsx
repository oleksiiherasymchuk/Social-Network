import React, { useEffect } from "react";
import s from "./ProfileData.module.css";
// import { useParams } from "react-router-dom";
import man from "./images/man.png";

const ProfileData = ({ getUserProfile, getUserId, ...props }) => {
  const onAvatarSelected = (e) => {
    if (e.target.files.length) {
      console.log(e.target);
      props.savePhoto(e.target.files[0]);
    }
  };
  // let isOwner = !params.userId

  // const onSubmit = (formData) => {
  //     saveProfile(formData).then(
  //         () => {
  //             setEditMode(false);
  //         }
  //     );
  // }
  let userId = props.userId;
  useEffect(() => {
    getUserProfile(userId);
    getUserId(userId);
  }, [getUserProfile, getUserId, userId]);

  return (
    <>
      <div className={s.profileData}>
        <div className={s.avatar}>
          <img
            src={!props.profile ? man : props.profile.photos.large || man}
            alt=""
            style={{ height: "150px", width: "50%", borderRadius: "10px" }}
          />
          <input type={"file"} onChange={onAvatarSelected} />
        </div>

        <div>
          <b>Full name</b>: <span></span>
          {!props.profile ? "username" : props.profile.fullName}
        </div>
        <div>
          <b>Looking for a job</b>: <span></span>
          {!props.profile ? "No" : props.profile.lookingForAJob ? "Yes" : "No"}
        </div>
        <div>
          <b>My professional skills</b>: <span></span>
          {!props.profile
            ? "ruzophob"
            : !props.profile.lookingForAJobDescription
            ? " my soft and hard skills"
            : props.profile.lookingForAJobDescription}
        </div>
        <div>
          <b>About me</b>: <span></span>
          {!props.profile
            ? "ruzophob"
            : !props.profile.aboutMe
            ? props.profile.fullName
            : props.profile.aboutMe}
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
          </ul>
        </div>
        {/* <div className={s.button}>
          <button className={s.edit}>Edit</button>
        </div> */}
        {/* {isOwner && <div><button onClick={goToEditMode} className={s.editButton}>edit</button></div>} */}
      </div>
    </>
  );
};

export default ProfileData;
