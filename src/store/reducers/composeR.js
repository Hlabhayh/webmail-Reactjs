import { ON_SHOW_MODAL, ON_SEND_MAIL } from '../actions/actions';

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
      console.log(action.payload)
      state = { modal: (state.modal = false) };
      return state;
    default:
      return state;
  }
};

export default composeR;
