import React from 'react';
import s from "./Users.module.css";
import userPhoto from "../../assets/images/qq.jpg";
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../api/api";


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
                                  ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                      debugger;
                                      props.toggleFollowingProgress(true, u.id);
                                      usersAPI.unFollowUser(u.id)
                                          .then(data => {
                                              if (data.resultCode === 0) {
                                                  props.unfollow(u.id);
                                              }
                                              props.toggleFollowingProgress(false, u.id);
                                          });
                                  }}>UnFollow</button>
                                  : <button  disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                      props.toggleFollowingProgress(true, u.id);
                                      usersAPI.followUser(u.id)
                                          .then(data => {
                                              if (data.resultCode === 0) {
                                                  props.follow(u.id);
                                              }
                                              props.toggleFollowingProgress(false, u.id);
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