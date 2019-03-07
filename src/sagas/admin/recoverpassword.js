import { put, call, takeLatest, all } from 'redux-saga/effects'

import {
    RECOVER_PASSWORD,
    RECOVER_PASSWORD_SUCCESS,
    RECOVER_PASSWORD_FAILED
}from '../../actions/admin/recoverpassword'

const apiUrl  = 'http://localhost:5000/admin/recoverpassword/';

function recoverpassworddata(action){
    return fetch(`${apiUrl}${action.token}`,
     {
        method: "PUT",
        headers:{ 
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            password: action.password
        })
     })
     .then(res =>{
        return res.json()
     }) 
     .then(data => {
        return data
     })
 }
 export function* recoverPassword(action){
    
    const resp = yield call(recoverpassworddata, action)  
    if(resp.status) {
        yield put({ type: RECOVER_PASSWORD_SUCCESS, message: resp.message })
    } else {
        yield put({ type: RECOVER_PASSWORD_FAILED, error: resp.error})
    }  
}
export default function* watchIncrementAsync() {
    yield all([
        takeLatest(RECOVER_PASSWORD, recoverPassword)
    ])
}