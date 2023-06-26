import React from "react";
import { Input } from "antd";

const TextInput = ({
  placeholder,
  value,
  onChange,
  width,
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
      <Input
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        bordered={bordered}
        style={{
          display: "flex",
          width: width,
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

export default TextInput;
