import { all } from 'redux-saga/effects'
import Login from './admin/login'
import ForgetPassword from './admin/forgetpassword'

export default function* rootSaga() {
    yield all([
        Login(),
        ForgetPassword()
    ])
  }