import produce from 'immer';
import { LOAD_MAILS_BIGIN, LOAD_MAILS_SUCCESS, LOAD_MAILS_ERROR } from '../actions/actions';

const initialState = {
  mails: [],
  mailsLoaing: false,
  error: null,
};

const getMails = produce((draft, action) => {
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
      return draft;
  }
}, initialState);

export default getMails;
