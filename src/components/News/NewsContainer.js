import React, {Component} from 'react';
import {connect} from "react-redux";
import News from "./News";
import {compose} from "redux";
import * as axios from "axios";
import {getNews, setNewsAC, setStatusAC} from "../../redux/news-reducer";
import {newsAPI} from '../../api/api';

class NewsContainer extends Component {
    componentDidMount() {
         this.props.getNews();
    }


    render() {
        return(<>
               <News
                   news={this.props.news}
                   setNews={this.props.setNewsAC}
                   status={this.props.status}
               />
            </>
        )
    }
}


let mapStateToProps = (state) => {
    return{
        news: state.newsPage.news,
        status: state.newsPage.status
    }
};
//
// let mapDispatchToProps = (dispatch) => {
//     return {
//         setNews: (news) => {
//             dispatch(setNewsAC(news))
//         },
//         setStatus: (status) => {
//             dispatch(setStatusAC(status))
//         }
//     }
// };

export default compose(connect(mapStateToProps,{setNewsAC,setStatusAC,getNews})
(NewsContainer));