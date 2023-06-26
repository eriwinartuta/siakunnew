import React, { useState, useEffect } from "react";
import { Tabel, Buttons, TextInput, MessagePost } from "../../../component";
import {
  EditOutlined,
  SearchOutlined,
  MinusCircleOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import {
  setInputAkun1,
  clearInputAkun1,
  postAkun1,
  updateAkun1,
  clearEditAkun1,
  AkunById1,
  clearPostAkun1,
  fetchAkun2bySub1,
  fetchSaldoAwal
} from "../../../store/akun/action";
import { setGlobalTitle } from "../../../store/global";
import "../../../assets/style/table.css";
import { fetchAkun1 } from "../../../store";
import { useDispatch, useSelector } from "react-redux";
import { Tag, Space, Tooltip } from "antd";
import BaganAkunStandar2 from "./BASSub2";
import { FONTSTYLE } from "../../../component/font";
import ribuan from "../../../utils/formatribu";
// import { COA } from "../../../assets";

const BaganAkunStandar = () => {
  const dispatch = useDispatch();
  const { akun1, datalistakun1, akun1byid, editakun1, post, listsaldoawal } = useSelector(
    (state) => state.reducerBAS
  );

  const [expandKey, setExpandKey] = useState([]);

  useEffect(() => {
    dispatch(setGlobalTitle("Akun / Saldo Awal"));
    dispatch(fetchSaldoAwal(2023));
    
    // eslint-disable-next-line
  }, [dispatch]);

  // console.log("datafetch", akun1);
  // console.log("fetch2", datalistakun1);
  const [inputAkun1, setTambahAkun1] = useState({
    uraian_akun_1: "",
    normalitas: "",
  });

  const [akun1Update, setAkun1Update] = useState({
    kode_akun_1: "",
    uraian_akun_1: "",
    normalitas: "",
  });

  useEffect(() => {
    if (post?.status !== null) {
      setTimeout(() => {
        dispatch(clearPostAkun1());
      }, 2000);
    }
    // eslint-disable-next-line
  }, [post?.status]);

  useEffect(() => {
    setAkun1Update({
      ...akun1Update,
      kode_akun_1: akun1byid.kode_akun_1,
      uraian_akun_1: akun1byid.uraian_akun_1,
      normalitas: akun1byid.normalitas,
    });
    // eslint-disable-next-line
  }, [akun1byid]);

  // const updatenormalitas = (val) => {
  //   setAkun1Update({
  //     ...akun1Update,
  //     normalitas: val.target.value
  //   });

  // };

  // if (loading) {
  //   return <LoadingView />;
  // }

  // if (error !== null) {
  //   return <ErrorView onClick={() => dispatch(fetchAkun1())} />;
  // }


  const columnsaldo = [
    {
      title: "No",
      dataIndex: "kode_trx_unit",
      key: "kode_trx_unit",
      width: 50,
      align: "center",
      render: (text, record, index) => {
      
        return (
          <Tag style={{ fontSize: 16, padding: 5, margin: 5 }} color="#00BAEB">
            {index + 1}
          </Tag>
        );
      },
    },
    {
      title: "Nama Unit",
      dataIndex: "nama_unit",
      key: "nama_unit",
      filterDropdown: ({
        setSelectedKeys,
        selectedKeys,
        confirm,
        clearFilters,
      }) => {
        return (
          <>
            <TextInput
              autoFocus
              placeholder="Cari .."
              value={selectedKeys[0]}
              onChange={(e) => {
                setSelectedKeys(e.target.value ? [e.target.value] : []);
                confirm({ closeDropdown: false });
              }}
              onPressEnter={() => {
                confirm();
              }}
              onBlur={() => {
                confirm();
              }}
            ></TextInput>
          </>
        );
      },
      filterIcon: () => {
        return <SearchOutlined />;
      },
      onFilter: (value, record) => {
        return record.nama_unit.toLowerCase().includes(value.toLowerCase());
      },
      render: (text, record, index) => {
       
        return (
          
           <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "flex-end",
                }}
              >
                {/* <p
                  style={{
                    fontWeight: "400",
                    textTransform: "capitalize",
                  }}
                >
                  {record.uraian_akun_1}
                </p> */}
                <Space> {text} </Space>
              </div>
          
        );
      },
    },
    {
      title: "Jumlah",
      dataIndex: "jumlah",
      key: "jumlah",
      width: 200,
      render: (text, record, index) => {
        
        return (
          <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "flex-end",
                }}
              >
                <Space> <b> {ribuan(text)} </b> </Space>
              </div>
        );
      },
    },
  ];
  const column = [
    {
      title: () => {
        return (
          <Space direction="horizontal" align="start">
            <Tooltip title="Tambah Akun BAS">
              <Buttons
                //labelButton={"Tambah"}
                height={25}
                icon={<PlusCircleOutlined />}
                onClick={() =>
                  dispatch(
                    setInputAkun1({
                      akun1: akun1,
                    })
                  )
                }
              />
            </Tooltip>
          </Space>
        );
      },
      dataIndex: "kode_akun_1",
      key: "kode_akun_1",
      width: 50,
      align: "center",
      render: (text, record, index) => {
        if (record.uraian_akun_1 === null) {
          return <div></div>;
        }
        return (
          <Tag style={{ fontSize: 16, padding: 5, margin: 5 }} color="#00BAEB">
            {text}
          </Tag>
        );
      },
    },
    {
      title: "Deskripsi",
      dataIndex: "uraian_akun_1",
      key: "uraian_akun_1",
      filterDropdown: ({
        setSelectedKeys,
        selectedKeys,
        confirm,
        clearFilters,
      }) => {
        return (
          <>
            <TextInput
              autoFocus
              placeholder="Cari .."
              value={selectedKeys[0]}
              onChange={(e) => {
                setSelectedKeys(e.target.value ? [e.target.value] : []);
                confirm({ closeDropdown: false });
              }}
              onPressEnter={() => {
                confirm();
              }}
              onBlur={() => {
                confirm();
              }}
            ></TextInput>
          </>
        );
      },
      filterIcon: () => {
        return <SearchOutlined />;
      },
      onFilter: (value, record) => {
        return record.uraian_akun_1.toLowerCase().includes(value.toLowerCase());
      },
      render: (text, record, index) => {
        if (record.uraian_akun_1 === null) {
          return (
            <div>
              <TextInput
                placeholder={"Deskripsi Akun"}
                marginBottom={4}
                value={inputAkun1.uraian_akun_1}
                onChange={(e) =>
                  setTambahAkun1({
                    ...inputAkun1,
                    uraian_akun_1: e.target.value,
                  })
                }
              />
            </div>
          );
        }
        return (
          <div>
            {editakun1 === record.kode_akun_1 ? (
              <TextInput
                value={akun1Update.uraian_akun_1}
                onChange={(e) =>
                  setAkun1Update({
                    ...akun1Update,
                    uraian_akun_1: e.target.value,
                  })
                }
              />
            ) : (
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "flex-end",
                }}
              >
                {/* <p
                  style={{
                    fontWeight: "400",
                    textTransform: "capitalize",
                  }}
                >
                  {record.uraian_akun_1}
                </p> */}
                <Space> {record.uraian_akun_1} </Space>
              </div>
            )}
          </div>
        );
      },
    },
    // {
    //   title: "Normalitas",
    //   dataIndex: "normalitas",
    //   key: "normalitas",
    //   width: 100,
    //   align: "center",
    //   render: (text, record, index) => {
    //     if (record.uraian_akun_1 === null) {
    //       return (
    //         <div>
    //           <Radio.Group
    //             onChange={updatenormalitas}
    //             value={akun1Update.normalitas}
    //           >
    //             <Radio value={"aktiva"}> Aktiva </Radio>
    //             <Radio value={"pasiva"}> Pasiva </Radio>
    //           </Radio.Group>
    //         </div>
    //       );
    //     }
    //     return (
    //       <div>
    //         {editakun1 === record.kode_akun_1 ? (
    //           <Radio.Group
    //             onChange={updatenormalitas}
    //             value={akun1Update.normalitas}
    //           >
    //             <Radio value={"01"}> Aktiva </Radio>
    //             <Radio value={"02"}> Pasiva </Radio>
    //           </Radio.Group>
    //         ) : (
    //           <div>
    //             { record.normalitas === "01" ? <Tag style={{ fontSize: 16,  padding: 5, margin:5 }} color="blue"> Aktiva </Tag> : <Tag style={{ fontSize: 16,  padding: 5, margin:5 }} color={"green"}>  Pasiva </Tag>   }

    //           </div>
    //         )}
    //       </div>
    //     );
    //   },
    // },
    {
      title: "Aksi",
      dataIndex: "aksi",
      key: "aksi",
      align: "center",
      width: 180,
      render: (text, record, index) => {
        if (record.uraian_akun_1 === null) {
          return (
            <div style={{ display: "flex" }}>
              <Buttons
                labelButton={"Batal"}
                color={"#00BAEB"}
                backgroundColor={"white"}
                borderColor={"#00BAEB"}
                borderRadius={5}
                height={25}
                onClick={() => dispatch(clearInputAkun1(datalistakun1))}
              />
              <Buttons
                labelButton={"Simpan"}
                backgroundColor={"#00BAEB"}
                height={25}
                marginLeft={3}
                borderRadius={5}
                onClick={() => {
                  dispatch(postAkun1(inputAkun1));
                  // console.log("posting data", inputAkun1);
                  setTambahAkun1({
                    ...inputAkun1,
                    uraian_akun_1: "",
                    normalitas: "",
                  });
                }}
              />
            </div>
          );
        }
        return (
          <div>
            {editakun1 === record.kode_akun_1 ? (
              <Space align="center">
                <Buttons
                  labelButton={"Batal"}
                  color={"#00BAEB"}
                  backgroundColor={"white"}
                  borderColor={"#00BAEB"}
                  borderRadius={5}
                  height={25}
                  onClick={() => dispatch(clearEditAkun1())}
                />
                <Buttons
                  labelButton={"Simpan"}
                  backgroundColor={"#00BAEB"}
                  height={25}
                  marginLeft={5}
                  borderRadius={5}
                  onClick={() =>
                    dispatch(
                      updateAkun1({
                        kode_akun_1: akun1Update.kode_akun_1,
                        data: {
                          kode_akun_1: akun1Update.kode_akun_1,
                          uraian_akun_1: akun1Update.uraian_akun_1,
                          normalitas: akun1Update.normalitas,
                        },
                      })
                    )
                  }
                />
              </Space>
            ) : (
              <Space align="center">
                <Buttons
                  icon={<EditOutlined />}
                  borderRadius={20}
                  marginRight={5}
                  backgroundColor={"orange"}
                  color={"black"}
                  borderColor={"orange"}
                  height={30}
                  onClick={() => dispatch(AkunById1(record.kode_akun_1))}
                />
              </Space>
            )}
          </div>
        );
      },
    },
  ];


  return (
    <div className="p-5 bg-white rounded-lg">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 10,
          position: "sticky",
        }}
      >
        <div>
          <h5
            style={{
              marginBottom: 5,
              fontWeight: "700",
              fontFamily: FONTSTYLE.PUBLICSANS,
              fontSize: 24,
            }}
          >
            Saldo Awal
          </h5>
        </div>
      </div>
      {/* <div
        style={{
          fontFamily: FONTSTYLE.PUBLICSANS,
        }}
        className="flex items-center justify-center py-12"
      >
        <div className="bg-white border rounded-md flex items-center justify-center mx-4 md:w-2/3 ">
          <div className="flex flex-col items-center py-16 ">
            <img
              className="px-4 hidden md:block"
              src={COA}
              width={"100%"}
              alt=""
            />
            <img
              className="md:hidden"
              src="https://i.ibb.co/RgYQvV7/undraw-page-not-found-su7k-1.png"
              alt=""
            />
          </div>
        </div>
      </div> */}

      <div
        style={{
          padding: 5,
          fontFamily: FONTSTYLE.POPPINS,
          zIndex: 0,
          overflowX: "auto",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Tabel
          dataSource={listsaldoawal}
          className={"table"}
          columns={columnsaldo}
          rowKey={"kode_akun_1"}
          //expandedRowKeys={expandKey}
          pagination={false}
          // expandable={{
          //   expandedRowRender: (record, index) => (
          //     <BaganAkunStandar2
          //       key={index}
          //       kodeprogram={record.kode_akun_2}
          //       dispatch={dispatch}
          //       useSelector={useSelector}
          //       useEffect={useEffect}
          //       record={record}
          //     />
          //   ),
          // }}
          // expandIcon={({ expanded, onExpand, record }) => {
          //   if (record.kode_akun_1 === null) {
          //     return "";
          //   }
          //   return expanded ? (
          //     <MinusCircleOutlined
          //       onClick={() => {
          //         dispatch(fetchAkun2bySub1(0));
          //         setExpandKey([]);
          //       }}
          //     />
          //   ) : (
          //     <PlusCircleOutlined
          //       onClick={() => {
          //         dispatch(fetchAkun2bySub1(record.kode_trx_akun_1));
          //         setExpandKey([record.kode_trx_akun_1]);
          //       }}
          //     />
          //   );
          // }}
        />
      </div>
      {/* <MessagePost
        visible={post.status !== null ? true : false}
        message={post.message}
        status={post.status}
      /> */}
    </div>
  );
};

export default BaganAkunStandar;
