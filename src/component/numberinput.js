import React from "react";
import { InputNumber } from "antd";

const NumberInput = ({
  placeholder,
  defaultValue,
  formatter,
  value,
  parser,
  onChange,
  transition,
  visibility,
  borderRadius,
  height,
  marginBottom,
  disabled,
  bordered,
  label,
  buttonright,
}) => {
  return (
    <div style={{ display: "flex" }}>
      {label}
      <InputNumber
        placeholder={placeholder}
        value={value}
        defaultValue={defaultValue}
        formatter={formatter}
        parser={parser}
        onChange={onChange}
        disabled={disabled}
        bordered={bordered}
        style={{
          display: "flex",
          width: "100%",
          transition: transition,
          visibility: visibility,
          borderRadius: borderRadius,
          height: height,
          marginBottom: marginBottom,
          color: "black",
          zIndex: 0,
        }}
      />
      {buttonright}
    </div>
  );
};

export default NumberInput;
