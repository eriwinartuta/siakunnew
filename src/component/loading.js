import React from "react";
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from "antd";

const LoadingView = () => {

  const antIcon = (
    <LoadingOutlined
      style={{
        fontSize: 48,
      }}
      spin
    />
  );

  return (
    <div
      style={{
        display: "flex",
        height: "100%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "7%",
      }}
    >
      <Spin indicator={antIcon} />
      <p
        style={{
          fontWeight: "700",
          marginTop: 20
        }}
      >
        Mohon Tunggu...
      </p>
    </div>
  );
};

export default LoadingView;
