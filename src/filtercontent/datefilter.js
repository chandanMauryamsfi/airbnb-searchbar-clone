import "./datefilter.css";
import DatePicker from "react-datepicker";
import React, { useState } from "react";

const DateFilter = (props) => {
  const [dates, setDate] = useState(new Date());

//   const handleChange = (date) => setDate(date);

  return (
    <div className='datepicker'>
      {/* <DatePicker
        selected={dates}
        onChange={(date) => setDate(date)}
        open={props.datePickerIsOpen}
      /> */}
    </div>
  );
};

export default DateFilter;
