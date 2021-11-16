import produce from 'immer';
import {
  LOAD_MAILS_BIGIN,
  LOAD_MAILS_SUCCESS,
  LOAD_MAILS_ERROR,
  READ_MAIL,
  CLOSE_MAIL,
  ONLY_CLOSE_MAIL,
  DELETE_MAIL,
  MARK_IMPORTANCE,
  MARK_CHECKED_AS_READ,
  HANDLE_CHECKBOX,
  X_MARK_CHECKED,
  HANDLE_CHECKALL,
  HANDLE_DELETE_SELECTED,
  SHOWEN_MAILS
} from '../actions/actions';

const initialState = {
  mails: [],
  mailsLoaing: false,
  error: null,
  selectedMail: null,
  value: [],
  allChecked: null,
};

const handleMails = produce((draft, action) => {
  switch (action.type) {
    case LOAD_MAILS_BIGIN:
      draft.mailsLoading = true;
      break;
    case LOAD_MAILS_SUCCESS:
      draft.mailsLoading = false;
      draft.mails = action.payload;
      break;
    case LOAD_MAILS_ERROR:
      draft.error = action.error;
      break;
    case READ_MAIL:
      draft.selectedMail = action.payload;
      break;
    case CLOSE_MAIL:
      draft.selectedMail = null;
      draft.mails = draft.mails.map((m) => (action.data.id === m.id ? action.data : m));
      break;
    case ONLY_CLOSE_MAIL:
      draft.selectedMail = null;
      break;
    case DELETE_MAIL:
      draft.selectedMail = null;
      draft.mails = draft.mails.map((m) => (action.data.id === m.id ? action.data : m));
      break;
    case MARK_IMPORTANCE:
      draft.mails = draft.mails.map((m) => (action.data.id === m.id ? action.data : m));
      break;
    case HANDLE_CHECKBOX:
      const index = draft.value.indexOf(action.m);
      const all = [...draft.value];
      const ev = action.e.target.checked;
      if (ev) {
        all.push(action.m);
      } else {
        all.splice(index, 1);
      }
      draft.value = all;
      break;
    case MARK_CHECKED_AS_READ:
      draft.mails = draft.mails.map((m) => (action.data.id === m.id ? action.data : m));
      break;
    case X_MARK_CHECKED:
      draft.value = [];
      break;
    case HANDLE_CHECKALL:
      draft.allChecked = !draft.allChecked;

      if (draft.value.length > 0) {
        draft.value = [];
      } else {
        draft.value = action.mails;
      }
      break;
    case HANDLE_DELETE_SELECTED:
      draft.mails = draft.mails.map((m) => (action.data.id === m.id ? action.data : m));
      draft.value = [];
      return;
    case SHOWEN_MAILS: 
      draft.mails = action.data
    return;
    default:
      return;
  }
}, initialState);

export default handleMails;
