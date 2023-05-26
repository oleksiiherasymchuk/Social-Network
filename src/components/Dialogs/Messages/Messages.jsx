import React, { useEffect } from "react";
import s from "./Messages.module.css";
import Message from "./Message/Message";
import { useSelector } from "react-redux";
import { getMessages } from "../../../redux/dialogsSelector";

const Messages = () => {
  // const messages = [
  //   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  // ];
  const messages = useSelector(getMessages);
  // useEffect(() => {
  //   console.log(messages);
  // }, [messages])

  return (
    <div className={s.messages}>
      <div className={s.textarea}>
        {messages.length === 0 && (
          <div className={s.messageEmpty}>
            <p>No messages yet...</p>
          </div>
        )}
        {messages &&
          messages.map((m) => {
            return <Message key={m.id} message={m.message} time={m.sentAt} />;
          })}
      </div>
    </div>
  );
};

export default Messages;
