import {Actions} from '../actions'
import {loginPageProps, registerForm,pageTypes,testLoginNames} from '../constants'

const pageType = (state = pageTypes.login, action) => {

    switch (action.type) {
        case Actions.SET_PAGE_TYPE:
            return action.payload;

        default :
            return state;
    }
}


const form = (state = {...loginPageProps}, action) => {

    switch (action.type) {
        case Actions.ON_CHANGE:
             return {
                 ...state,
                 [action.payload.name] : action.payload.value
             }

        case Actions.SET_FORM:
            return action.payload

        case Actions.SET_PAGE_TYPE:

        default :
            return state
    }
}

const users_list = (state = testLoginNames , action) => {
        switch (action.type) {
            case Actions.ADD_USERS:
                return [
                    ...testLoginNames,
                    action.payload
                ]
            default :
                return state
        }
}


export default {

    pageType,
    form,
    users_list

}