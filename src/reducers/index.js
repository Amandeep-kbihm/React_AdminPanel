import {combineReducers} from 'redux'
import LoginReducer from './admin/login';
import ForgetPasswordReducer from './admin/forgetpassword';
import RecoverPasswordReducer from './admin/recoverpassword';

export default combineReducers({
    LoginReducer,
    ForgetPasswordReducer,
    RecoverPasswordReducer
})

