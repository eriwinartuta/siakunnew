import React, { useState } from "react";
import { Icon } from "@ant-design/compatible";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import { FONTSTYLE } from "../font";
//import "../../assets/style/font.css";
const { SubMenu } = Menu;

const ListMenu = ({ useSelector }) => {
  const { menu } = useSelector((state) => state.reducerGlobal);
  const [focusMenu, setFocusMenu] = useState(null);

  return (
    <Menu
      mode="inline"
      theme="light"
      style={{
        background: "#f7f7f7",
        marginTop: 10,
        marginBottom: 10,
        fontFamily: FONTSTYLE.POPPINS,
        fontWeight: 900,
        paddingLeft: 5,
        paddingRight: 3,
      }}
    >

      {menu?.map((res, index) => {
        return (
          <>
            {res.link === "" ? (
              <SubMenu
                key={index}
                title={res.nama_menu1}
                icon={
                  <Icon
                    type={res.icon}
                    theme="outlined"
                    //style={{ fontSize: "18px" }}
                  />
                }
                style={{
                  fontWeight: "700",
                  //fontSize: 12,
                  display: res.menu2?.length === 0 ? "none" : "block",
                  color: "#081A51",
                  fontFamily: FONTSTYLE.PUBLICSANS,
                  //marginTop: -4,
                  //background: "#081A51",
                  background: "#f7f7f7",
                }}
              >
                {res.menu2.map((res, index) => {
                  return (
                    <>
                      {res.link === "" ? (
                        <SubMenu
                          key={index}
                          title={res.nama_menu2}
                          style={{
                            //paddingTop: 1,
                            background: "#ffffff",
                            display: res.menu3.length === 0 ? "none" : "block",
                            color: "#081A51",
                            fontFamily: FONTSTYLE.POPPINS,
                            //fontWeight: "700",
                          }}
                        >
                          {res.menu3.map((res, index) => {
                            return (
                              <Menu.Item
                                key={index}
                                style={{
                                  backgroundColor: "white",
                                  color: "white",
                                  margin: 0,
                                  fontWeight: "400",
                                }}
                                onClick={() => setFocusMenu(res.kode_menu3)}
                              >
                                <Link to={res.link}>
                                  <p
                                    style={{
                                      color: "white",
                                      //fontSize: 12,
                                      //fontFamily: "Poppins",
                                      //fontWeight: "700",
                                      display: "flex",
                                    }}
                                  >
                                    {res.nama_menu3}
                                  </p>
                                </Link>
                              </Menu.Item>
                            );
                          })}
                        </SubMenu>
                      ) : (
                        <Menu.Item
                          key={res.kode_menu2}
                          onClick={() => setFocusMenu(res.kode_menu2)}
                          style={{
                            color: "#081A51",
                            background:
                              focusMenu === res.kode_menu2
                                ? "#0B53B5"
                                : "#F7F7F7",
                            margin: 0,
                          }}
                        >
                          <Link
                            to={res.link}
                            style={{
                              color:
                                focusMenu === res.kode_menu2
                                  ? "white"
                                  : "#081A51",
                              //fontSize: 13,
                            }}
                          >
                            {res.nama_menu2}
                          </Link>
                        </Menu.Item>
                      )}
                    </>
                  );
                })}
              </SubMenu>
            ) : (
              <Menu.Item
                onClick={() => setFocusMenu(res.kode_menu1)}
                icon={
                  <Icon
                    type={res.icon}
                    theme="outlined"
                    //style={{ fontSize: "18px" }}
                  />
                }
                key={res.kode_menu1}
                style={{
                  color: focusMenu === res.kode_menu1 ? "white" : "#7C7B7B",
                  margin: 0,
                  background:
                    focusMenu === res.kode_menu1 ? "#00BAEB" : "white",
                }}
              >
                <Link
                  to={res.link}
                  style={{
                    //fontWeight: "700",
                    //fontSize: 12,
                    color: focusMenu === res.kode_menu1 ? "white" : "#7C7B7B",
                    //fontFamily: "Poppins,sans-serif",
                    textAlign: "center",
                  }}
                >
                  {res.nama_menu1}
                </Link>
              </Menu.Item>
            )}
          </>
        );
      })}
    </Menu>

    // <Menu defaultSelectedKeys={["1"]} mode="inline">
    //   <SubMenu
    //     key="sub1"
    //     //icon={<TeamOutlined />}
    //     title="Akun"
    //     className="font-bold"
    //   >
    //     <Menu.Item key="1" className="font-bold">
    //       <Link to="transaksijurnal">Transaksi Jurnal</Link>
    //     </Menu.Item>
    //     <Menu.Item key="2" className="font-bold">
    //       <Link to="bas">Bagan Akun Standar</Link>
    //     </Menu.Item>
    //     <Menu.Item key="19" className="font-bold">
    //       <Link to="masterjurnal">Master Jurnal</Link>
    //     </Menu.Item>
    //   </SubMenu>
    //   <SubMenu
    //     key="sub2"
    //     //icon={<TeamOutlined />}
    //     title="Perbankan"
    //     className="font-bold"
    //   >
    //     <Menu.Item key="3" className="font-bold">
    //       <Link to="registrasibank">Registrasi Bank</Link>
    //     </Menu.Item>
    //     <Menu.Item key="4" className="font-bold">
    //       <Link to="rekonsilasi">Rekonsilasi</Link>
    //     </Menu.Item>
    //   </SubMenu>
    //   <SubMenu
    //     key="sub3"
    //     //icon={<TeamOutlined />}
    //     title="Laporan"
    //     className="font-bold"
    //   >
    //     <Menu.Item key="5" className="font-bold">
    //       <Link to="posisikeuangan">Posisi Keuangan</Link>
    //     </Menu.Item>
    //     <Menu.Item key="6" className="font-bold">
    //       <Link to="penghasilan">Penghasilan Komprehensif</Link>
    //     </Menu.Item>
    //     <Menu.Item key="7" className="font-bold">
    //       <Link to="perubahanaset">Perubahan Aset</Link>
    //     </Menu.Item>
    //     <Menu.Item key="8" className="font-bold">
    //       <Link to="aruskas"> Arus Kas </Link>
    //     </Menu.Item>
    //   </SubMenu>
    //   <SubMenu
    //     key="sub4"
    //     //icon={<TeamOutlined />}
    //     title="Kartu"
    //     className="font-bold"
    //   >
    //     <Menu.Item key="9" className="font-bold">
    //       <Link to="piutang">Piutang</Link>
    //     </Menu.Item>
    //     <Menu.Item key="10" className="font-bold">
    //       <Link to="hutang">Hutang</Link>
    //     </Menu.Item>
    //   </SubMenu>
    //   <SubMenu
    //     key="sub5"
    //     //icon={<TeamOutlined />}
    //     title="Utilitas"
    //     className="font-bold"
    //   >
    //     <Menu.Item key="11" className="font-bold">
    //       <Link to="datasbm">SBM</Link>
    //     </Menu.Item>
    //   </SubMenu>
    // </Menu>
  );
};

export default ListMenu;
