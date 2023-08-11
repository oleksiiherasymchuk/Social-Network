import React, { useEffect, useMemo } from "react";
import s from "./DialogItem.module.css";
import man from "../../../Profile/ProfileInfo/images/man.png";
import { useSelector } from "react-redux";
import { getFollowedUsers, getUsers } from "../../../../redux/usersSelector";

const DialogItem = React.memo(({followedUsers}) => {
  const users = useSelector(getUsers);
  // const followedUsers = useSelector(getFollowedUsers);

  const filteredUsers = useMemo(() => {
    return users.filter((u) => followedUsers.includes(u.id));
  }, [users, followedUsers]);

  useEffect(() => {
    // console.log(filteredUsers);
    // console.log(followedUsers);
  }, []);

  // useEffect(() => {
  //   console.log(filteredUsers);
  // }, []);
  // console.log(filteredUsers);
  // filtedetUsers renders twice

  return (
    <div className={s.dialog}>
      {filteredUsers.map((fu) => {
        // console.log(fu);
        return (
          <div className={s.dialogItem} key={fu.id}>
            <div>
              <div className={s.dialogAvatar}>
                <img src={fu.photos?.small || man} alt="userPhoto" />
              </div>
              <div>
                <p>{fu.name}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
});

export default DialogItem;
