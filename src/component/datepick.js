import React from "react";
import { DatePicker } from "antd";

const { RangePicker } = DatePicker;

const DatePickers = ({
  picker,
  transition,
  width,
  visibility,
  onChange,
  onCalendarChange,
  format,
  value,
  allowClear,
  allowEmpty,
  marginBottom,
  disabled,
  placeholder,
}) => {
  return (
    <RangePicker
      picker={picker}
      onChange={onChange}
      onCalendarChange={onCalendarChange}
      value={value}
      placeholder={placeholder}
      format={format}
      disabled={disabled}
      allowClear={allowClear}
      allowEmpty={allowEmpty}
      style={{
        display: "flex",
        transition: transition,
        width: width,
        visibility: visibility,
        marginBottom: marginBottom,
        zIndex: 0,
      }}
    />
  );
};

export default DatePickers;
