import produce from 'immer';

import { ON_CHANGE_SECTION } from '../actions/actions';

const initialState = {
  section: 'inbox',
};

const changeSection = produce((draft, action) => {
  if (action.type === ON_CHANGE_SECTION) {
    draft = { ...draft, section: (draft.section = action.payload) };
  }
}, initialState);

export default changeSection;
