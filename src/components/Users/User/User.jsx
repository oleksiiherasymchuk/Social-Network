import React from "react";
import s from "./User.module.css";
import man from "../../Profile/ProfileInfo/images/man.png";

const User = (props) => {
  return (
    <div className={s.user}>
      <div className={s.userAvatar}>
        {props.users.photos.small && (
          <img src={props.users.photos.small} alt="userAvatar" />
        )}
        {!props.users.photos.small && <img src={man} alt="userAvatar" />}
      </div>
      <div className={s.userName}>{props.users.name}</div>
      <div className={s.follow}>
        <button>Follow</button>
      </div>
    </div>
  );
};

export default User;