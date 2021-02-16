import produce from 'immer';
import { ON_SEARCH } from '../actions/actions';

const initialState = {
  keyword: '',
};

export const search = produce((draft, action) => {
  if (action.type === ON_SEARCH) {
    draft = {keyword: draft.keyword = action.payload};
  }
}, initialState);

