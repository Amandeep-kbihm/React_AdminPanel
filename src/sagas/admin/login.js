import { put, call, takeLatest, all } from 'redux-saga/effects'
import {
    LOGIN,
    LOGIN_SUCCESS,
    LOGIN_FAILED
}from '../../actions/admin/login'

const apiUrl = 'http://localhost:5000/admin/';

function loginData(getData){
   return fetch(`${apiUrl}login`,
    {
        method: "POST",
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
export function* login(data){
    const getData = data.data
    const resp = yield call(loginData,getData)  
    if(resp.status) {
        localStorage.setItem('Token', resp.data.token);
        yield put({ type: LOGIN_SUCCESS, data: resp.data })
    } else {
        yield put({ type: LOGIN_FAILED, error: resp.error})
    }  
}

export default function* watchIncrementAsync() {
    yield all([
        takeLatest(LOGIN, login)
    ])
}