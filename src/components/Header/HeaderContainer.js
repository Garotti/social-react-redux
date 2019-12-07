import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUserData, setUserProfile} from "../../redux/auth-reducer";

class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.getAuthUserData();
    }

    render() {
        return (
            <Header {...this.props} profile={this.props.profile}/>
        );
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    profile: state.profilePage.profile
});

export default connect(mapStateToProps,
    {
        setUserProfile, getAuthUserData
    })(HeaderContainer);