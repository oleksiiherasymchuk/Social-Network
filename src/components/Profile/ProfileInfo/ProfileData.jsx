import React from "react";
import s from "./ProfileData.module.css";

const ProfileData = () => {
  return (
    <div className={s.profileData}>
      <div>
        <b>Full name</b>: fn
        {/* {profile.fullName} */}
      </div>
      <div>
        <b>Looking for a job</b>: looking for a job
        {/* {profile.lookingForAJob ? "yes" : "no"} */}
      </div>
      {/* {profile.lookingForAJob && */}
      <div>
        <b>My professional skills</b>: skills
        {/* {profile.lookingForAJobDescription} */}
      </div>
      {/* } */}
      <div>
        <b>About me</b>: about me
        {/* {profile.aboutMe} */}
      </div>
      <div>
        <b>Contacts</b>:
        <ul>
          <li>inst</li>
          <li>linked in</li>
          <li>twiter</li>
          <li>telegram</li>
          <li>viber</li>
          <li>skype</li>
          <li>github</li>
          <li>youtube</li>
        </ul>
        {/* {Object.keys(profile.contacts).map(key => {
                return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
            })} */}
      </div>
      <div className={s.button}>
        <button className={s.edit}>Edit</button>
      </div>
      {/* {isOwner && <div><button onClick={goToEditMode} className={s.editButton}>edit</button></div>} */}
    </div>
  );
};

export default ProfileData;
