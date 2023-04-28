import React, { useState } from "react";
import s from "./MyPosts.module.css";
import man from "../ProfileInfo/images/man.png";
// import woman from '../ProfileInfo/images/man.png'

const MyPosts = (props) => {
  const [value, setValue] = useState("");

  const onAddPost = () => {
    // console.log("My posts Component onAddPost function");
    if(value){
      props.addPost(value);
      setValue("");
    } else {
      alert('Post can not be empty...')
    }
 
  };

  const onPostChange = (e) => {
    setValue(e.currentTarget.value);
  };

  const onDeletePost = (postID) => {
    props.deletePost(postID)
  }

  return (
    <div className={s.myPosts}>
      <div className={s.postForm}>
        <h1>My Posts</h1>
        <textarea
          name=""
          placeholder={"Type post text here..."}
          value={value}
          onChange={onPostChange}
        ></textarea>
        <button onClick={onAddPost}>Post</button>
      </div>

      <div className={s.posts}>
        {props.posts.map((p) => {
          return (
            <div className={s.post} key={p.id} id={p.id}>
              <div className={s.postAvatar}>
                <img src={man} alt="" />
              </div>

              <div className={s.postDetails}>
                <p className={s.date}>{p.createdAt}</p>
                <p className={s.postText}>{p.message}</p>
              </div>

              <div className={s.deleteButton}>
                <button onClick={() => onDeletePost(p.id)}>Delete</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyPosts;
