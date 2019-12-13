import {authAPI, usersAPI} from "../api/api";
import {stopSubmit} from "redux-form";

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
                ...action.payload,
            };
        default:
            return state;
    }
};

export const setAuthUserData = (userId, email, login, isAuth) => ({type: SET_AUTH_USER_DATA, payload: {userId, email, login, isAuth}});
export const getAuthUserData = () => (dispatch) => {
    return authAPI.me()
        .then(res => {
            if (res.data.resultCode === 0) {
                let {id,login, email} = res.data.data;
                dispatch(setAuthUserData(id, email, login, true));
            }
        });
};

export const login = (email,password,rememberMe,userId) => (dispatch) => {
    authAPI.login(email,password,rememberMe,userId)
        .then(res => {
            if (res.data.resultCode === 0) {
                userId = res.data.data.userId;
                dispatch(getAuthUserData(userId));
            } else {
                let message = res.data.messages.length > 0 ? res.data.messages[0] : "Some error";
                dispatch(stopSubmit("login", {_error: message}));
            }
        });
};

export const logout = () => (dispatch) => {
    authAPI.logout()
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
        });
};

export default authReducer;