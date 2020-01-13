import React, {Component} from 'react';
import Music from "./Music";
import {connect} from "react-redux";
import {getMusic, setMusicAC} from "../../redux/music-reducer";
import * as axios from "axios";
import {compose} from "redux";

class MusicContainer extends Component {

    componentDidMount() {
        this.props.getMusic();
    }

    render() {
        return(<>
            <Music music={this.props.music} />
        </>)
    }
}

let mapStateToProps = (state) => {
    return{
        music: state.musicPage.music
    }
};
//
// let mapDispatchToProps = (dispatch) => {
//     return {
//         setMusic: (music) => {
//             dispatch(setMusicAC(music))
//         }
//     }
// };

export default compose(connect(mapStateToProps, { setMusicAC, getMusic})
(MusicContainer));