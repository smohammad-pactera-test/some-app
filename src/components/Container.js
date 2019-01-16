import React from 'react';
import RegisterPage from './RegisterPage'
import '../../node_modules/bootstrap/dist/css/bootstrap-grid.min.css'
import {Actions} from "../actions";
import {registerForm, pageTypes} from "../constants";
import LoginPage from './LoginPage'
import AdminPage from "./AdminPage";

export default class Container extends React.Component {


    onChangeHandler = ({name, value}) => {
        const {actions: {dispatchAction}} = this.props;
        dispatchAction(Actions.ON_CHANGE, {name, value});
    }

    pageHandler = (type) => {
        const {actions: {dispatchAction}} = this.props;
        if (type === 'registerPage') {
            dispatchAction(Actions.SET_FORM, {...registerForm})
        }
        dispatchAction(Actions.SET_PAGE_TYPE, type)
    }

    onSubmitHandler = ({type}) => {
        const {actions: {dispatchAction}} = this.props;
        if (type === 'registerPage') {
            dispatchAction(Actions.SET_FORM, {...registerForm})
            dispatchAction(Actions.SET_PAGE_TYPE, pageTypes.login)
        }
    }

    render() {


        const {
            pageType,
            form,
            users_list
        } = this.props;

        const loginProps = {
            ...this.props,
            pageHandler: this.pageHandler,
            onSubmitHandler: this.onSubmitHandler,
            onChangeHandler: this.onChangeHandler
        }

        const registerPageProps = {
            ...this.props,
            onChangeHandler: this.onChangeHandler,
            pageHandler: this.pageHandler,
            onSubmitHandler: this.onSubmitHandler
        }

        switch (pageType) {
            case 'registerPage':
                return (<RegisterPage {...registerPageProps} />)
            case pageTypes.adminPage :
                return (<AdminPage {...loginProps}/>)
            default :
                return (
                    <LoginPage {...loginProps}  />
                )
        }


    }
}