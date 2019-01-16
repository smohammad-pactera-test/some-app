import React from 'react';
import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {pageTypes, registerFormKeys} from "../constants";
import { Actions } from '../actions';
import vid from '../videos/water.mp4'

export default class RegisterPage extends React.Component {

    constructor(props){
        super(props);
        this.state={
            addedUsers:false,
            countTimer : 4,
            redirectPage : false
        }
    }

    onRegistration = () => {

        const {
            actions:{
                dispatchAction
            },
            form
        } = this.props;

        dispatchAction(Actions.ADD_USERS,form.userName);
        this.setState({
            addedUsers:true
        })

    }



    render() {
        const {
            form,
            onChangeHandler,
            onSubmitHandler,
            pageHandler
        } = this.props;



        if (this.state.addedUsers && this.state.countTimer>0){
           const _t =  setInterval(()=>{
                this.setState({
                    countTimer : this.state.countTimer - 1
                })
            },1000)
            if (this.state.countTimer === 1 ){
                clearInterval(_t);
                setTimeout(()=>{
                    pageHandler(pageTypes.login)
                },1000)
                return(
                    <p style = {{textAlign:'center'}}>User {form.userName} Added SucessFully . Redirecting to login page....  </p>
                )
            }

            return (
                <p style = {{textAlign:'center'}}>Adding users in {this.state.countTimer}  </p>
            )
        }


        if(this.state.redirectPage){
            pageHandler(pageTypes.login)
        }

        const isFormFull = () => {
           return  Object.values(form).every(item=>!!item)
        }

        return (
            <div>
                <div className="bg-video">
                    <video className="bg-video__content" autoPlay muted loop>
                        <source src={vid} type="video/mp4"/>
                    </video>
                </div>
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-12'>
                        <h1>Register Yourself </h1>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm-12'>
                        <div className='form'>
                            <form>
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlInput1">User Name: </label>
                                    <input type="email" className="form-control"
                                           name={registerFormKeys.userName}
                                           onChange={({target: {name, value}}) => {
                                               onChangeHandler({name, value})
                                           }}
                                           id="exampleFormControlInput1"
                                           placeholder="name@example.com"
                                           value={form.userName}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlInput1">password</label>
                                    <input type="password" className="form-control"
                                           onChange={({target: {name, value}}) => {
                                               onChangeHandler({name, value})
                                           }}
                                           id="exampleFormControlInput1"
                                           placeholder="name@example.com" name={registerFormKeys.password}
                                           value={form.password}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlInput1">PhoneNumber</label>
                                    <input type="number" className="form-control"
                                           onChange={({target: {name, value}}) => {
                                               onChangeHandler({name, value})
                                           }}
                                           id="exampleFormControlInput1"
                                           placeholder="name@example.com" name={registerFormKeys.phoneNumber}
                                           value={form.phoneNumber}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlInput1"> Email </label>
                                    <input type="email" className="form-control"
                                           onChange={({target: {name, value}}) => {
                                               onChangeHandler({name, value})
                                           }}
                                           id="exampleFormControlInput1"
                                           placeholder="name@example.com" name={registerFormKeys.email}
                                           value={form.email}/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <button className='btn btn-dark'  disabled={!isFormFull() }  onClick={ () => this.onRegistration() }>Submit</button>
                &nbsp; &nbsp;
                <button className='btn btn-danger' onClick={()=> pageHandler(pageTypes.login)}>Cancel</button>
            </div>
            </div>
        );
    }
}