import React from 'react'
import s from './Profile.module.css'
import  MyPosts  from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = (props) => {

  const addPost = (postText) => {
    props.addPost(postText)
  }

  const deletePost = (postID) => {
    props.deletePost(postID)
  }


  return (
    <div className={s.profile}>
        <div className={s.profileInfo}>
          <ProfileInfo />
        </div>

        <div className={s.profilePosts}>
          <MyPosts 
          posts={props.posts}
          addPost={addPost}
          deletePost = {deletePost}
           />
        </div>

    </div>
  )
}

export default Profile