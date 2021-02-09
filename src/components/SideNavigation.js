
const SideNavigation = () => {
    return (
        <div>
        <div className="inbox-body">
        <a href="#myModal" data-toggle="modal" title="Compose" className="btn btn-compose">
            Compose
        </a>
        <div aria-hidden="true" aria-labelledby="myModalLabel" role="dialog" id="myModal" className="modal fade">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <button aria-hidden="true" data-dismiss="modal" className="close" type="button">×</button>
                        <h4 className="modal-title">Compose</h4>
                    </div>
                    <div className="modal-body">
                        <form className="form-horizontal">
                            <div className="form-group">
                                <label className="col-lg-2 control-label">To</label>
                                <div className="col-lg-10">
                                    <input type="text" placeholder="" id="inputEmail1" className="form-control"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-lg-2 control-label">Cc / Bcc</label>
                                <div className="col-lg-10">
                                    <input type="text" placeholder="" id="cc" className="form-control"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-lg-2 control-label">Subject</label>
                                <div className="col-lg-10">
                                    <input type="text" placeholder="" id="inputPassword1" className="form-control"/>
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
                                    <input type="file" name="files[]" multiple=""/>
                                    </span>
                                    <button className="btn btn-send" type="submit">Send</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <ul className="inbox-nav inbox-divider">
        <li className="active">
            <a href="##"><i className="fa fa-inbox"></i> Inbox <span className="label label-danger pull-right">2</span></a>
        </li>
        <li>
            <a href="##"><i className="fa fa-envelope-o"></i> Sent Mail</a>
        </li>
        <li>
            <a href="##"><i className="fa fa-bookmark-o"></i> Important</a>
        </li>
        <li>
            <a href="##"><i className=" fa fa-external-link"></i> Drafts <span className="label label-info pull-right">30</span></a>
        </li>
        <li>
            <a href="##"><i className=" fa fa-trash-o"></i> Trash</a>
        </li>
    </ul>
    <ul className="nav nav-pills nav-stacked labels-info inbox-divider">
        <li> <h4>Labels</h4> </li>
        <li> <a href="##"> <i className=" fa fa-sign-blank text-danger"></i> Work </a> </li>
        <li> <a href="##"> <i className=" fa fa-sign-blank text-success"></i> Design </a> </li>
        <li> <a href="##"> <i className=" fa fa-sign-blank text-info "></i> Family </a>
        </li><li> <a href="##"> <i className=" fa fa-sign-blank text-warning "></i> Friends </a>
        </li><li> <a href="##"> <i className=" fa fa-sign-blank text-primary "></i> Office </a>
        </li>
    </ul>
    <div className="inbox-body text-center">
        <div className="btn-group">
            <a className="btn mini btn-primary" href="##">
                <i className="fa fa-plus"></i>
            </a>
        </div>
        <div className="btn-group">
            <a className="btn mini btn-success" href="##">
                <i className="fa fa-phone"></i>
            </a>
        </div>
        <div className="btn-group">
            <a className="btn mini btn-info" href="##">
                <i className="fa fa-cog"></i>
            </a>
        </div>
    </div>
    </div>
    )
}

export default SideNavigation;