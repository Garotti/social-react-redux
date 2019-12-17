import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import userPhoto from "../../../assets/images/qq.jpg";

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto}) => {
    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    };

    return (
        <div className={s.content}>
            <div className={s.descBlock}>
                <img src={profile.photos.large || userPhoto} alt="ava"/>
                <br/>
                {isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}
                <h4>{profile.aboutMe}</h4>
                <ProfileStatus status={status.data} updateStatus={updateStatus}/>
                <i>{profile.lookingForAJobDescription}</i>
            </div>
        </div>
    )
};
export default ProfileInfo;