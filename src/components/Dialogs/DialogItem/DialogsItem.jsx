import React from 'react';
import s from '../Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = `/dialogs/${props.id}`;
    return (
        <div className={window.location.pathname === path && s.active}>
            <NavLink className={`${s.navlink}`}
                     to={`/dialogs/${props.id}`}>
                <div className={s.dialog}>
                    {props.name}
                </div>
            </NavLink>
        </div>
    );
};

export default DialogItem;