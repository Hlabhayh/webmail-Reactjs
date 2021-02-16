import { ON_CHANGE_SECTION, ON_PAGE_CHANGE, ON_SEARCH } from '../actions/actions';

const initialState = {
  mailsPerPage: 17,
  pageFrom: 0,
  pageTo: 17,
  counter: 1,
};

const paginator = (state = initialState, action) => {
  if (action.type === ON_PAGE_CHANGE) {
    state = { ...state, pageFrom: (state.pageFrom = action.payload.pageFrom), pageTo: (state.pageTo = action.payload.pageTo), counter: (state.counter = 1) };
  } else if (action.type === ON_CHANGE_SECTION || action.type === ON_SEARCH) {
    state = { ...state, counter: (state.counter = 0) };
  }
  return state;
};

export default paginator;