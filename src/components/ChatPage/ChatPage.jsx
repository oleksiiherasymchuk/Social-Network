import React from "react";
import s from "./ChatPage.module.css";
import Chat from "./Chat/Chat";

const ChatPage = () => {
  return (
    <div className={s.chatPage}>
      <h1>Chat</h1>
      <Chat />
    </div>
  );
};


export default ChatPage;
