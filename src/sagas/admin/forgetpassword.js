import { put, call, takeLatest, all } from 'redux-saga/effects'
import {
    CHECK_EMAIL,
    CHECK_EMAIL_SUCCESS,
    CHECK_EMAIL_FAILED
}from '../../actions/admin/forgetpassword'

const apiUrl = 'http://localhost:5000/admin/';

function checkemailData(getData){
    return fetch(`${apiUrl}forgetpassword`,
     {
         method: "PUT",
         headers:{ 
             "Content-Type": "application/json",
         },
         body: JSON.stringify(getData)
     })
     .then(res =>{
         return res.json()
     }) 
     .then(data => {
         return data
     })
 }
 export function* checkEmail(data){
    let getData = data.data
    const resp = yield call(checkemailData,getData)  
    if(resp.status) {
        yield put({ type: CHECK_EMAIL_SUCCESS, message: resp.message })
    } else {
        yield put({ type: CHECK_EMAIL_FAILED, error: resp.error})
    }  
}
export default function* watchIncrementAsync() {
    yield all([
        takeLatest(CHECK_EMAIL, checkEmail)
    ])
  
}