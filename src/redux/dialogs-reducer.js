const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Dima', img: 'https://www.gametech.ru/sadm_images/StarcraftMassRecall_base.jpg'},
        {id: 2, name: 'Andrey', img: 'https://www.gametech.ru/sadm_images/StarcraftMassRecall_base.jpg'},
        {id: 3, name: 'Sveta',img: 'https://www.gametech.ru/sadm_images/StarcraftMassRecall_base.jpg' },
        {id: 4, name: 'Melania', img: 'https://www.gametech.ru/sadm_images/StarcraftMassRecall_base.jpg'},
        {id: 5, name: 'Makar', img: 'https://www.gametech.ru/sadm_images/StarcraftMassRecall_base.jpg'},
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
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: body}],
            };
        default:
            return state;
    }
};

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody});

export default dialogsReducer;