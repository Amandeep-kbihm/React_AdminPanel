import {
    RECOVER_PASSWORD,
    RECOVER_PASSWORD_SUCCESS,
    RECOVER_PASSWORD_FAILED,
    SET_RECOVER_PASSWORD
} from '../../actions/admin/recoverpassword'

export const initialState = {
    message: "",
    error: "",
    success: false,
}

export default function RecoverPassword(state=initialState,action){
    switch(action.type){
        case RECOVER_PASSWORD_SUCCESS:
        return{
            ...state,
            message: action.data,
            success: true
        }
        case RECOVER_PASSWORD_FAILED:
            return{
                ...state,
            success: false
            }
        case SET_RECOVER_PASSWORD:
        return{
            success: action.success
        }
        default:
        return{
            ...state
        }
    }
}