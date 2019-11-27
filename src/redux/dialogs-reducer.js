const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

let initialState = {
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
        {id: 1, img: "https://i.kym-cdn.com/photos/images/original/001/008/986/45a.png"},
        {id: 2, img: "https://i.kym-cdn.com/photos/images/original/000/972/517/516.jpg"},
    ],
    status: [
        {id: 1, status: 'oh my GOD'},
        {id: 2, status: 'What\'s up'},
        {id: 3, status: 'wag1'},
        {id: 4, status: 'only GOD can judge me'},
        {id: 5, status: 'Study the blade'},
    ],
    newMessageBody: ''
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 6, message: body}]
            };
        case UPDATE_NEW_MESSAGE_BODY:
            return { // create copy of state
                ...state,
                newMessageBody: action.body
            };
        default:
            return state;
    }
};

export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (body) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body});


export default dialogsReducer;