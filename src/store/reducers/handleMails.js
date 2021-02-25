import produce from 'immer';
import { LOAD_MAILS_BIGIN, LOAD_MAILS_SUCCESS, LOAD_MAILS_ERROR, READ_MAIL, CLOSE_MAIL, ONLY_CLOSE_MAIL, DELETE_MAIL } from '../actions/actions';

const initialState = {
  mails: [],
  mailsLoaing: false,
  error: null,
  selectedMail: null,
};

const handleMails = produce((draft, action) => {
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
    case READ_MAIL:
      return (draft = { ...draft, selectedMail: action.payload });
    case CLOSE_MAIL:
      draft = {
        ...draft,
        selectedMail: (draft.selectedMail = null),
        mails: (draft.mails = draft.mails.map((m) => {
          if (action.data.id === m.id) {
            return action.data;
          }
          return m;
        })),
      };
      return;
    case ONLY_CLOSE_MAIL:
      draft = {
        ...draft,
        selectedMail: (draft.selectedMail = null),
      };
      return;
    case DELETE_MAIL:
      draft = {
        ...draft,
        selectedMail: (draft.selectedMail = null),
        mails: (draft.mails = draft.mails.map((m) => {
          if (action.data.id === m.id) {
            return action.data;
          }
          return m;
        })),
      };
      break;
    default:
      return;
  }
}, initialState);

export default handleMails;
