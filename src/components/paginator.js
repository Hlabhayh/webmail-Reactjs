import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { pageChange } from '../store/actions/actions';
import '../index.css';

const Paginator = ({ totalMails, onPageChange, pageFrom, pageTo, mailsPerPage, counter }) => {

  const [a, setA] = useState(1);

  const value = mailsPerPage * a ;

  useEffect(() => {
    onPageChange((value - mailsPerPage), value);
    if (counter === 0) {
      setA(1);
    }
  }, [a,counter, value, mailsPerPage, onPageChange]);

  const onButtonClick = (type) => {
    if (type === 'prev') {
      if (a > 1) {
        setA(a - 1);
      }
    } else if (type === 'next') {
      if (a + 1  < Math.ceil(totalMails / mailsPerPage)) {
        setA(a + 1);
      }
    }else {
      setA(totalMails)
    }
  };

  return (
    <ul className="unstyled inbox-pagination">
      <li>
        <span>
          {totalMails === 0 ? 0 : pageFrom +1} - {totalMails <= pageTo ? totalMails : pageTo} of {totalMails}
        </span>
      </li>
      <li>
        <button onClick={() => onButtonClick('prev')} disabled={a <= 1} className="np-btn">
          <i className="fa fa-angle-left  pagination-left"></i>
        </button>
      </li>
      <li>
        <button onClick={() => onButtonClick('next')} className="np-btn">
          <i className="fa fa-angle-right pagination-right"></i>
        </button>
      </li>
    </ul>
  );
};

const mapState = (state) => ({
  mailsPerPage: state.paginator.mailsPerPage,
  pageFrom: state.paginator.pageFrom,
  pageTo: state.paginator.pageTo,
  counter: state.paginator.counter,
});

const mapDispatch = (dispatch) => ({
  onPageChange: (pageFrom, pageTo) => dispatch(pageChange(pageFrom, pageTo)),
});

export default connect(mapState, mapDispatch)(Paginator);
