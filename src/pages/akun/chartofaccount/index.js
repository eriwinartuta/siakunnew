import React, { useState, useEffect } from "react";
import { Tabel, Buttons, TextInput } from "../../../component";
import {
  SearchOutlined,
  MinusCircleOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import { setGlobalTitle } from "../../../store/global";
import "../../../assets/style/table.css";
import { useDispatch, useSelector } from "react-redux";
import { Tag, Space, Tooltip } from "antd";
import { FONTSTYLE } from "../../../component/font";
import { COA } from "../../../assets";
import { fetchCOA1, fetchCOA2bySub1 } from "../../../store/coa/action";
import ChartOfAccount2 from "./COA2";
import LazyLoad from "react-lazyload";

const ChartOfAccount = () => {
  const dispatch = useDispatch();
  const { coa1 } = useSelector((state) => state.reducerCOA);

  const [expandKey, setExpandKey] = useState([]);

  useEffect(() => {
    dispatch(setGlobalTitle("Akun / Chart Of Account"));
    dispatch(fetchCOA1());
    // eslint-disable-next-line
  }, [dispatch]);

  //   console.log("datafetch", akun1);
  //   console.log("fetch2", datalistakun1);
  //   const [inputAkun1, setTambahAkun1] = useState({
  //     uraian_akun_1: "",
  //     normalitas: "",
  //   });

  //   const [akun1Update, setAkun1Update] = useState({
  //     kode_akun_1: "",
  //     uraian_akun_1: "",
  //     normalitas: "",
  //   });

  //   useEffect(() => {
  //     if (post?.status !== null) {
  //       setTimeout(() => {
  //         dispatch(clearPostAkun1());
  //       }, 2000);
  //     }
  //     // eslint-disable-next-line
  //   }, [post?.status]);

  //   useEffect(() => {
  //     setAkun1Update({
  //       ...akun1Update,
  //       kode_akun_1: akun1byid.kode_akun_1,
  //       uraian_akun_1: akun1byid.uraian_akun_1,
  //       normalitas: akun1byid.normalitas,
  //     });
  //     // eslint-disable-next-line
  //   }, [akun1byid]);

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

  const column = [
    {
      title: () => {
        return (
          <Space direction="horizontal" align="start">
            <Tooltip title="Tambah Akun COA">
              <Buttons
                //labelButton={"Tambah"}
                height={25}
                icon={<PlusCircleOutlined />}
                disable={true}
                // onClick={() =>
                //   dispatch(
                //     setInputAkun1({
                //       akun1: akun1,
                //     })
                //   )
                // }
              />
            </Tooltip>
          </Space>
        );
      },
      dataIndex: "kode_coa_1",
      key: "kode_coa_1",
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
      dataIndex: "uraian_coa_1",
      key: "uraian_coa_1",
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
        return record.uraian_coa_1.toLowerCase().includes(value.toLowerCase());
      },
      render: (text, record, index) => {
        // if (record.uraian_akun_1 === null) {
        //   return (
        //     <div>
        //       <TextInput
        //         placeholder={"Deskripsi Akun"}
        //         marginBottom={4}
        //         value={inputAkun1.uraian_akun_1}
        //         onChange={(e) =>
        //           setTambahAkun1({
        //             ...inputAkun1,
        //             uraian_akun_1: e.target.value,
        //           })
        //         }
        //       />
        //     </div>
        //   );
        // }
        return (
          <div>
            {/* {editakun1 === record.kode_akun_1 ? (
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
                <Space> {record.uraian_akun_1} </Space>
              </div>
            )} */}
            <Space> {record.uraian_coa_1} </Space>
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
    // {
    //   title: "Aksi",
    //   dataIndex: "aksi",
    //   key: "aksi",
    //   align: "center",
    //   width: 180,
    //   render: (text, record, index) => {
    //     if (record.uraian_akun_1 === null) {
    //       return (
    //         <div style={{ display: "flex" }}>
    //           <Buttons
    //             labelButton={"Batal"}
    //             color={"#00BAEB"}
    //             backgroundColor={"white"}
    //             borderColor={"#00BAEB"}
    //             borderRadius={5}
    //             height={25}
    //             onClick={() => dispatch(clearInputAkun1(datalistakun1))}
    //           />
    //           <Buttons
    //             labelButton={"Simpan"}
    //             backgroundColor={"#00BAEB"}
    //             height={25}
    //             marginLeft={3}
    //             borderRadius={5}
    //             onClick={() => {
    //               dispatch(postAkun1(inputAkun1));
    //               console.log("posting data", inputAkun1);
    //               setTambahAkun1({
    //                 ...inputAkun1,
    //                 uraian_akun_1: "",
    //                 normalitas: "",
    //               });
    //             }}
    //           />
    //         </div>
    //       );
    //     }
    //     return (
    //       <div>
    //         {editakun1 === record.kode_akun_1 ? (
    //           <Space align="center">
    //             <Buttons
    //               labelButton={"Batal"}
    //               color={"#00BAEB"}
    //               backgroundColor={"white"}
    //               borderColor={"#00BAEB"}
    //               borderRadius={5}
    //               height={25}
    //               onClick={() => dispatch(clearEditAkun1())}
    //             />
    //             <Buttons
    //               labelButton={"Simpan"}
    //               backgroundColor={"#00BAEB"}
    //               height={25}
    //               marginLeft={5}
    //               borderRadius={5}
    //               onClick={() =>
    //                 dispatch(
    //                   updateAkun1({
    //                     kode_akun_1: akun1Update.kode_akun_1,
    //                     data: {
    //                       kode_akun_1: akun1Update.kode_akun_1,
    //                       uraian_akun_1: akun1Update.uraian_akun_1,
    //                       normalitas: akun1Update.normalitas,
    //                     },
    //                   })
    //                 )
    //               }
    //             />
    //           </Space>
    //         ) : (
    //           <Space align="center">
    //             <Buttons
    //               icon={<EditOutlined />}
    //               borderRadius={20}
    //               marginRight={5}
    //               backgroundColor={"orange"}
    //               color={"black"}
    //               borderColor={"orange"}
    //               height={30}
    //               onClick={() => dispatch(AkunById1(record.kode_akun_1))}
    //             />
    //           </Space>
    //         )}
    //       </div>
    //     );
    //   },
    // },
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
            Chart Of Account (BAS)
          </h5>
        </div>
      </div>
      <div
        style={{
          fontFamily: FONTSTYLE.PUBLICSANS,
        }}
        className="flex items-center justify-center py-12"
      >
        <div className="bg-white border rounded-md flex items-center justify-center mx-4 md:w-2/3 ">
          <div className="flex flex-col items-center py-16 ">
            <LazyLoad>
              <img
                className="px-4 hidden md:block"
                src={COA}
                width={"100%"}
                alt=""
              />
            </LazyLoad>
            <LazyLoad>
              <img
                className="md:hidden"
                src="https://i.ibb.co/RgYQvV7/undraw-page-not-found-su7k-1.png"
                alt=""
              />
            </LazyLoad>
          </div>
        </div>
      </div>
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
          dataSource={coa1}
          className={"table"}
          columns={column}
          rowKey={"kode_coa_1"}
          expandedRowKeys={expandKey}
          pagination={false}
          expandable={{
            expandedRowRender: (record, index) => (
              <ChartOfAccount2
                key={index}
                kodeprogram={record.kode_coa_2}
                dispatch={dispatch}
                useSelector={useSelector}
                useEffect={useEffect}
                record={record}
              />
            ),
          }}
          expandIcon={({ expanded, onExpand, record }) => {
            if (record.kode_coa_1 === null) {
              return "";
            }
            return expanded ? (
              <MinusCircleOutlined
                onClick={() => {
                  dispatch(fetchCOA2bySub1(0));
                  setExpandKey([]);
                }}
              />
            ) : (
              <PlusCircleOutlined
                onClick={() => {
                  dispatch(fetchCOA2bySub1(record.kode_coa_1));
                  setExpandKey([record.kode_coa_1]);
                }}
              />
            );
          }}
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

export default ChartOfAccount;
