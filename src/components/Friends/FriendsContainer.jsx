import Friends from "./Friends";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
};

const f2 = () => {

};

let AuthRedirectComponent = withAuthRedirect(Friends);

const FriendsContainer = connect(mapStateToProps,f2)(AuthRedirectComponent);

export default FriendsContainer;