import Friends from "./Friends";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
};

const f2 = () => {

};


const FriendsContainer = compose(
    connect(mapStateToProps,f2),
    withAuthRedirect
)(Friends);

export default FriendsContainer;