import React from "react";
import { Upload, Progress } from "antd";

const { Dragger } = Upload;
const Uploads = ({
  beforeUpload,
  contentUpload,
  onChange,
  onDrop,
  name,
  action,
  multiple,
  showUploadList,
  onRemove,
}) => {
  return (
    <Dragger
      name={name}
      onChange={onChange}
      onDrop={onDrop}
      previewFile={false}
      beforeUpload={beforeUpload}
      multiple={multiple}
      showUploadList={showUploadList}
      action={action}
      progress={<Progress type="line" status="active" />}
      onRemove={onRemove}
      maxCount={1}
    >
      {contentUpload}
    </Dragger>
  );
};

export default Uploads;
