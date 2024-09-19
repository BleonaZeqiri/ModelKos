import React, { useRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { TiArrowSortedDown } from "react-icons/ti";

const DateInputComponent = () => {
  const [startDate, setStartDate] = useState(null);
  const datePickerRef = useRef(null);

  const handleIconClick = () => {
    if (datePickerRef.current) {
      datePickerRef.current.setOpen(true);
    }
  };

  return (
    <>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        dateFormat="MM/dd/yy"
        placeholderText="MM/DD/YY"
        className="date-input"
        ref={datePickerRef}
        required
      />
      <TiArrowSortedDown className="select-arrow" onClick={handleIconClick} />
      <style jsx>{`
        .date-input {
          border: 1px solid #ccc;
          border-radius: 4px;
          font-size: 16px;
          width: 200px;
        }

        .select-arrow {
          cursor: pointer;
          font-size: 24px;
          margin-left: 10px;
          vertical-align: middle;
        }
      `}</style>
    </>
  );
};

export default DateInputComponent;
