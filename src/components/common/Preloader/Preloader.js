import preloader from "../../../assets/images/Gear-0.2s-131px.svg";
import React from "react";
import s from './Preloader.module.css';

let Preloader = (props) => {
    return (<div className={s.small}>
            <img src={preloader} alt={'preloader'}/>
        </div>
    )
};
export default Preloader;