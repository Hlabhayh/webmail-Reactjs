import { ON_SHOW_MODAL, ON_SEND_MAIL } from '../actions/actions';
import axios from 'axios';

const composeR = (state = { modal: false, sentMail: {} }, action) => {
  switch (action.type) {
    case ON_SHOW_MODAL:
      if (action.payload === 'open') {
        state = { modal: (state.modal = true) };
      } else {
        state = { modal: (state.modal = false) };
      }
      return state;
    case ON_SEND_MAIL:
      axios
        .post('/mails', {
          ...action.payload,
          sentAt: new Date(),
          readAt: new Date(),
          sent: true,
        })
        .then((res) => {
          console.log(res);
        })
        .then(window.location.reload())
        .catch((error) => {
          console.error(error);
        });
      state = { modal: (state.modal = false) };
      return state;
    default:
      return state;
  }
};

export default composeR;
