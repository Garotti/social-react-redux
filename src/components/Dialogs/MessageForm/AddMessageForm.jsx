import {Field, reduxForm} from "redux-form";
import React from "react";
import {Textarea} from "../../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import s from '../Dialogs.module.css';

const maxLength100 = maxLengthCreator(100);

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       validate={[required, maxLength100]}
                       name={"newMessageBody"}
                       placeholder={'Write a message...'}
                       cols={50}
                       rows={2.5}
                       class={s.textarea}
                />
            </div>
            <div>
                {/*make button with sharp design*/}
                <button className={s.formSubmit}>Add message</button>
            </div>
        </form>
    )
};

export const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm);

