import { ON_CHANGE_SECTION } from '../actions/actions';

const changeSection = (state = {section: 'inbox'}, action) => {
  switch (action.type) {
    case ON_CHANGE_SECTION:
      return { ...state, section: (state.section = action.payload) };
    default:
      return state;
  }
};

export default changeSection;