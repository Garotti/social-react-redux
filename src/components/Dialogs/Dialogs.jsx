import React from 'react';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogsItem';
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";

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
        props.onSendNewMessage(values.newMessageBody)
    };

    if (!props.isAuth) return <Redirect  to={'/login'}/>;

    return (
        <div className={s.dialogs}>
            <div>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                <div>{messageElement}</div>
                <AddMessageFormRedux  onSubmit={addNewMessage}/>
            </div>
        </div>
    );
};

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={"textarea"}
                       name={"newMessageBody"}
                       placeholder={'enter your message'}
                />
            </div>
            <div>
                <button>Add message</button>
            </div>
        </form>
    )
};

const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm);

export default Dialogs;