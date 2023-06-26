import React from "react";
import { Button } from "antd";

const Buttons = ({
  labelButton,
  type,
  size,
  link,
  shape,
  icon,
  marginLeft,
  marginRight,
  onClick,
  borderRadius,
  disable,
  color,
  backgroundColor,
  height,
  width,
  fontSize,
  marginBottom,
  onMouseEnter,
  onMouseLeave,
  onDragStart,
  draggable,
  loading,
  position,
  borderTopLeftRadius,
  left,
  transition,
  title,
  visibility,
  borderColor,
}) => {
  return (
    <Button
      size={size}
      href={link}
      shape={shape}
      type={"primary"}
      onDragStart={onDragStart}
      draggable={draggable}
      loading={loading}
      color="black"
      icon={icon}
      disabled={disable}
      onClick={onClick}
      title={title}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{
        backgroundColor: backgroundColor,
        display: "flex",
        alignItems: "center",
        marginLeft: marginLeft,
        marginRight: marginRight,
        borderRadius: borderRadius,
        color: color,
        height: height,
        width: width,
        justifyContent: "center",
        fontSize: fontSize,
        marginBottom: marginBottom,
        position: position,
        // borderTopLeftRadius: borderTopLeftRadius,
        left: left,
        transition: transition,
        visibility: visibility,
        borderColor: borderColor,
        //fontFamily: "Roboto,sans-serif",
      }}
    >
      {labelButton}
    </Button>
  );
};

export default Buttons;
