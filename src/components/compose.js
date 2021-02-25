import React, { useState } from 'react';
import { connect } from 'react-redux';

import { handleModal, handleSubmit } from '../store/actions/actions';
import '../index.css';

const Compose = ({ modal, handleModal, handleSubmit }) => {
  const [compose, setCompose] = useState({
    subject: '',
    content: '',
    sender: {
      name: '',
      email: '',
    },
    important: null,
    attachment: null,
    sentAt: null,
    readAt: null,
    deletedAt: null,
  });

  const handleChange = (e) => {
    setCompose({
      ...compose,
      [e.target.name]: e.target.value,
    });
  };

  const handleSender = (e) => {
    setCompose({ ...compose, name: (compose.sender.name = e.target.value) });
  };

  const sendMail = (e) => {
    e.preventDefault();
    delete compose.name;
    handleSubmit(compose);
  };

  return (
    <div className="inbox-body">
      <p data-toggle="modal" title="Compose" className="btn btn-compose" onClick={() => handleModal('open')}>
        Compose
      </p>
      <div aria-hidden="true" aria-labelledby="myModalLabel" role="dialog" id="myModal" className={modal ? null : 'modal fade'}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button aria-hidden="true" data-dismiss="modal" className="close" type="button" onClick={() => handleModal('close')}>
                ×
              </button>
              <h4 className="modal-title">Compose</h4>
            </div>
            <div className="modal-body">
              <form className="form-horizontal" onSubmit={sendMail}>
                <div className="form-group">
                  <label className="col-lg-2 control-label">To</label>
                  <div className="col-lg-10">
                    <input type="text" placeholder="" id="inputEmail1" className="form-control" value={compose.sender.name} onChange={handleSender} />
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-lg-2 control-label">Subject</label>
                  <div className="col-lg-10">
                    <input
                      type="text"
                      placeholder=""
                      id="inputPassword1"
                      className="form-control"
                      name="subject"
                      value={compose.subject}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-lg-2 control-label">Message</label>
                  <div className="col-lg-10">
                    <textarea rows="10" cols="30" className="form-control" name="content" value={compose.content} onChange={handleChange}></textarea>
                  </div>
                </div>

                <div className="form-group">
                  <div className="col-lg-offset-2 col-lg-10">
                    <span className="btn green fileinput-button">
                      <i className="fa fa-plus fa fa-white"></i>
                      <span>Attachment</span>
                      <input type="file" name="files[]" multiple="" />
                    </span>
                    <button className="btn btn-send" type="submit">
                      Send
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const mapState = (state) => ({
  modal: state.composeR.modal,
});

const mapDispatch = (dispatch) => ({
  handleModal: (e) => dispatch(handleModal(e)),
  handleSubmit: (e) => dispatch(handleSubmit(e)),
});

export default connect(mapState, mapDispatch)(Compose);
