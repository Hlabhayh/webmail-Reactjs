import React, { useState, useEffect } from 'react';
import '../index.css';

const Paginator = ({ totalMails, onPageChange, pagination, mailsPerPage }) => {
  const [counter, setCounter] = useState(1);

  const value = mailsPerPage * counter + 1 ;

  useEffect(() => {
    onPageChange(value -mailsPerPage, value);
  }, [counter]);

  const onButtonClick = (type) => {
    if (type === 'prev') {
      if (counter > 1) {
        setCounter(counter - 1);
      }
    } else if (type === 'next') {
      if (counter + 1  < Math.ceil(totalMails/mailsPerPage)) {
        setCounter(counter + 1);
      }
    }
  };

  return (
    <ul className="unstyled inbox-pagination">
      <li>
        <span>
          {pagination.from} - {pagination.to} of {totalMails}
        </span>
      </li>
      <li>
        <button onClick={() => onButtonClick('prev')} disabled={counter <= 1} className="np-btn">
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

export default Paginator;
