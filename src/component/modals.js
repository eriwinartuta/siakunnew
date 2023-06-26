import React from "react";
import { Modal } from "antd";

const Modals = ({
  contentModal,
  visible,
  style,
  title,
  onCancel,
  onOk,
  width,
  className,
  iconTitle,
}) => {
  return (
    <Modal
      visible={visible}
      style={style}
      onOk={onOk}
      onCancel={onCancel}
      width={width}
      footer={false}
      className={className}
      title={
        <p>
          {iconTitle}
          {title}
        </p>
      }
    >
      {contentModal}
    </Modal>
  );
};

export default Modals;
