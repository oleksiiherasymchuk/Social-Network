import React from "react";
import s from "./Messages.module.css";
import Message from "./Message/Message";

const Messages = () => {
  const messages = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  return (
    <div className={s.messages}>
      <div className={s.textarea}>
        {/* <div className={s.messageEmpty}>
          <p>No messages yet...</p>
        </div> */}
        {messages.map((m, index) => (
          <Message key={index} />
        ))}
      </div>
    </div>
  );
};

export default Messages;
