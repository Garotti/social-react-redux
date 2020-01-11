import React from 'react';
import s from "./Users.module.css";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";


let Users = ({currentPage, onPageChanged, totalUsersCount, pageSize, users, ...props}) => {
    return (
        <div>
            <div className={s.render}>
                {users.map(u => <User user={u}
                                      followingInProgress={props.followingInProgress}
                                      follow={props.follow}
                                      unfollow={props.unfollow}
                                      key={u.id}/>)
                }
            </div>
            <div className={s.paginator}>
                <Paginator currentPage={currentPage}
                           onPageChanged={onPageChanged}
                           totalUsersCount={totalUsersCount}
                           pageSize={pageSize}
                />
            </div>
        </div>
    )

};


export default Users;