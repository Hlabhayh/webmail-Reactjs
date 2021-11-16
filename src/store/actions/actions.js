import { getProfile, getMails } from '../api';

import axios from 'axios';

export const LOAD_PROFILE_BIGIN = 'LOAD_PROFILE_BIGIN';
export const LOAD_PROFILE_SUCCESS = 'LOAD_PROFILE_SUCCESS';
export const LOAD_PROFILE_ERROR = 'LOAD_PROFILE_ERROR';

export const LOAD_MAILS_BIGIN = 'LOAD_MAILS_BIGIN';
export const LOAD_MAILS_SUCCESS = 'LOAD_MAILS_SUCCESS';
export const LOAD_MAILS_ERROR = 'LOAD_MAILS_ERROR';

export const ON_CHANGE_SECTION = 'ON_CHANGE_SECTION';

export const ON_PAGE_CHANGE = 'ON_PAGE_CHANGE';

export const ON_SHOW_MODAL = 'ON_SHOW_MODAL';

export const ON_SEARCH = 'ON_SEARCH';

export const ON_SEND_MAIL = 'ON_SEND_MAIL';

export const READ_MAIL = 'READ_MAIL';
export const CLOSE_MAIL = 'CLOSE_MAIL';
export const ONLY_CLOSE_MAIL = 'ONLY_CLOSE_MAIL';
export const DELETE_MAIL = 'DELETE_MAIL';

export const ON_CHECK_MAIL = 'ON_CHECK_MAIL';
export const ON_CHECK_ALL = 'ON_CHECK_ALL';
export const HANDLE_DELETE_SELECTED = 'HANDLE_DELETE_SELECTED';

export const MARK_IMPORTANCE = 'MARK_IMPORTANCE';
export const MARK_CHECKED_AS_READ = 'MARK_CHECKED_AS_READ';
export const X_MARK_CHECKED = 'X_MARK_CHECKED';
export const HANDLE_CHECKBOX = 'HANDLE_CHECKBOX';
export const HANDLE_CHECKALL = 'HANDLE_CHECKALL';

export const SHOWEN_MAILS= 'SHOWEN_MAILS';

//load Profile :
export const loadProfile = () => {
  return (dispatch) => {
    dispatch({ type: LOAD_PROFILE_BIGIN });
    getProfile()
      .then((profile) => {
        dispatch({ type: LOAD_PROFILE_SUCCESS, payload: profile });
      })
      .catch((error) => {
        dispatch({ type: LOAD_PROFILE_ERROR, error });
      });
  };
};
//Load Mails :
export const loadMails = () => {
  return (dispatch) => {
    dispatch({ type: LOAD_MAILS_BIGIN });
    getMails()
      .then((mails) => {
        dispatch({ type: LOAD_MAILS_SUCCESS, payload: mails });
      })
      .catch((error) => {
        dispatch({ type: LOAD_MAILS_ERROR, error });
      });
  };
};

//Change Section :
export function changeSection(sec) {
  return { type: ON_CHANGE_SECTION, payload: sec };
}
//Change Page :
export const pageChange = (pageFrom, pageTo) => {
  return { type: ON_PAGE_CHANGE, payload: { pageFrom, pageTo } };
};
//search bar :
export const setKeyword = (e) => {
  return { type: ON_SEARCH, payload: e };
};
// Modal, Send Mail :
export const handleModal = (e) => {
  return { type: ON_SHOW_MODAL, payload: e };
};
export const handleSubmit = (e) => {
  return { type: ON_SEND_MAIL, payload: e };
};
//Read Mails :
export const readMail = (e) => {
  return { type: READ_MAIL, payload: e };
};
//close mail and marke it as read :
export const markAsRead = (e) => {
  return (dispatch) => {
    if (e.readAt === null) {
      return axios
        .put('http://localhost:8080/mails/' + e.id, {
          ...e,
          readAt: new Date(),
        })
        .then((res) => {
          const data = res.data;
          dispatch({ type: CLOSE_MAIL, data });
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      return dispatch({ type: ONLY_CLOSE_MAIL });
    }
  };
};
//mark mail as unread :
export const unreadMail = (e) => {
  return (dispatch) => {
    if (e.readAt !== null) {
      return axios
        .put('http://localhost:8080/mails/' + e.id, {
          ...e,
          readAt: null,
        })
        .then((res) => {
          const data = res.data;
          dispatch({ type: CLOSE_MAIL, data });
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      return dispatch({ type: ONLY_CLOSE_MAIL });
    }
  };
};
// move mail to trush or delete is from api :
export const removeMail = (e) => {
  return (dispatch) => {
    if (e.deletedAt === null) {
      axios
        .put('http://localhost:8080/mails/' + e.id, {
          ...e,
          deletedAt: new Date(),
        })
        .then((res) => {
          const data = res.data;
          dispatch({ type: DELETE_MAIL, data });
        })
        .catch((err) => {
          console.error(err);
        });
    } else {
      axios
        .delete('http://localhost:8080/mails/' + e.id, {})
        .then(alert('this mail will be DELETED forever !!'))
        .then(window.location.reload());
    }
  };
};

export const importantMail = (e) => {
  return (dispatch) => {
    if (e.important === false) {
      axios
        .put('http://localhost:8080/mails/' + e.id, {
          ...e,
          important: true,
        })
        .then((res) => {
          const data = res.data;
          dispatch({ type: MARK_IMPORTANCE, data });
        })
        .catch((err) => console.error(err));
    } else {
      axios
        .put('http://localhost:8080/mails/' + e.id, {
          ...e,
          important: false,
        })
        .then((res) => {
          const data = res.data;
          dispatch({ type: MARK_IMPORTANCE, data });
        })
        .catch((err) => console.error(err));
    }
  };
};

export const markSelectedAsRead = (e) => {
  return (dispatch) => {
    e.forEach((c) => {
      if (c.readAt === null) {
        axios
          .put('http://localhost:8080/mails/' + c.id, {
            ...c,
            readAt: new Date(),
          })
          .then((res) => {
            const data = res.data;
            dispatch({ type: MARK_CHECKED_AS_READ, data });
          })
          .catch((error) => {
            console.error(error);
          });
      } else {
        dispatch({ type: X_MARK_CHECKED });
      }
    });
  };
};

export const handleChange = (m, e) => {
  return { type: HANDLE_CHECKBOX, m, e };
};

export const handleCheckAll = (mails) => {
  return { type: HANDLE_CHECKALL, mails };
};

export const handleDeleteSelected = (val) => {
  return (dispatch) => {
    console.log(val);
    val.map((e) =>
      axios
        .put('http://localhost:8080/mails/' + e.id, {
          ...e,
          deletedAt: new Date(),
        })
        .then((res) => {
          const data = res.data;
          dispatch({ type: HANDLE_DELETE_SELECTED, data });
        })
        .catch((err) => {
          console.error(err);
        }),
    );
  };
};

export const showReadMails = () => {
  return (dispatch) =>
    axios.get('http://localhost:8080/mails').then((res) => {
      const data = res.data.filter((d) => d.readAt);
      dispatch({ type: SHOWEN_MAILS, data });
    });
};

export const showAllMails = () => {
  return (dispatch) =>
    axios.get('http://localhost:8080/mails').then((res) => {
      const data = res.data;
      dispatch({ type: SHOWEN_MAILS, data });
    });
};

export const showUnreadMails = () => {
  return (dispatch) =>
    axios.get('http://localhost:8080/mails').then((res) => {
      const data = res.data.filter((d) => !d.readAt);
      dispatch({ type: SHOWEN_MAILS, data });
    });
};
