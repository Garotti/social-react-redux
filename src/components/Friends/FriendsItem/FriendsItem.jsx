import React from 'react';
import {NavLink} from "react-router-dom";

import s from '../Friends.module.scss'

const FriendsItem = ({friends, status}) => {

    return (<>
        {friends.map(friend => <div>
            <img className={s.friend_foto} src={friend.img} alt="friend_photo"/>
            <p>
                <NavLink className={s.friendLink} to={`/friends/${friend.id}`}>
                    {friend.name}
                </NavLink>
            </p>
            <p>{status.map(s => <div>
                <p key={s.id}>{s.status}</p>
            </div>)}</p>
        </div> )}
        </>);
};

export default FriendsItem;

