import React from 'react';
import s from './Friends.module.css'
import {NavLink} from "react-router-dom";
import FriendsItem from './FriendsItem/FriendsItem';
import Status from './Status/Status';

const Friends = (props) => {

    const friendsElement = props.dialogsPage.dialogs.map(name => {
       return (
           <FriendsItem name={name.name} />
       )
    });

    const statusElement = props.dialogsPage.status.map(st => {
        return(
            <Status status={st.status}/>
        )
    });

    return (
        <div className={s.content}>
            <div className={s.friendsNav}>
                <div>All friends</div>
                <div>Friends online</div>
                <button>find friends</button>
            </div>
            <div>find friends</div>
            <div>
                <img src="" alt=""/>
                <div>
                {friendsElement}
                </div>

                <p>{statusElement}</p>
                <NavLink to={'/dialogs'}>messages</NavLink>
            </div>
            <div>
                sidebar friends
            </div>
        </div>
    )
};

export default Friends;