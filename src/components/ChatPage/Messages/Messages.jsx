import React, { useEffect } from "react";
import s from "./Messages.module.css";
import Message from "./Message/Message";
import { useSelector } from "react-redux";
import { getChatMessages } from "../../../redux/chatSelector";

const Messages = React.memo((props) => {
  // const messages = [
  //   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  //   22, 23, 24, 25, 26,
  // ];
  const messages = useSelector(getChatMessages);

  useEffect(() => {
    // console.log(messages);
  }, [messages]);

  return (
    <div className={s.messages}>
      {messages.map((m) => {
        // console.log(m);
        return <Message key={m.id} message={m} />;
      })}
    </div>
  );
});

export default Messages;
