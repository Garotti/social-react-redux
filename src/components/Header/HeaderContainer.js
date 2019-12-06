import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {setAuthUserData, setUserProfile} from "../../redux/auth-reducer";
import {usersAPI} from "../../api/api";

class HeaderContainer extends React.Component {

    componentDidMount() {
        usersAPI.authUser()
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, login, email} = data.data;
                    this.props.setAuthUserData(id, email, login);
                }
            });
        //** maybe getUsers() work wrong
        usersAPI.getUsers()
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