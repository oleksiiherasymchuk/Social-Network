import React from "react";
import s from "./Messages.module.css";
import Message from "./Message/Message";

const Messages = () => {
  const messages = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26,
  ];

  return (
    <div className={s.messages}>
      {messages.map((m) => (
        <Message key={m.id} />
      ))}
    </div>
  );
};

export default Messages;
