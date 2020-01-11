import React, {useState} from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import userPhoto from "../../../assets/images/qq.jpg";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {

    let [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    };

    const onSubmit = (formData) => {
        saveProfile(formData).then(() => {
            setEditMode(false);
        })
    };

    return (
        <div className={s.content}>
            <div className={s.descBlock}>
                    <div>
                        <img src={profile.photos.large || userPhoto} alt="ava"/><br/>
                    </div>
                    <div>
                    {editMode
                        ? <ProfileDataForm initialValues={profile}
                                           profile={profile}
                                           onSubmit={onSubmit}/>
                        : <ProfileData goToEditMode={() => {
                            setEditMode(true)
                        }}
                                       profile={profile}
                                       isOwner={isOwner}/>}
                    </div>
                {/*<ProfileStatus status={status.data} updateStatus={updateStatus}/>*/}
                {/*<i>{profile.lookingForAJobDescription}</i>*/}
            </div>
            {isOwner && <input className={s.chooseFile} type={"file"} onChange={onMainPhotoSelected}/>}
        </div>
    )
};

const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return (
        <div className={s.profileInfo}>
            {isOwner && <div>
                <button className={s.editButton} onClick={goToEditMode}>edit</button>
            </div>}
            <div>
                <b>Full name</b>: {profile.fullName}
            </div>
            <div>
                <b>Looking for a job</b>: {profile.lookingForAJob ? "yes" : "no"}
            </div>
            {profile.lookingForAJob &&
            <div>
                <b>My professional skills</b>: {profile.lookingForAJobDescription}
            </div>
            }
            <div>
                <b>About me</b>: {profile.aboutMe}
            </div>
            <div>
                <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
            })}
            </div>
        </div>
    )
};

export const Contact = ({contactTitle, contactValue}) => {
    return <div className={s.contact}><b>{contactTitle}</b>: {contactValue}</div>
};

export default ProfileInfo;