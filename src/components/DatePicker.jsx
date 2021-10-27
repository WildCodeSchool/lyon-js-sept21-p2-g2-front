import { React, useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DatePicker = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <ReactDatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      dateFormat="d MMMM yyyy"
    />
  );
};

export default DatePicker;
