import Friends from "./Friends";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
};

const f2 = () => {

};

const FriendsContainer = connect(mapStateToProps,f2)(Friends);

export default FriendsContainer;