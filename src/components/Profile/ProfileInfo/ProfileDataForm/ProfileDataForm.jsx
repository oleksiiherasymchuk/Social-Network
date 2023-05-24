import React from "react";
// import styles from "./ProfileDataForm.module.css";
import s from "./ProfileDataForm.module.css";
import { reduxForm } from "redux-form";
import { Field } from "redux-form";

const ProfileDataForm = ({ handleSubmit, profile, error }) => {
  return (
    <form onSubmit={handleSubmit} className={s.profileDataForm}>
      <div className={s.saveButton}>
        <button>Save</button>
      </div>
      {error && <div className={s.error}>{error}</div>}

      <div className={s.profileDataFormData}>
        <div className={s.info}>
          <div>
            <b>Full name: </b>{" "}
            <Field
              type="text"
              placeholder="Full name"
              name="fullName"
              component="input"
            />
          </div>

          <div>
            <b>Hired:</b>{" "}
            <Field type="checkbox" name="lookingForAJob" component="input" />
          </div>

          <div>
            <b>My skills:</b>{" "}
            <Field
              type="text"
              component="textarea"
              placeholder="My professional skills"
              name="lookingForAJobDescription"
            />
          </div>

          <div>
            <b>About me:</b>{" "}
            <Field
              type="text"
              placeholder="About me"
              name="aboutMe"
              component="textarea"
            />
          </div>
        </div>

        <div className={s.contacts}>
          <p>Contacts:</p>{" "}
          {Object.keys(profile.contacts).map((c) => {
            return (
              <div key={c} className={s.contact}>
                <b>
                  {c}:{" "}
                  <Field
                    type="text"
                    placeholder={c}
                    name={`contacts.${c}`}
                    component="input"
                  />
                </b>
              </div>
            );
          })}
        </div>
      </div>
    </form>
  );
};

const ProfileDataFormRedux = reduxForm({ form: "editProfile" })(
  ProfileDataForm
);

export default ProfileDataFormRedux;

