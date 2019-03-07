export const CHECK_EMAIL = 'CHECK_EMAIL'
export const CHECK_EMAIL_FAILED = 'CHECK_EMAIL_FAILED'
export const CHECK_EMAIL_SUCCESS = 'CHECK_EMAIL_SUCCESS'
export const SET_MESSAGE = 'SET_MESSAGE'

export function checkemail(data){
    return{
        type: CHECK_EMAIL,
        data
    }
}

export function setmessage(msg){
    return{
        type: SET_MESSAGE,
        msg
    }
}
