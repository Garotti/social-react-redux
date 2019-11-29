import React from 'react';
import s from './Users.module.css';
import * as axios from "axios";
import userPhoto from '../../assets/images/qq.jpg';

class UsersC extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.setUsers(res.data.items);
                this.props.setTotalUsersCount(res.data.totalCount);
            });

    }
    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.setUsers(res.data.items);
            });

    };
    render() {
        let pagesCount =  Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }
        return (
            <div>
                <div className={s.render}>
                    <div>
                        {this.props.users.map(u => <div key={u.id}>
                    <span>
                        <div className={s.photo}>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} alt={"user"}/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    this.props.unfollow(u.id)
                                }}>Follow</button>
                                : <button onClick={() => {
                                    this.props.follow(u.id)
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
                        <div className={s.pageNumber}>
                            {pages.map(p => {
                                return <div
                                    className={this.props.currentPage === p && s.selectedPage}
                                    onClick={(e) => {this.onPageChanged(p);}}>
                                    |{p}</div>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        )

    }
}

export default UsersC;