import { getProfile, getMails } from "./api";

export const LOAD_PROFILE_BIGIN = 'LOAD_PROFILE_BIGIN';
export const LOAD_PROFILE_SUCCESS = 'LOAD_PROFILE_SUCCESS';
export const LOAD_PROFILE_ERROR = 'LOAD_PROFILE_ERROR';

export const LOAD_MAILS_BIGIN = 'LOAD_MAILS_BIGIN';
export const LOAD_MAILS_SUCCESS = 'LOAD_MAILS_SUCCESS';
export const LOAD_MAILS_ERROR = 'LOAD_MAILS_ERROR';

export const loadProfile = () => {
    return dispatch => {
        dispatch({ type: LOAD_PROFILE_BIGIN });
        getProfile()
        .then( profile => {
            dispatch({ type: LOAD_PROFILE_SUCCESS, payload: profile });
        })
        .catch(error => {
            dispatch({ type: LOAD_PROFILE_ERROR, error });
        })
    }
}
export const loadMails = () => {
    return dispatch => {
        dispatch({ type: LOAD_MAILS_BIGIN });
        getMails()
        .then( mails => {
            dispatch({ type: LOAD_MAILS_SUCCESS, payload: mails });
        })
        .catch(error => {
            dispatch({ type: LOAD_MAILS_ERROR, error });
        })
    }
}