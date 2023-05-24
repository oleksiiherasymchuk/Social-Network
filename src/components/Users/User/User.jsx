import React, {  } from "react";
import s from "./User.module.css";
import man from "../../Profile/ProfileInfo/images/man.png";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { getFollowingInProgress } from "../../../redux/usersSelector";
import { follow, unfollow } from "../../../redux/usersReducer";

const User = ({users, ...props}) => {
  const followingInProgress = useSelector(getFollowingInProgress);
  // console.log(followingInProgress);


  return (
    <>
      <div className={s.user}>
        <NavLink to={"/profile/" + users.id} className={s.link}>
          <div className={s.userAvatar}>
            {users?.photos.small ? (
              <img src={users.photos.small} alt="userAvatar" />
            ) : (
              <img src={man} alt="userAvatar" />
            )}
          </div>
          <div className={s.userName}>{users.name}</div>
        </NavLink>
        <div className={s.follow}>
          {users.followed ? (
            <button
              disabled={followingInProgress.some((id) => id === users.id)}
              onClick={() => unfollow(users.id)}
            >
              Unfollow
            </button>
          ) : (
            <button
              disabled={followingInProgress.some((id) => id === users.id)}
              onClick={() => follow(users.id)}
            >
              Follow
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default User;
