import produce from 'immer';
import {
  LOAD_PROFILE_BIGIN,
  LOAD_PROFILE_SUCCESS,
  LOAD_PROFILE_ERROR,
} from '../actions/actions';

const initialState = {

  profile: {},
  profileLoaing: false,
}
export const handleProfile = produce((draft, action) => {
    switch (action.type) {
      case LOAD_PROFILE_BIGIN:
        draft.profileLoading = true;
        return;
      case LOAD_PROFILE_SUCCESS:
        draft.profile = action.payload;
        draft.profileLoading = false;
        return;
      case LOAD_PROFILE_ERROR:
        draft.error = action.error;
        return;
  
      default:
        return;
    }
  }, initialState);

export default handleProfile;