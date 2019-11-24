import React from 'react';
import s from '../Dialogs.module.css'

const Message = (props) => {



    return (
        <div>
            <div className={s.message}>
                <img src="https://i.kym-cdn.com/photos/images/original/001/008/986/45a.png" alt=""/>
                {props.message}
            </div>
            <div className={s.message2}>
                <img src="https://i.kym-cdn.com/photos/images/original/000/972/517/516.jpg" alt=""/>
                {props.message}
            </div>
        </div>
    )
};

export default Message;