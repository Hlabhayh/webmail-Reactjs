import { getProfile, getMails } from '../api';

export const LOAD_PROFILE_BIGIN = 'LOAD_PROFILE_BIGIN';
export const LOAD_PROFILE_SUCCESS = 'LOAD_PROFILE_SUCCESS';
export const LOAD_PROFILE_ERROR = 'LOAD_PROFILE_ERROR';

export const LOAD_MAILS_BIGIN = 'LOAD_MAILS_BIGIN';
export const LOAD_MAILS_SUCCESS = 'LOAD_MAILS_SUCCESS';
export const LOAD_MAILS_ERROR = 'LOAD_MAILS_ERROR';

export const ON_CHANGE_SECTION = 'ON_CHANGE_SECTION';
export const ON_PAGE_CHANGE = 'ON_PAGE_CHANGE';

export const ON_SEARCH = 'ON_SEARCH';

export const loadProfile = () => {
  return (dispatch) => {
    dispatch({ type: LOAD_PROFILE_BIGIN });
    getProfile()
      .then((profile) => {
        dispatch({ type: LOAD_PROFILE_SUCCESS, payload: profile });
      })
      .catch((error) => {
        dispatch({ type: LOAD_PROFILE_ERROR, error });
      });
  };
};

export const loadMails = () => {
  return (dispatch) => {
    dispatch({ type: LOAD_MAILS_BIGIN });
    getMails()
      .then((mails) => {
        dispatch({ type: LOAD_MAILS_SUCCESS, payload: mails });
      })
      .catch((error) => {
        dispatch({ type: LOAD_MAILS_ERROR, error });
      });
  };
};

export function changeSection(sec) {
  return { type: ON_CHANGE_SECTION, payload: sec };
}

export const pageChange = (pageFrom, pageTo) => {
  return { type: ON_PAGE_CHANGE, payload: { pageFrom, pageTo } };
};

export const setKeyword = (e) => {
  return { type: ON_SEARCH, payload: e };
}