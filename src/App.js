import React from 'react';
import './App.css';
import Particles from 'react-particles-js';
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import FriendsContainer from "./components/Friends/FriendsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";

const App = (props) => {
    return (
        <div className={''}>
            <div className={'particles'}>
                <Particles params={particleOpt}/>
            </div>
            <div className={'app-wrapper'}>
                <Header/>
                <Navbar/>
                <div className={'app-wrapper-content '}>
                    <Route path={'/dialogs'}
                           render={() => <DialogsContainer/>}/>
                    <Route path={'/profile'}
                           render={() => <ProfileContainer/>}/>
                    <Route path={'/friends'}
                           render={() => <FriendsContainer/>}/>
                    <Route path={'/users'}
                           render={() => <UsersContainer />}/>

                </div>
            </div>
        </div>
    );
};


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
