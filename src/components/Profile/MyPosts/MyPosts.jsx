import React from "react";
import s from "./MyPosts.module.css";
import man from '../ProfileInfo/images/man.png'
// import woman from '../ProfileInfo/images/man.png'

const MyPosts = () => {
  return (
    <div className={s.myPosts}>
      <div className={s.postForm}>
        <h1>My Posts</h1>
        <textarea name="" placeholder={"Type post text here..."}></textarea>
        <button>Post</button>
      </div>

      <div className={s.posts}>
  
        <div className={s.post}>
          <div className={s.postAvatar}>
            <img src={man} alt="" />
          </div>

          <div className={s.postDetails}>
            <p className={s.date}>13:15:00, 26/04/2023</p>
            <p className={s.postText}>First post</p>
          </div>

          <div className={s.likes}>
            Likes 31
          </div>  
        </div>
        
      </div>
    </div>
  );
};

export default MyPosts;
