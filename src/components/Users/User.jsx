import React from 'react';
import s from "./Users.module.css";
import userPhoto from "../../assets/images/qq.jpg";
import {NavLink} from "react-router-dom";


let User = ({user, followingInProgress, unfollow, follow}) => {
    return (
        <div>
            <span>
                <div className={s.photo}>
                    <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.small != null ? user.photos.small : userPhoto} alt={"user"}/>
                    </NavLink>
                </div>
                <div>
                      {user.followed
                          ?
                          <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                              unfollow(user.id)
                          }}>UnFollow</button>
                          :
                          <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                              follow(user.id)
                          }}>Follow</button>
                      }
                </div>
            </span>
            <span>
                <span>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                </span>
                <span>
                    <div>{"user.location.city"}</div>
                    <div>{"user.location.country"}</div>
                </span>
            </span>
        </div>)
};

export default User;