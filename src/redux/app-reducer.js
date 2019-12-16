import {getAuthUserData} from "./auth-reducer";

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA';

let initialState = {
    initialized: false
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {
                ...state,
                initialized: true,
            };
        default:
            return state;
    }
};

export const initializedSuccess = () => ({type: SET_AUTH_USER_DATA});
export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData());
    Promise.all([promise])
        .then(() => {
            dispatch(initializedSuccess);
        });

};

export default appReducer;