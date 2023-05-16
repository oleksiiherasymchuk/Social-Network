import React from "react";
import s from "./User.module.css";
import man from "../../Profile/ProfileInfo/images/man.png";
import { NavLink } from "react-router-dom";

const User = (props) => {
  return (
    <>
      <NavLink to={"/profile/" + props.users.id}>
        <div className={s.user}>
          <div className={s.userAvatar}>
            {props.users?.photos.small ? (
              <img src={props.users.photos.small} alt="userAvatar" />
            ) : (
              <img src={man} alt="userAvatar" />
            )}
          </div>
          <div className={s.userName}>{props.users.name}</div>
          <div className={s.follow}>
            <button>Follow</button>
          </div>
        </div>
      </NavLink>
    </>
  );
};

export default User;
