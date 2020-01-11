import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";
import Preloader from "../common/Preloader/Preloader";

const Header = (props) => {

    return (
        <header className={s.header}>
            <img src="https://vtol.org/images/dmImage/SourceImage/vfs-straight-small3.png" alt="logo"/>
            <div className={s.headerPhoto}>
                { !props.profile
                    ? <Preloader />
                    : <img src={props.profile.photos.small} alt="ava_small"/>}
            </div>
            <div className={s.authLogin}>
                {props.isAuth
                    ? <div> <span>{props.login}</span> <button className={s.logout} onClick={props.logout}>Log out</button></div>
                    : <NavLink className={s.login} to={'/login'}>Login</NavLink>}
            </div>
        </header>
    );
};

export default Header;