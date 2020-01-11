import React from 'react';
import s from './Navbar.module.css'

import { MdAccountCircle } from "react-icons/md";
import { MdMessage } from "react-icons/md";
import { MdInsertPhoto } from "react-icons/md";
import {FaNewspaper} from "react-icons/fa";
import {FaUserFriends} from "react-icons/fa";
import {FaMusic} from "react-icons/fa";
import {FaVideo} from "react-icons/fa";
import {NavLink} from "react-router-dom";


const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink activeClassName={s.activeLink} to="/profile">
                    <MdAccountCircle  className={s.icon}/>My profile
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink  to="/news">
                    <FaNewspaper className={s.icon}/> News
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink activeClassName={s.activeLink} to="/dialogs">
                    <MdMessage className={s.icon}/>Messages
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink activeClassName={s.activeLink} to="/friends">
                    <FaUserFriends className={s.icon}/> Friends
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="#">
                    <FaMusic className={s.icon}/>Music
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="#">
                    <FaVideo className={s.icon}/> Videos
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="#">
                    <MdInsertPhoto className={s.icon}/> Photos
                </NavLink>
            </div>
        </nav>
    );
};

export default Navbar;