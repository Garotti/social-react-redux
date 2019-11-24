import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'What\'s up niggas', likeCount: 12},
                {id: 2, message: 'heelo', likeCount: 4},
                {id: 3, message: 'qwert', likeCount: 233},
            ],
            newPostText: 'it-kamasutra.com'
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Dimon'},
                {id: 2, name: 'Andrey'},
                {id: 3, name: 'Sveta'},
                {id: 4, name: 'Tanatos'},
                {id: 5, name: 'Makar'},
            ],
            messages: [
                {id: 1, message: 'Hello'},
                {id: 2, message: 'What\'s up'},
                {id: 3, message: 'qwerty'},
                {id: 4, message: 'how are you?'},
                {id: 5, message: 'i\'m fune'},
            ],
            img: [
                {id: 1, img:"https://i.kym-cdn.com/photos/images/original/001/008/986/45a.png"},
                {id: 2, img:"https://i.kym-cdn.com/photos/images/original/000/972/517/516.jpg"},
            ],
            status: [
                {id: 1, status: 'oh my GOD'},
                {id: 2, status: 'What\'s up'},
                {id: 3, status: 'legend never die'},
                {id: 4, status: 'only god can judge me'},
                {id: 5, status: 'i\'m cool you know'},
            ],
            newMessageBody: ''
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('State changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }

};

// Action Creators

export default store;

window.store = store;
