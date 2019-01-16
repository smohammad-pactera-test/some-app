import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers/root';


export default () => {

    const initialState = {};
    const middleware = [  ];
    const enhancers = [];



    {
        const devToolsExtension = window.devToolsExtension;

        if (typeof devToolsExtension === 'function') {
            enhancers.push(devToolsExtension());
        }
    }


    const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers);

    return createStore(
        rootReducer,
        initialState,
        composedEnhancers
    );
};
