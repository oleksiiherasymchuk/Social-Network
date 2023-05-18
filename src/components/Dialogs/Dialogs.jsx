import React from "react";
import s from "./Dialogs.module.css";
import DialogsScroll from "./DialogsScroll/DialogsScroll";
import Messages from "./Messages/Messages"
import AddMessageForm from "./AddMessageForm/AddMessageForm"

const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <h1>Dialogs</h1>
      <DialogsScroll />
      <Messages />
      <AddMessageForm />
    </div>
  );
};

export default Dialogs;
