import React from 'react'
import s from './Profile.module.css'
import  MyPosts  from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = () => {
  return (
    <div className={s.profile}>
        <div className={s.profileInfo}>
          <ProfileInfo />
        </div>

        <div className={s.profilePosts}>
          <MyPosts />
        </div>

    </div>
  )
}

export default Profile