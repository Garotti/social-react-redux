import React from 'react';
import s from './Users.module.css';
import * as axios from "axios";
import userPhoto from '../../assets/images/qq.jpg';

let Users = (props) => {
    if (props.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(res => {
                props.setUsers(res.data.items);
            });
    }

    return (
        <div className={s.render}>
            <div>
                {props.users.map(u => <div key={u.id}>
                    <span>
                        <div className={s.photo}>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} alt={"user"}/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    props.unfollow(u.id)
                                }}>Follow</button>
                                : <button onClick={() => {
                                    props.follow(u.id)
                                }}>UnFollow</button>
                            }
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                            <div>{"u.location.city"}</div>
                            <div>{"u.location.country"}</div>
                        <span>

                        </span>
                    </span>
                </div>)}
            </div>
        </div>
    )
};

export default Users;