import React from 'react';
import './App.css';
import Particles from 'react-particles-js';
import Navbar from './components/Navbar/Navbar'
import {Redirect, Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import FriendsContainer from "./components/Friends/FriendsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

const App = () => {
    return (
        <div className={''}>
            <div className={'particles'}>
                <Particles params={particleOpt}/>
            </div>
            <div className={'app-wrapper'}>
                <HeaderContainer />
                <Navbar/>
                <div className={'app-wrapper-content '}>
                    <Redirect from={'/'} to={'/profile'} />
                    <Route path={'/dialogs'}
                           render={() => <DialogsContainer/>}/>
                    <Route path={'/profile/:userId?'}
                           render={() => <ProfileContainer/>}/>
                    <Route path={'/friends'}
                           render={() => <FriendsContainer/>}/>
                    <Route path={'/users'}
                           render={() => <UsersContainer/>}/>

                </div>
            </div>
        </div>
    );
};
// Redirect work wrong after refresh

const particleOpt = {
    particles: {
        number: {
            value: 150,
            density: {
                enable: true,
                value_area: 800
            }
        }
    }
};

export default App;
