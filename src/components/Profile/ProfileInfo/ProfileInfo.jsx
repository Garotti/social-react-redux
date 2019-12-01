import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div className={s.content}>
            <div className={s.descBlock}>
                <img src={props.profile.photos.large} alt="ava"/> } <br/>
                <h4>{props.profile.aboutMe}</h4>
                <i>{props.profile.lookingForAJobDescription}</i>
            </div>
        </div>
    )
};

export default ProfileInfo;