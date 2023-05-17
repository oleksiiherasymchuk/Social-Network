import React from "react";
import s from "./Message.module.css";
import man from "../../../Profile/ProfileInfo/images/man.png";

const Message = () => {
  return (
    <div className={s.message}>
      <div className={s.avatar}>
        <img src={man} alt="" />
        <p>Oleksii Herasymchuk</p>
      </div>
      <div className={s.messageText}>message text
      {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam laboriosam et aspernatur vitae optio non delectus neque quisquam dolore, sed consequuntur qui numquam sunt, culpa assumenda, cumque quidem nemo nisi beatae sint blanditiis! Debitis animi perferendis maiores! Quaerat voluptas autem, fugiat atque enim voluptates tempora aliquam, repellat cupiditate quam explicabo!
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates aspernatur alias suscipit est, culpa officiis. Cumque tempore corporis dolore voluptatem repellat iusto placeat dignissimos nemo, incidunt molestias ab ut doloribus quidem quaerat! Enim est dolor ipsa possimus nam, aliquam impedit dolores placeat incidunt modi mollitia aspernatur architecto quaerat error pariatur? */}
      </div>
    </div>
  );
};

export default Message;
