import React from "react";
import { Input } from "antd";

const { TextArea } = Input;

const TextAreaInput = ({
  rows,
  placeholder,
  maxLength,
  title,
  onChange,
  value,
  width,
}) => {
  return (
    <div>
      <p
        style={{
          fontWeight: "700",
          color: "GrayText",
          fontSize: 13,
        }}
      >
        {title}
      </p>
      <TextArea
        rows={rows}
        placeholder={placeholder}
        maxLength={maxLength}
        // style={{
        //   display: "flex",
        //   width: width,
        //   borderRadius: 3,
        //   borderBottomWidth: 2,
        //   fontSize: 12,
        //   borderWidth: 0.5,
        //   borderColor: "black",
        //   boxShadow: "0px 1px 0px black",
        // }}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
export default TextAreaInput;
