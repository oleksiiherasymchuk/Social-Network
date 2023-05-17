import React from "react";
import s from "./Chat.module.css"
import Messages from "../Messages/Messages";
import AddChatMessageForm from "../Messages/AddChatMessageForm/AddChatMessageForm";

const Chat = () => {
  return (
    <div className={s.chat}> 
      {" "}
      <Messages />
      <AddChatMessageForm />
    </div>
  );
};

export default Chat;
