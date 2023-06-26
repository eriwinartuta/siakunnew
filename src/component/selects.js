import React from "react";
import { Select } from "antd";
import { DownCircleOutlined } from "@ant-design/icons";
const Selects = ({
  optionContent,
  defaultValue,
  value,
  onChange,
  labelSelect,
  placeholder,
  disabled,
  marginBottom,
  height,
  filterOption,
  onSearch,
}) => {
  return (
    <div>
      <div>{labelSelect}</div>
      <Select
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        style={{
          display: "flex",
          //borderRadius: 5,
          //borderWidth: 1,
          //boxShadow: "0px 1px 2px gray",
          marginBottom: marginBottom,
          height: height,
        }}
        showSearch={true}
        suffixIcon={
          <DownCircleOutlined
            style={{
              fontSize: 15,
              color: "grey",
            }}
          />
        }
        placeholder={placeholder}
        filterOption={filterOption}
        onSearch={onSearch}
        disabled={disabled}
        bordered={true}
      >
        {optionContent}
      </Select>
    </div>
  );
};

export default Selects;
