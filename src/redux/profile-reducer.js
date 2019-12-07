import {usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USERS_PROFILE = 'SET_USERS_PROFILE';

let initialState = {
    posts: [
        {id: 1, message: 'What\'s up', likeCount: 12},
        {id: 2, message: 'heelo', likeCount: 4},
        {id: 3, message: 'qwert', likeCount: 233},
    ],
    newPostText: 'create me pls',
    profile: null
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {id: 5, message: state.newPostText, likeCount: 3};
            return {
                ...state,
                newPostText: '',
                posts: [newPost, ...state.posts],
            };
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            };
        case SET_USERS_PROFILE:
            return {
                ...state,
                profile : action.profile
            };
        default:
            return state;
    }
};

export const addPostActionCreator = () => ({type: ADD_POST});
export const setUsersProfile = (profile) => ({type: SET_USERS_PROFILE, profile});
export const updateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text});

export const profileUser = (userId) => {
     return (dispatch) => {
         usersAPI.profileUser(userId)
             .then(data => {
                 dispatch(setUsersProfile(data));
             });
     }
};

export default profileReducer;