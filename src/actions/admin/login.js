export const LOGIN = 'LOGIN'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILED = 'LOGIN_FAILED'
export const SET_LOGIN = 'SET_LOGIN'

export function login(data){
    return {
        type: LOGIN,
        data
    }
}

export function setLogin(data){
    return{
        type: SET_LOGIN,
        data
    }
}



