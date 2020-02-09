import React from 'react';
import {IoIosPlayCircle} from "react-icons/all";
import s from './Music.module.css'

const Music = (props) => {

    debugger;
    return (
        <div>
            <div>
                {props.music.map(m => <div className={s.main}>
                    <h4 className={s.artistName}>{m.artistName}</h4>
                    <p className={s.trackName}>{m.name}</p>
                    <a className={s.icon} href={m.previewURL}><IoIosPlayCircle/></a>
                </div>)}
            </div>
        </div>
    )
};

export default Music;