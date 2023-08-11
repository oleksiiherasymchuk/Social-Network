import React from "react";
import s from "./Dialogs.module.css";
import DialogsScroll from "./DialogsScroll/DialogsScroll";
import Messages from "./Messages/Messages";
import AddMessageForm from "./AddMessageForm/AddMessageForm";
import { useSelector } from "react-redux";
import { getFollowedUsers } from "../../redux/usersSelector";

const Dialogs = React.memo(() => {
  const followedUser = useSelector(getFollowedUsers);
  console.log(followedUser);

  return (
    <div className={s.dialogs}>
      <h1>Dialogs</h1>
      <DialogsScroll />
      {followedUser.length === 0 && <div className={s.dialogsNone}>No dialogs...</div>}
      {followedUser.length !== 0 && (
        <>
          <Messages />
          <AddMessageForm />
        </>
      )}
    </div>
  );
});

export default Dialogs;
