import React from "react";
import { Logo } from "../assets";
import { LoadingOutlined } from "@ant-design/icons";
import { FONTSTYLE } from "./font";

const SplashScreen = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "10%",
        flexDirection: "column",
      }}
    >
      <img
        alt="Logo Si-Akun"
        src={Logo}
        style={{
          height: 140,
          marginBottom: 10,
        }}
      />
      <div style={{ display: "flex", alignItems: "center" }}>
        <p
          className="text-blue-900"
          style={{
            fontSize: 15,
            fontWeight: "700",
            fontFamily: FONTSTYLE.PUBLICSANS
          }}
        >
          Powered By SIPPP UNIVERSITAS TERBUKA 2022 
        </p>
        {/* <img
          src={LambangUT}
          style={{
              width: 100,
            }}
        /> */}
      </div>
      <LoadingOutlined className="text-blue-900"  style={{ fontSize: 20, }} />
    </div>
  );
};

export default SplashScreen;
