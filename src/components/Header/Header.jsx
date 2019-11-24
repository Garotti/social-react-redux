import React from 'react';
import s from './Header.module.css'


const Header = () => {
    return (
        <header className={s.header}>
            <img src="https://vtol.org/images/dmImage/SourceImage/vfs-straight-small3.png" alt="logo"/>
        </header>
    );
};

export default Header;