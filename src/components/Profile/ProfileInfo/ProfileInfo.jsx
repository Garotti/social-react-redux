import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    return (
        <div className={s.content}>
            <div>
                <img
                    src="https://images.unsplash.com/photo-1500622944204-b135684e99fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                    alt=""/>
            </div>
            <div className={s.descBlock}>
                ava + description
            </div>
        </div>
    )
};

export default ProfileInfo;