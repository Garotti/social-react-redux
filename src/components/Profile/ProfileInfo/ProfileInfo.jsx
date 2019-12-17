import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = ({profile, status, updateStatus}) => {
    if (!profile) {
        return <Preloader/>
    }
    return (
        <div className={s.content}>
            <div className={s.descBlock}>
                {!profile.photos.large ? <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkuXGpKBmltWiDRcpx7zrbSAbeBYnS_KQL4ItAAXn1t6RyRE0&s" alt="ava"/></div>
                    : <img src={profile.photos.large} alt="ava"/> }<br/>
                <h4>{profile.aboutMe}</h4>
                <ProfileStatus status={status.data} updateStatus={updateStatus}/>
                <i>{profile.lookingForAJobDescription}</i>
            </div>
        </div>
    )
};
export default ProfileInfo;