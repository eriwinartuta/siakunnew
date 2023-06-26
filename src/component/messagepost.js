import React from "react";
import { CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";
import { FONTSTYLE } from "./font";

const MessagePost = ({ visible, message, status }) => {
  return (
    <div
      style={{
        position: "fixed",
        top: 50,
        marginLeft: "30%",
        backgroundColor: "white",
        padding: 10,
        boxShadow: "1px 1px 1px grey",
        //borderRadius: 10,
        fontWeight: "700",
        opacity: visible === true ? 1 : 0,
        visibility: visible === true ? "visible" : "hidden",
        transition: "all 1s ease-in-out",
        color: "CaptionText",
        height: 40,
        zIndex: 1,
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        fontFamily: FONTSTYLE.POPPINS
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <p style={{ margin: 0 }}>
          {status === "success" ? (
            <CheckCircleOutlined style={{ color: "green", fontSize: 20 }} />
          ) : (
            <CloseCircleOutlined />
          )}
        </p>
        <p style={{ margin: 15 }}>{message}</p>
      </div>
    </div>
  );
};

export default MessagePost;
