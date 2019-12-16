import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USERS_PROFILE = 'SET_USERS_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    posts: [
        {id: 1, message: 'What\'s up', likeCount: 12},
        {id: 2, message: 'heelo', likeCount: 4},
        {id: 3, message: 'qwert', likeCount: 233},
    ],
    profile: null,
    status: 'qqw',
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {id: 5, message: action.newPostText, likeCount: 3};
            return {
                ...state,
                posts: [newPost, ...state.posts],
            };
        case SET_USERS_PROFILE:
            return {
                ...state,
                profile: action.profile
            };
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            };
        default:
            return state;
    }
};

export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText});
export const setUsersProfile = (profile) => ({type: SET_USERS_PROFILE, profile});
export const setUsersStatus = (status) => ({type: SET_STATUS, status});

export const profileUser = (userId) => async (dispatch) => {
    let data = await profileAPI.profileUser(userId);
    dispatch(setUsersProfile(data));
};

export const getStatus = (userId) => async (dispatch) => {
    let data = await profileAPI.getUserStatus(userId);
    dispatch(setUsersStatus(data));
};
export const updateStatus = (status) => async (dispatch) => {
    let data = await profileAPI.updateStatus(status);
    if (data.resultCode === 0) {
        dispatch(setUsersStatus(status));
    }
};

export default profileReducer;