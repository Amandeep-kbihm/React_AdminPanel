import {
    CHECK_EMAIL_SUCCESS,
    CHECK_EMAIL_FAILED,
    SET_MESSAGE
}from '../../actions/admin/forgetpassword'

const initialState = {
    error: "",
    message: "",
    successmsg: false
}

export default function ForgetPassword(state=initialState,action){
    switch(action.type){
        case CHECK_EMAIL_SUCCESS:
        console.log(action)
        return{
            ...state,
            message: action.message,
            successmsg: true
        }
        case CHECK_EMAIL_FAILED:
        return{
            ...state,
            error: action.error,
            successmsg: false
        }
        case SET_MESSAGE:
        return {
            ...state,
            successmsg: action.msg
        }
        default:
        return{
            ...state
        }
    }
}