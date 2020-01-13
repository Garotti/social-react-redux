import {newsAPI} from '../api/api';

const SET_NEWS = "SET_NEWS";
const SET_STATUS = "SET_STATUS";

let initialState = {
    news: [],
    status: ""
};

const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NEWS: {
            return {
                ...state,
                news: [...state.news, ...action.news]
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        default:
            return state;
    }
};

export const setNewsAC = (news) => ({ type: SET_NEWS, news});
export const setStatusAC = (status) => ({ type: SET_STATUS, status});

export const getNews = () => async (dispatch) => {
    let data = await newsAPI.getNews();
    dispatch(setNewsAC(data.articles));
};

export default newsReducer;