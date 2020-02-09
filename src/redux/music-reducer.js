import {musicAPI} from "../api/api";

const SET_MUSIC = 'SET_MUSIC';

let initialState = {
    music: [],
    pageSize: 10,
    totalCount: 99,
    currentPage: 1
};

const musicReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_MUSIC: {
            return{
                ...state,
                music: [...state.music, ...action.music]
            }
        }
        default:
            return state;
    }
};

export const setMusicAC = (music) => ({type: SET_MUSIC, music});

export const getMusic = () => async (dispatch) => {
    let data = await musicAPI.getMusic();
    dispatch(setMusicAC(data.tracks))
};

export default musicReducer;