import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";
import Preloader from "../common/Preloader/Preloader";

const Header = (props) => {

    return (
        <header className={s.header}>
            <img src="https://vtol.org/images/dmImage/SourceImage/vfs-straight-small3.png" alt="logo"/>
            <div className={s.qq}>
                { !props.profile ? <Preloader /> : <img src={props.profile.photos.small} alt="ava_small"/>}
                {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    );
};

export default Header;