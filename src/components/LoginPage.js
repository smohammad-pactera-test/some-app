import React from 'react';
import {loginPageKeys, pageTypes, registerFormKeys, testLoginNames} from "../constants";

export default class LoginPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            blink: false
        }
    }

    testLoginNamesForLogin = () => {

        const {form, onSubmitHandler, pageHandler, users_list} = this.props;
        const _findName = users_list.findIndex((item) => item === form.loginName)
        if (_findName > -1) {
            pageHandler(pageTypes.adminPage)
        }
        else {
            this.setState({
                blink: true
            })
        }
    }


    render() {
        const {
            onChangeHandler,
            onSubmitHandler,
            form,
            pageHandler

        } = this.props;
        return (
            <div className='blue-flame'>
                <div>
                    <div className='container'>
                        <h1 className="display-4">Login</h1>
                        <br/>
                        <div className='row'>
                            <div className='col-sm-12'>
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="exampleFormControlInput1">User Name: </label>
                                        <input type="email" className="form-control"
                                               name={loginPageKeys.loginName}
                                               onChange={({target: {name, value}}) => {
                                                   onChangeHandler({name, value})
                                               }}
                                               id="exampleFormControlInput1"
                                               placeholder="name@example.com"
                                               value={form.loginName}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleFormControlInput1">Password: </label>
                                        <input type="password" className="form-control"
                                               name={loginPageKeys.loginPassword}
                                               onChange={({target: {name, value}}) => {
                                                   onChangeHandler({name, value})
                                               }}
                                               id="exampleFormControlInput1"
                                               placeholder="name@example.com"
                                               value={form.loginPassword}/>
                                    </div>
                                </form>
                            </div>

                        </div>

                        <div className='row'>
                            <div className='col-sm-12'>
                                <button className='btn btn-dark' onClick={() => this.testLoginNamesForLogin()}>
                                    Login
                                </button>
                                &nbsp; &nbsp;
                                <button className={`btn btn-danger ${this.state.blink ? 'blink' : ''}`}
                                        onClick={() => pageHandler(pageTypes.registerPage)}>
                                    New User :
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}