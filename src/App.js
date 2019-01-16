import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import configStore from './store';
import Main from './components';
import '../src/css/main.css'


export const CustomProvider = ({ children }) => {
    return (
        <Provider store={ configStore() }>
            { children }
        </Provider>
    );

};



class App extends Component {
    render() {
        return (
            <CustomProvider>
                <Main />
            </CustomProvider>
        );
    }
}

export default App;
