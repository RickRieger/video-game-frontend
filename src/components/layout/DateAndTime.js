import React, { useState, useEffect } from 'react';
import moment from 'moment';
const DateAndTime = () => {
  const [dateAndTime, setDateAndTime] = useState('');
  const showDateAndTime = () => {
    setDateAndTime(moment().format('MMMM Do YYYY, h:mm:ss a'));
  };
  setInterval(showDateAndTime, 1000);

  return <h2 style={{ textAlign: 'center' }}>{dateAndTime}</h2>;
};

export default DateAndTime;
