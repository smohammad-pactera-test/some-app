import React from 'react';
import {loginPageProps, pageTypes} from "../constants";
import {Actions} from "../actions";

export default  class AdminPage extends  React.Component{



    render() {

        const {
            form,
            pageHandler
        } = this.props;

        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-12'>
                        <h1>Hello {form.loginName}! Welcome back. </h1>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm-12'>
                        <button className='btn btn-danger' onClick={()=> { pageHandler(pageTypes.login)}}>Go back</button>
                    </div>
                </div>

            </div>
        );
    }


}