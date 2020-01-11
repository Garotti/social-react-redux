import React from 'react';
import s from './Friends.module.css'
import {NavLink, Redirect} from "react-router-dom";
import FriendsItem from './FriendsItem/FriendsItem';
import Status from './Status/Status';

const Friends = (props) => {


    const statusElement = props.dialogsPage.status.map(st => {
        return (
            <Status status={st.status}/>
        )
    });


    const friendsElement = props.dialogsPage.dialogs.map(name => {
        debugger;
        return (

            <FriendsItem name={name.name} key={name.id}/>
        )
    });


    return (
        <div className={s.content}>
            <div className={s.friendsNav}>
                <div>All friends</div>
                <div>Friends online</div>
                <NavLink className={s.usersStyle} to={'/users'}>find users</NavLink>
            </div>
            <div>
                <img src="" alt=""/>
                <div>
                    {friendsElement}
                </div>
                <NavLink to={'/dialogs'}>messages</NavLink>
            </div>
            <div>
                sidebar friends
            </div>
        </div>
    )
};

export default Friends;