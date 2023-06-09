import React, { useEffect, useRef } from "react";
import s from "./Chat.module.css";
import Messages from "../Messages/Messages";
import AddChatMessageForm from "../Messages/AddChatMessageForm/AddChatMessageForm";
import { useDispatch, useSelector } from "react-redux";
import { getChatStatus } from "../../../redux/chatSelector";
import { startMessaging, stopMessaging } from "../../../redux/chatReducer";


const Chat = () => {
  const dispatch = useDispatch();
  const status = useSelector(getChatStatus);

  // useEffect(() => {
  //   dispatch(startMessaging());
  //   return () => {
  //     dispatch(stopMessaging());
  //   };
  // }, [dispatch]);

  return (
    <div className={s.chat}>
      {" "}
      {status === "error" && <div>Chat Error</div>}
      {status === "pending" && <div>Chat pending</div>}
      {status === "ready" && <div>Chat ready</div>}
      <Messages />
      <AddChatMessageForm />
    </div>
  );
};

export default Chat;
