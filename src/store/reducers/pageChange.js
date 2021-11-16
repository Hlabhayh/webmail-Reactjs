import { ON_CHANGE_SECTION, ON_PAGE_CHANGE, ON_SEARCH } from '../actions/actions';

const paginator = (state = { mailsPerPage: 17, pageFrom: 0, pageTo: 17, counter: 1 }, action) => {
  switch (action.type) {
    case ON_PAGE_CHANGE:
      return {
        ...state,
        pageFrom: (state.pageFrom = action.payload.pageFrom),
        pageTo: (state.pageTo = action.payload.pageTo),
        counter: (state.counter = 1),
      };
    case ON_CHANGE_SECTION:
      return { ...state, counter: (state.counter = 0) };
    case ON_SEARCH:
      return { ...state, counter: (state.counter = 0) };
    default:
      return state;
  }
};
export default paginator;
