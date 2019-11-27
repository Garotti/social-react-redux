import React from 'react';
import s from './Users.module.css';

let Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoUrl: 'https://images.fineartamerica.com/images-medium-large-5/rurik-arturas-slapsys.jpg',
                followed: true,
                fullName: 'Yura',
                status: "KOTD",
                location: {city: 'Lviv', country: 'Ukraine'}
            },
            {
                id: 2,
                photoUrl: 'http://www.kkovalev.ru/vladimir_kniaz.jpg',
                followed: true,
                fullName: 'Gena',
                status: 'don\'t busy',
                location: {city: 'Tallinn', country: 'Estonia'}
            },
            {
                id: 3,
                photoUrl: 'http://ruhistor.ru/images/war/pol/svyatoslav001.jpg',
                followed: false,
                fullName: 'Svyatoslav',
                status: 'create inc',
                location: {city: 'Kyiv', country: 'Ukraine'}
            },
        ]);
    }
    return (
        <div className={s.render}>
            <div>
                {props.users.map(u => <div key={u.id}>
                    <span>
                        <div className={s.photo}>
                            <img src={u.photo} alt={"user"}/>
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
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                            <div>{u.location.city}</div>
                            <div>{u.location.country}</div>
                        <span>

                        </span>
                    </span>
                </div>)}
            </div>
        </div>
    )
};

export default Users;