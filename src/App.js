import React from 'react';
import './App.css';
import Particles from 'react-particles-js';
import Navbar from './components/Navbar/Navbar'
import {Redirect, Route, withRouter} from "react-router-dom";
import FriendsContainer from "./components/Friends/FriendsContainer";
import LoginPage from "./components/Login/Login";
import {connect} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import {compose} from "redux";
import HeaderContainer from "./components/Header/HeaderContainer";
import UsersContainer from "./components/Users/UsersContainer";
import {withSuspense} from "./hoc/withSuspense";
import NewsContainer from "./components/News/NewsContainer";
import MusicContainer from "./components/Music/MusicContainer";

const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"));
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"));


class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        // if (!this.props.initialized){
        //     return <Preloader />
        // }
        return (
            <div className={''}>
                <div className={'particles'}>
                    <Particles params={particleOpt}/>
                </div>
                <div className={'app-wrapper'}>
                    <HeaderContainer/>
                    <Navbar/>
                    <div className={'app-wrapper-content '}>
                        {/*<Redirect from={'/'} to={'/friends'}/>*/}
                        <Route path={'/dialogs'}
                               render={withSuspense(DialogsContainer)}/>
                        <Route path={'/profile/:userId?'}
                               render={withSuspense(ProfileContainer)}/>
                        <Route path={'/friends'}
                               render={() => <FriendsContainer/>}/>
                        <Route path={'/users'}
                               render={() => <UsersContainer/>}/>
                        <Route path={'/news'}
                               render={() => <NewsContainer/>}/>
                        <Route path={'/login'}
                               render={() => <LoginPage/>}/>
                        <Route path={'/music'}
                               render={() => <MusicContainer/>}/>
                    </div>
                </div>
            </div>
        );
    }
}


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

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
});

export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);
