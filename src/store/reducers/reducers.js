import produce from 'immer';
import { LOAD_MAILS_BIGIN, LOAD_MAILS_SUCCESS, LOAD_MAILS_ERROR, LOAD_PROFILE_BIGIN, LOAD_PROFILE_SUCCESS, LOAD_PROFILE_ERROR } from '../actions/actions';

const initialState = {
  mails: [],
  mailsLoaing: false,
  error: null,
  profile: {},
  profileLoaing: false,
};

export const getMails = produce((draft, action) => {
  switch (action.type) {
    case LOAD_MAILS_BIGIN:
      draft.mailsLoading = true;
      return;
    case LOAD_MAILS_SUCCESS:
      draft.mailsLoading = false;
      draft.mails = action.payload;
      return;
    case LOAD_MAILS_ERROR:
      draft.error = action.error;
      return;

    default:
      return;
  }
}, initialState);

export const getProfile = produce((draft, action) => {
  switch (action.type) {
    case LOAD_PROFILE_BIGIN:
      draft.profileLoading = true;
      return;
    case LOAD_PROFILE_SUCCESS:
      draft.profile = action.payload;
      draft.profileLoading = false;
      return;
    case LOAD_PROFILE_ERROR:
      draft.error = action.error;
      return;

    default:
      return;
  }
}, initialState);
