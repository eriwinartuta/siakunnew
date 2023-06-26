import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Layout, Space, Avatar, Menu } from "antd";
import { Logo, selendang } from "../../assets";
import ListMenu from "./listmenu";
import {
  ArrowLeftOutlined,
  ArrowRightOutlined,
  HomeOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
import { FONTSTYLE } from "../font";
import LazyLoad from "react-lazyload";

const { Content, Sider } = Layout;
const Menus = ({ content }) => {
  const { globaltitle, user } = useSelector((state) => state.reducerGlobal);
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 768px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(min-width: 768px)")
      .addEventListener("change", (e) => setMatches(e.matches));
    window
      .matchMedia("(min-width: 768px)")
      .addEventListener("change", (e) => setCollapse(true));
  }, [matches]);

  const [collapse, setCollapse] = useState(false);

  return (
    <Layout hasSider style={{ minHeight: "100vh" }}>
      {matches ? (
        <Sider
          width={230}
          // collapsible
          collapsed={collapse}
          onCollapse={(e) => setCollapse(e)}
          onMouseEnter={() => setCollapse(false)}
          onMouseLeave={() => setCollapse(true)}
          style={{
            backgroundColor: "#f7f7f7",
            paddingTop: 5,
            overflow: "auto",
            height: "100vh",
            position: "fixed",
            left: 0,
            top: 0,
            bottom: 0,
            zIndex: 1,
            // boxShadow: "1px 1px 1px black",
          }}
        >
          <div
            style={{
              padding: 10,
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                padding: 5,
              }}
            >
              <LazyLoad>
                <img
                  alt="logo expenditre"
                  src={Logo}
                  style={{
                    width: 140,
                  }}
                />
              </LazyLoad>

            </div>
          </div>

          <ListMenu useSelector={useSelector} />

          <div
            className="overflow-visible"
            style={{
              position: "fixed",
              bottom: 0,
              backgroundColor: "#229CE1",
              width: collapse ? 80 : 230,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 10,
              transition: "all 265ms",
              // boxShadow: "0px -1px 1px black",
              cursor: "pointer",
            }}
            onClick={() => {
              setCollapse(!collapse);
            }}
          >
            {collapse ? (
              <ArrowRightOutlined
                style={{
                  fontSize: 18,
                  fontWeight: "900",
                  color: "white",
                }}
              />
            ) : (
              <ArrowLeftOutlined
                style={{
                  fontSize: 18,
                  fontWeight: "900",
                  color: "white",
                }}
              />
            )}
          </div>
        </Sider>
      ) : (
        <Sider
          collapsible
          collapsed={collapse}
          breakpoint="lg"
          collapsedWidth="0"
          reverseArrow={true}
          style={{
            backgroundColor: "#f7f7f7",
            paddingTop: 50,
            overflow: "auto",
            height: "100vh",
            position: "fixed",
            left: 0,
            top: 0,
            bottom: 0,
            zIndex: 1,
          }}
        >
          <ListMenu useSelector={useSelector} />
        </Sider>
      )}

      <Button
        icon={
          <MenuFoldOutlined
            style={{
              color: "white",
            }}
          />
        }
        style={{
          position: "fixed",
          zIndex: 2,
          display: matches ? "none" : "block",
          backgroundColor: "#00BAEB",
          borderColor: "#00BAEB",
          top: "5%",
        }}
        onClick={() => setCollapse(!collapse)}
      >
        {" "}
      </Button>

      <Layout
        className="site-layout"
        style={{
          marginLeft: matches ? (collapse ? 80 : 230) : 0,
          transition: "all 280ms",
        }}
      >
        <div
          style={{
            padding: 8,
            display: "flex",
            paddingLeft: 10,
            paddingRight: 10,
            paddingTop: 5,
            paddingBottom: 5,
            //position: "sticky",
            //top: 0,
            //zIndex: 1,
            backgroundColor: "white",
            borderRadius: 5,
            marginBottom: 15,
          }}
        >
          <div
            style={{
              flex: 1,
              // borderRadius: 5,
              display: "flex",
              justifyContent: "space-between",
              // boxShadow: "0px 0.5px 0px grey",
              paddingLeft: 10,
              fontFamily: FONTSTYLE.POPPINS,
            }}
          >
            <div
              style={{
                fontWeight: "700",
                //fontFamily: "DM Sans",
                //color: "#0E7490",
              }}
            >
              <p
                style={{
                  marginBottom: 0,
                  fontSize: matches ? 18 : 14,
                  margin: 15,
                }}
              >
                {globaltitle}
              </p>
            </div>

            <div
              style={{
                marginLeft: 10,
                display: "flex",
                flexDirection: "column",
                marginRight: 5,
              }}
            >
              <Space direction="horizontal">
                <Space direction="vertical">
                  <p
                    align="right"
                    style={{
                      margin: 0,
                      marginBottom: -5,
                    }}
                  >
                    <b> {user?.data?.nama_pegawai} </b>
                  </p>
                  <p
                    style={{
                      margin: 0,
                    }}
                  >
                    {user?.data?.TrxUnitKerjaPegawais[0]?.Unit?.nama_unit}
                  </p>
                </Space>
                {/* <Avatar src={user?.data.foto_pegawai} size="large" /> */}
                <Menu mode="horizontal" style={{ borderBottom: "none" }}>
                  <Menu.SubMenu
                    title={
                      <Avatar src={user?.data?.foto_pegawai} size="large" />
                    }
                  >
                    {/* <Menu.Item icon={<UserOutlined />}>Profil</Menu.Item> */}
                    <Menu.Item
                      icon={<HomeOutlined />}
                      onClick={() =>
                        window.location.assign("https://sippp.ut.ac.id")
                      }
                    >
                      Kembali ke Landing
                    </Menu.Item>
                  </Menu.SubMenu>
                </Menu>
              </Space>
            </div>
          </div>
        </div>

        {/* <Header
          className="site-layout-background"
          style={{
            padding: 0,
            backgroundColor: "white",
          }}
        /> */}
        <Content
          style={{
            margin: "0 16px",
          }}
        >
          <div
            className="site-layout-background"
            style={{
              // padding: 24,
              minHeight: 360,
            }}
          >
            {content}
          </div>
        </Content>
        <img
          alt="FooterUT"
          src={selendang}
          style={{
            height: 80,
            //position: "sticky",
            bottom: 0,
            width: "100%",
            marginTop: 50,
            position: "relative",
            zIndex: 0,
          }}
        />
      </Layout>
    </Layout>
  );
};

export default Menus;
