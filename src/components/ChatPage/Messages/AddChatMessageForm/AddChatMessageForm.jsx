import React, { useState } from "react";
import s from "./AddChatMessageForm.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getChatStatus } from "../../../../redux/chatSelector";
import { sendMessage } from "../../../../redux/chatReducer";

const AddChatMessageForm = () => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");

  const status = useSelector(getChatStatus);

  const sendMessageHandler = () => {
    if (!message) return;
    dispatch(sendMessage(message));
    sendMessage("");
  };

  return (
    <div className={s.addChatMessageForm}>
      {" "}
      <textarea
        placeholder="Type your message"
        onChange={(e) => setMessage(e.currentTarget.value)}
        value={message}
      />
      <button 
      disabled={status !== "ready"} 
      onClick={sendMessageHandler}>
        Send
      </button>
    </div>
  );
};

export default AddChatMessageForm;
