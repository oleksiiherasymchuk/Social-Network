import React from "react";
import s from "./AddMessageFrom.module.css"

const AddMessageForm = () => {
  return (
    <div className={s.addMessageForm}>
      {" "}
      <textarea placeholder="Type your message"></textarea>
      <button>Send</button>
    </div>
  );
};

export default AddMessageForm;
