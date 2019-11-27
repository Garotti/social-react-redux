const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {id: 1, message: 'What\'s up', likeCount: 12},
        {id: 2, message: 'heelo', likeCount: 4},
        {id: 3, message: 'qwert', likeCount: 233},
    ],
    newPostText: 'create me pls'
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {id: 5, message: state.newPostText, likeCount: 3};
            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, newPost],
            };
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            };
        default:
            return state;
    }
};

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text});

export default profileReducer;