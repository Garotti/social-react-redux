import React from 'react';
import s from './Friends.module.scss'
import {NavLink, Redirect} from "react-router-dom";
import FriendsItem from './FriendsItem/FriendsItem';
import Status from './Status/Status';

const Friends = (props) => {


    const statusElement = props.dialogsPage.status.map(st => {
        return (
            <Status status={st.status}/>
        )
    });


    // const friendsElement = props.dialogsPage.dialogs.map(name => {
    //     return (
    //
    //         <FriendsItem name={name.name} key={name.id}/>
    //     )
    // });


    return (
        <div className={s.content}>
            <div className={s.friendsNav}>
                <div>All friends</div>
                <div>Friends online</div>
                <NavLink className={s.usersStyle} to={'/users'}>find users</NavLink>
            </div>
            <div>
                <div>
                    <FriendsItem key={props.dialogsPage.dialogs.id}
                                 friends={props.dialogsPage.dialogs}
                                 status={props.dialogsPage.status}
                    />
                </div>
            </div>
        </div>
    )
};

export default Friends;