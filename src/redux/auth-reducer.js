import {usersAPI} from "../api/api";

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    profile: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA :
            return {
                ...state,
                ...action.data,
                isAuth: true
                };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile,
            };
        default:
            return state;
    }
};

export const setAuthUserData = (userId, email, login) => ({type: SET_AUTH_USER_DATA, data: {userId,email,login}});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});


export const getAuthUserData = () => {
    return (dispatch) => {
        usersAPI.authUser()
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, login, email} = data.data;
                    dispatch(setAuthUserData(id, email, login));
                }
            });
    }
};

export default authReducer;