export const RECOVER_PASSWORD = 'RECOVER_PASSWORD'
export const RECOVER_PASSWORD_SUCCESS = 'RECOVER_PASSWORD_SUCCESS'
export const RECOVER_PASSWORD_FAILED = 'RECOVER_PASSWORD_FAILED'
export const SET_RECOVER_PASSWORD = 'SET_RECOVER_PASSWORD'

export function recoverpassword(token,password){
    return{
        type: RECOVER_PASSWORD,
        token,
        password
    }
}

export function setrecoverpassword(success){
    return{
        type: SET_RECOVER_PASSWORD,
        success
    }
}