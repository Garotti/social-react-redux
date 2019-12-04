import React from 'react';
import * as axios from "axios";
import Header from "./Header";
import {connect} from "react-redux";
import {setAuthUserData, setUserProfile} from "../../redux/auth-reducer";

class HeaderContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true,
        })
            .then(res => {
                if (res.data.resultCode === 0) {
                    let {id, login, email} = res.data.data;
                    this.props.setAuthUserData(id, email, login);
                }
            });
        axios.get(`https://social-network.samuraijs.com/api/1.0/users`)
            .then(res => {
                this.props.setUserProfile(res.data);
            })
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

export default connect(mapStateToProps, {setAuthUserData,setUserProfile})(HeaderContainer);