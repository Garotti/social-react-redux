import React from 'react';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogsItem';
import {Redirect} from "react-router-dom";
import {AddMessageFormRedux} from "./MessageForm/AddMessageForm";

const Dialogs = (props) => {
    let state = props.dialogsPage;

    //--Отрисовка стейта
    let dialogsElement = state.dialogs.map(
        dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id}/>
    );
    let messageElement = state.messages.map(res => {
       return (
           <Message id={res.id} key={res.id} message={res.message}/>
       )
    });//--

    let addNewMessage = (values) => {
        props.onSendNewMessage(values.newMessageBody);
        values.newMessageBody = "";
    };
    if (!props.isAuth) return <Redirect  to={'/login'}/>;

    return (
        <div className={s.dialogs}>
            <div>
                {dialogsElement}
            </div>
            <hr/>
            <div className={s.messages}>
                <div>{messageElement}</div>
                <AddMessageFormRedux  onSubmit={addNewMessage}/>
            </div>
        </div>
    );
};

export default Dialogs;