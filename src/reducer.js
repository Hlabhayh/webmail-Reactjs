import produce from 'immer';
import { 
  LOAD_PROFILE_BIGIN, 
  LOAD_PROFILE_SUCCESS, 
  LOAD_PROFILE_ERROR,
  LOAD_MAILS_BIGIN, 
  LOAD_MAILS_SUCCESS, 
  LOAD_MAILS_ERROR } from './actions';

const initialState = {
  profile: {},
  mails: [],
  mailsLoaing: false,
  profileLoading: false,
  error: null,
};

const reducer = produce((draft, action) => {
  switch(action.type) {
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
    case LOAD_MAILS_BIGIN:
      draft.mailsLoading = true;
      return;
    case LOAD_MAILS_SUCCESS:
      draft.mails = action.payload;
      draft.mailsLoading = false;
      return;
    case LOAD_MAILS_ERROR:
      draft.error = action.error;
      return;
    default:
      return;
  }
}, initialState);

export default reducer;