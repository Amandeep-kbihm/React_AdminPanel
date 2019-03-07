import {combineReducers} from 'redux'
import LoginReducer from './admin/login';
import ForgetPasswordReducer from './admin/forgetpassword';

export default combineReducers({
    LoginReducer,
    ForgetPasswordReducer
})

