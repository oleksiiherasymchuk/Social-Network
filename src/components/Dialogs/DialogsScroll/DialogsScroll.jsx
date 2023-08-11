import React, { useEffect } from "react";
import s from "./DialogsScroll.module.css";
import DialogItem from "./DialogItem/DialogItem";
import { useSelector } from "react-redux";
import { getFollowedUsers } from "../../../redux/usersSelector";

const DialogsScroll = React.memo(() => {
  // const dialogsItems = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  const followedUsers = useSelector(getFollowedUsers);

  useEffect(() => {
    console.log(followedUsers);
  }, [followedUsers]);

  return (
    <div className={s.dialogsScroll}>
      {followedUsers &&
        followedUsers.map((di) => {
          return <DialogItem key={di} className={s.dialogsScrollItems} followedUsers={followedUsers}/>;
        })}
      {followedUsers.length === 0 && (
        <div className={s.dialogsScrollEmpty}>
          <p className={s.dialogsScrollEmptyP}>
            Here are dialogs with followed users...
          </p>
        </div>
      )}
    </div>
  );
});

export default DialogsScroll;
