import React from 'react'
import s from './Main.module.css'
import {
  Route,
  Routes,
} from "react-router-dom";
import Users from "../Users/Users";
import News from "../News/News";
import Games from "../Games/Games";
import Settings from "../Settings/Settings";
import Dialogs from "../Dialogs/Dialogs";
import ProfileContainer from '../Profile/ProfileContainer';

const Main = () => {
  return (
    <div className={s.main}>
         <Routes>
            <Route path="/profile" element={<ProfileContainer />} exact/>
            <Route path="/messages" element={<Dialogs />} exact />
            <Route path="/users" element={<Users />} exact />
            <Route path="/news" element={<News />} exact />
            <Route path="/games" element={<Games />} exact />
            <Route path="/settings" element={<Settings />} exact />
          </Routes>
    </div>
  )
}

export default Main