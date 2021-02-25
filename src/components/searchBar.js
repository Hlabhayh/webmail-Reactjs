import React  from 'react';
import { connect } from 'react-redux';
import { setKeyword } from '../store/actions/actions';


const searchBar = ({ keyword, onSetKeyword, title}) => {

  return (
    <div className="inbox-head">
      <h3>{title}</h3>
      <form  className="pull-right position" onSubmit={(e)=> e.preventDefault()}>
        <div className="input-append">
          <input type="text" className="sr-input" placeholder="Search Mail" 
          value={keyword} 
          onChange={(e) => onSetKeyword(e.target.value)} />
          <button className="btn sr-btn" type="submit">
            <i className="fa fa-search"></i>
          </button>
        </div>
      </form>
    </div>
  );
};

const mapState = state => ({
  title: state.changeSection.section,
});

const mapDispatch = (dispatch) => ({
  onSetKeyword: (e) => dispatch(setKeyword(e)),
});

export default connect(mapState, mapDispatch)(searchBar);
