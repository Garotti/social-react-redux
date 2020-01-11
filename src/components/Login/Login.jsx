import React from 'react';
import {Field, reduxForm} from "redux-form";
import {createField, Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {compose} from "redux";

import s from '../common/FormsControls/FormsControls.module.css';
import style from './Login.module.css';

const LoginForm = ({handleSubmit, error, captchaUrl}) => {
    return (
        <form className={style.loginForm} onSubmit={handleSubmit}>
            {createField("Email", "email", [required], Input)}
            {createField("Password", "password", [required], Input, {type: "password"})}
            {createField(null, "rememberMe", null, Input, {type: "checkbox"}, "remember me")}
            {captchaUrl && <img src={captchaUrl} alt="captcha"/>}
            {captchaUrl && createField("Enter symbols", "captcha", [required], Input, {})}

            {error && <div className={s.formSummaryError}>
                {error}
            </div>}
            <div>
                <button className={style.login}>Login</button>
            </div>
        </form>
    )
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = (props,) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
    };

    if (props.isAuth) {
        return <Redirect to={`/profile`}/>
    }
    return <div>
        <h1 className={style.loginHeader}>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
    </div>
};

const mapStateToProps = (state) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
});

export default compose(connect(mapStateToProps,{login})(Login));