import React, { useState, useEffect } from 'react';
import '../index.css';

const Paginator = ({ mailsPerPage, totalMails, onPageChange, pagination }) => {

  const [counter, setCounter] = useState(1);

  useEffect(() => {
    const value = mailsPerPage * counter;
    onPageChange(value - mailsPerPage, value);
  }, [counter]);

  const onButtonClick = (type) => {
    if(type === 'prev') {
      if(counter === 1) {
        setCounter(1)
      }else {
        setCounter(counter - 1)
      }
    }else if(type === 'next') {
      if(Math.ceil(totalMails/mailsPerPage) === counter) {
        setCounter(counter)
      }else {
        setCounter(counter + 1)
      }
    }
  };

  return (
      <ul className="unstyled inbox-pagination">
          <li><span> {counter} - {pagination.end} of {totalMails} </span></li>
          <li>
            <button 
            onClick={() => onButtonClick('prev')}
            disabled={counter <= 1} 
            className="np-btn"><i className="fa fa-angle-left  pagination-left"></i></button>
          </li>
          <li>
            <button 
            onClick={() => onButtonClick('next')} 
            disabled={pagination.end >= totalMails}
            className="np-btn"><i className="fa fa-angle-right pagination-right"></i></button>
          </li>
      </ul>
  )
}

export default Paginator;