import React, { useState, useEffect } from "react";
import { Tabel, Buttons, TextInput } from "../../../component";
import {
  SearchOutlined,
  MinusCircleOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";

import "../../../assets/style/table.css";
import { Tag, Space, Tooltip } from "antd";
import ChartOfAccount5 from "./COA5";
import { fetchCOA5bySub4 } from "../../../store/coa/action";

const ChartOfAccount4 = ({ record, dispatch, useSelector }) => {
  const { coa4bysub3 } = useSelector((state) => state.reducerCOA);

  const [expandKey, setExpandKey] = useState([]);

  //   const [inputAkun4, setTambahAkun4] = useState({
  //     kode_akun_3: record.kode_akun_3,
  //     kode_akun_4:"",
  //     uraian_akun_4: "",
  //   });

  //   useEffect(() => {
  //     if (postakun4?.status !== null) {
  //       setTimeout(() => {
  //         dispatch(clearPostAkun4());
  //       }, 2000);
  //     }
  //     // eslint-disable-next-line
  //   }, [postakun4?.status]);

  //   const [akun4Update, setAkun4Update] = useState({
  //     kode_akun_3: record.kode_akun_3,
  //     kode_akun_4:"",
  //     uraian_akun_4: "",
  //   });

  //   useEffect(() => {
  //     setAkun4Update({
  //       kode_akun_3: akun4byid.kode_akun_3,
  //       kode_akun_4: akun4byid.kode_akun_4,
  //       uraian_akun_4: akun4byid.uraian_akun_4,
  //     });
  //   }, [akun4byid]);

  const column = [
    {
      title: () => {
        return (
          <Space direction="horzontal" align="start">
            <Tooltip title="Tambah Akun BAS">
              <Buttons
                //labelButton={"Tambah"}
                height={25}
                marginRight={5}
                icon={<PlusCircleOutlined />}
                disable={true}
                //   onClick={() =>
                //     dispatch(
                //       setInputAkun4({
                //         kode_akun_3: record.kode_akun_3,
                //         akun4: akun4bysub3,
                //       })
                //     )
                //   }
              />
            </Tooltip>
          </Space>
        );
      },
      dataIndex: "kode_coa_4",
      key: "kode_coa_4",
      width: 70,
      align: "center",
      render: (text, record, index) => {
        if (record.uraian_coa_4 === null) {
          return <div></div>;
        }
        return (
          <Tag style={{ fontSize: 16, padding: 5, margin: 5 }} color="#F23D5D">
            {text}
          </Tag>
        );
      },
    },
    {
      title: "Deskripsi",
      dataIndex: "uraian_coa_4",
      key: "uraian_coa_4",
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
        return record.uraian_coa_4.toLowerCase().includes(value.toLowerCase());
      },
      render: (text, record, index) => {
        // if (record.uraian_akun_4 === null) {
        //   return (
        //     <div>
        //       <TextInput
        //         placeholder={"Deskripsi Akun"}
        //         marginBottom={4}
        //         value={inputAkun4.uraian_akun_4}
        //         onChange={(e) =>
        //           setTambahAkun4({
        //             ...inputAkun4,
        //             uraian_akun_4: e.target.value,
        //           })
        //         }
        //       />
        //     </div>
        //   );
        // }
        return (
          <div>
            {/* {editakun4 === record.kode_akun_4 ? (
              <TextInput
                value={akun4Update.uraian_akun_4}
                onChange={(e) =>
                  setAkun4Update({
                    ...akun4Update,
                    uraian_akun_4: e.target.value,
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
              
                <Space> {record.uraian_akun_4} </Space>
              </div>
            )} */}
            <Space> {record.uraian_coa_4} </Space>
          </div>
        );
      },
    },
    // {
    //   title: "Aksi",
    //   dataIndex: "aksi",
    //   key: "aksi",
    //   align: "center",
    //   width: 180,
    //   render: (text, record, index) => {
    //     if (record.uraian_akun_4 === null) {
    //       return (
    //         <Space align="center">
    //           <Buttons
    //             labelButton={"Batal"}
    //             color={"#00BAEB"}
    //             backgroundColor={"white"}
    //             borderColor={"#00BAEB"}
    //             borderRadius={5}
    //             height={25}
    //             onClick={() => dispatch(clearInputAkun4(record.kode_akun_3))}
    //           />
    //           <Buttons
    //             labelButton={"Simpan"}
    //             backgroundColor={"#00BAEB"}
    //             height={25}
    //             marginLeft={3}
    //             borderRadius={5}
    //             onClick={() => {
    //               dispatch(postAkun4(inputAkun4));
    //               console.log("posting data", inputAkun4);
    //               setTambahAkun4({
    //                 ...inputAkun4,
    //                 kode_akun_4:"",
    //                 uraian_akun_4: "",
    //               });
    //             }}
    //           />
    //           </Space>
    //       );
    //     }
    //     return (
    //       <div>
    //         {editakun4 === record.kode_akun_4 ? (
    //           <Space align="center">
    //            <Buttons
    //             labelButton={"Batal"}
    //             color={"#00BAEB"}
    //             backgroundColor={"white"}
    //             borderColor={"#00BAEB"}
    //             borderRadius={5}
    //             height={25}
    //             onClick={() => dispatch(clearEditAkun4())}
    //           />
    //           <Buttons
    //             labelButton={"Simpan"}
    //             backgroundColor={"#00BAEB"}
    //             height={25}
    //             marginLeft={5}
    //             borderRadius={5}
    //             onClick={() =>
    //               dispatch(
    //                 updateAkun4({
    //                   kode_akun_4: akun4Update.kode_akun_4,
    //                   data: {
    //                     kode_akun_3: akun4Update.kode_akun_3,
    //                     kode_akun_4: akun4Update.kode_akun_4,
    //                     uraian_akun_4: akun4Update.uraian_akun_4,
    //                   },
    //                 })
    //               )
    //             }
    //           />
    //           </Space>
    //         ) : (
    //           <Space align="center">
    //           <Buttons
    //             icon={<EditOutlined />}
    //             borderRadius={20}
    //             marginRight={5}
    //             backgroundColor={"orange"}
    //             borderColor={"orange"}
    //             color={"black"}
    //             height={30}
    //             onClick={() => dispatch(AkunById4(record.kode_akun_4))}
    //           />
    //           </Space>
    //         )}

    //       </div>

    //     );
    //   },
    // },
  ];

  return (
    <div style={{ margin: 5 }}>
      <div
        style={{
          padding: 5,
          zIndex: 0,
          overflowX: "auto",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Tabel
          dataSource={coa4bysub3}
          columns={column}
          rowKey={"kode_coa_4"}
          expandedRowKeys={expandKey}
          pagination={false}
          expandable={{
            expandedRowRender: (record, index) => (
              <ChartOfAccount5
                record={record}
                useEffect={useEffect}
                useSelector={useSelector}
                dispatch={dispatch}
              />
            ),
          }}
          expandIcon={({ expanded, onExpand, record }) => {
            if (record.kode_coa_4 === null) {
              return "";
            }
            return expanded ? (
              <MinusCircleOutlined
                onClick={() => {
                  setExpandKey([]);
                  dispatch(fetchCOA5bySub4(0));
                }}
              />
            ) : (
              <PlusCircleOutlined
                onClick={() => {
                  setExpandKey([record.kode_coa_4]);
                  dispatch(fetchCOA5bySub4(record.kode_coa_4));
                }}
              />
            );
          }}
        />
      </div>
      {/* <MessagePost
          visible={postakun4.status !== null ? true : false}
          message={postakun4.message}
          status={postakun4.status}
        /> */}
    </div>
  );
};

export default ChartOfAccount4;
