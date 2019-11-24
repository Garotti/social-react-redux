import React from 'react';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogsItem';

const Dialogs = (props) => {

    let state = props.dialogsPage;
    let newMessageBody = state.newMessageBody;

    //--Отрисовка стейта
    let dialogsElement = state.dialogs.map(
        dialog => <DialogItem name={dialog.name} id={dialog.id}/>
    );
    let messageElement = state.messages.map(res => {
       return (
           <Message id={res.id} message={res.message}/>
       )
    });//--

    //-F-arrow functions
    let onSendMessageClick = () => {
        props.onSendNewMessage();
    };

    let onNewMessageChange = (e) => {
        const body = e.target.value;
        props.updateNewMessageBody(body);
    }; //-F-

    return (
        <div className={s.dialogs}>
            <div>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                <div>{messageElement}</div>
                <div className={s.messageArea}>
                    <textarea value={newMessageBody} onChange={onNewMessageChange} cols="50" rows="5" placeholder={'enter your message'}/>
                    <button onClick={onSendMessageClick}>Add message</button>
                </div>
            </div>

        </div>
    );
};

export default Dialogs;