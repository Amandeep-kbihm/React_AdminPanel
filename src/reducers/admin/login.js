import {
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    SET_LOGIN,
}from '../../actions/admin/login'

const initialState = {
    token : "",
    admin: "",
    success: false,
    error: "",
    loading: false,
    message: ""
}

export default function Login(state=initialState,action){
    switch(action.type){
        case LOGIN_SUCCESS:
        return{
            ...state,
            ...initialState,
            token: action.data.token,
            admin: action.data.user,
            success: true
        }
        case LOGIN_FAILED:
        return{
            ...state,
            ...initialState,
            error: action.error
        }
        case SET_LOGIN:
        return{
            ...state,
            success: action.data
        }
        default:
        return{
            ...state
        }
    }
} 