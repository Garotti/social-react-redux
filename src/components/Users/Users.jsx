import React from 'react';
import s from "./Users.module.css";
import userPhoto from "../../assets/images/qq.jpg";
import {NavLink} from "react-router-dom";
import axios from 'axios';


let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
        <div>
            <div className={s.render}>
                <div>
                    {props.users.map(u => <div key={u.id}>
                    <span>
                        <div className={s.photo}>
                            <NavLink to={'/profile/' + u.id}>
                                <img src={u.photos.small != null ? u.photos.small : userPhoto} alt={"user"}/>
                            </NavLink>
                        </div>
                        <div>
                              {u.followed
                                  ? <button onClick={() => {
                                      axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                          withCredentials: true,
                                          headers: {
                                              "API-KEY": "25c18729-58e9-4033-b31a-8924601451d6"
                                          }
                                      })
                                          .then(res => {
                                              if (res.data.resultCode === 0) {
                                                  props.unfollow(u.id);
                                              }
                                          });
                                  }}>UnFollow</button>
                                  : <button onClick={() => {
                                      axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{}, {
                                          withCredentials: true,
                                          headers: {
                                              "API-KEY": "25c18729-58e9-4033-b31a-8924601451d6"
                                          }
                                      })
                                          .then(res => {
                                              if (res.data.resultCode === 0) {
                                                  props.follow(u.id);
                                              }
                                          });
                                  }}>Follow</button>
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
                    <div className={s.pageNumber}>
                        {pages.map(p => {
                            return <div
                                className={props.currentPage === p && s.selectedPage}
                                onClick={(e) => {
                                    props.onPageChanged(p);
                                }}>
                                |{p}</div>
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Users;