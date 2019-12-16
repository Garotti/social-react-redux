import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, profileUser, updateStatus} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {getAuthUserData} from "../../redux/auth-reducer";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId; // переданий в URL id
        if (!userId) {
            userId = this.props.autorizedUserId;
            if (!userId) {
                this.props.history.push("/login");
            }
        }
        this.props.profileUser(userId);
        this.props.getStatus(userId);
    }

    render() {
        return (
            <div>
                <Profile {...this.props}
                         profile={this.props.profile}
                         status={this.props.status}
                         updateStatus={this.props.updateStatus}
                />
            </div>
        );
    }
}
let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    autorizedUserId: state.auth.userId,
});


export default compose(connect(mapStateToProps,
    {profileUser, getStatus, updateStatus,getAuthUserData}),
    withRouter,
    withAuthRedirect
)(ProfileContainer);
