import React from 'react';
import '../index.css';
const compose = () => {
  return (
    <div className="inbox-body">
      <p data-toggle="modal" title="Compose" className="btn btn-compose">
        Compose
      </p>
      <div aria-hidden="true" aria-labelledby="myModalLabel" role="dialog" id="myModal" className="modal fade">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button aria-hidden="true" data-dismiss="modal" className="close" type="button">
                ×
              </button>
              <h4 className="modal-title">Compose</h4>
            </div>
            <div className="modal-body">
              <form className="form-horizontal">
                <div className="form-group">
                  <label className="col-lg-2 control-label">To</label>
                  <div className="col-lg-10">
                    <input type="text" placeholder="" id="inputEmail1" className="form-control" />
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-lg-2 control-label">Cc / Bcc</label>
                  <div className="col-lg-10">
                    <input type="text" placeholder="" id="cc" className="form-control" />
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-lg-2 control-label">Subject</label>
                  <div className="col-lg-10">
                    <input type="text" placeholder="" id="inputPassword1" className="form-control" />
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-lg-2 control-label">Message</label>
                  <div className="col-lg-10">
                    <textarea rows="10" cols="30" className="form-control" id="" name=""></textarea>
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

export default compose;
