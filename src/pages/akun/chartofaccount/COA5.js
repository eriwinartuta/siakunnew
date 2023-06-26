import React, { useState, useEffect } from "react";
import { Tabel, Buttons, TextInput } from "../../../component";
import {
  SearchOutlined,
  MinusCircleOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";

import "../../../assets/style/table.css";
import { Tag, Space, Tooltip } from "antd";
import ChartOfAccount6 from "./COA6";
import { fetchCOA6bySub5 } from "../../../store/coa/action";

const ChartOfAccount5 = ({ record, dispatch, useSelector }) => {
  const { coa5bysub4 } = useSelector((state) => state.reducerCOA);

  const [expandKey, setExpandKey] = useState([]);

  //   const [inputAkun5, setTambahAkun5] = useState({
  //     kode_akun_4: record.kode_akun_4,
  //     kode_akun_5:"",
  //     uraian_akun_5: "",
  //   });

  //   useEffect(() => {
  //     if (postakun5?.status !== null) {
  //       setTimeout(() => {
  //         dispatch(clearPostAkun5());
  //       }, 2000);
  //     }
  //     // eslint-disable-next-line
  //   }, [postakun5?.status]);

  //   const [akun5Update, setAkun5Update] = useState({
  //     kode_akun_4: record.kode_akun_4,
  //     kode_akun_5:"",
  //     uraian_akun_5: "",
  //   });

  //   useEffect(() => {
  //     setAkun5Update({
  //       kode_akun_4: akun5byid.kode_akun_4,
  //       kode_akun_5: akun5byid.kode_akun_5,
  //       uraian_akun_5: akun5byid.uraian_akun_5,
  //     });
  //   }, [akun5byid]);

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
                //       setInputAkun5({
                //         kode_akun_4: record.kode_akun_4,
                //         akun5: akun5bysub4,
                //       })
                //     )
                //   }
              />
            </Tooltip>
          </Space>
        );
      },
      dataIndex: "kode_coa_5",
      key: "kode_coa_5",
      width: 80,
      align: "center",
      render: (text, record, index) => {
        if (record.uraian_coa_5 === null) {
          return <div></div>;
        }
        return (
          <Tag style={{ fontSize: 16, padding: 5, margin: 5 }} color="#027CF6">
            {text}
          </Tag>
        );
      },
    },
    {
      title: "Deskripsi",
      dataIndex: "uraian_coa_5",
      key: "uraian_coa_5",
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
        return record.uraian_coa_5.toLowerCase().includes(value.toLowerCase());
      },
      render: (text, record, index) => {
        // if (record.uraian_akun_5 === null) {
        //   return (
        //     <div>
        //       <TextInput
        //         placeholder={"Deskripsi Akun"}
        //         marginBottom={4}
        //         value={inputAkun5.uraian_akun_5}
        //         onChange={(e) =>
        //           setTambahAkun5({
        //             ...inputAkun5,
        //             uraian_akun_5: e.target.value,
        //           })
        //         }
        //       />
        //     </div>
        //   );
        // }
        return (
          <div>
            {/* {editakun5 === record.kode_akun_5 ? (
              <TextInput
                value={akun5Update.uraian_akun_5}
                onChange={(e) =>
                  setAkun5Update({
                    ...akun5Update,
                    uraian_akun_5: e.target.value,
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
                <Space> {record.uraian_akun_5} </Space>
              </div>
            )} */}
            <Space> {record.uraian_coa_5} </Space>
          </div>
        );
      },
    },
    // {
    //   title: "Aksi",
    //   dataIndex: "aksi",
    //   key: "aksi",
    //   align: "center",
    //   width:180,
    //   render: (text, record, index) => {
    //     if (record.uraian_akun_5 === null) {
    //       return (
    //         <Space align="center">
    //           <Buttons
    //             labelButton={"Batal"}
    //             color={"#00BAEB"}
    //             backgroundColor={"white"}
    //             borderColor={"#00BAEB"}
    //             borderRadius={5}
    //             height={25}
    //             onClick={() => dispatch(clearInputAkun5(record.kode_akun_4))}
    //           />
    //           <Buttons
    //             labelButton={"Simpan"}
    //             backgroundColor={"#00BAEB"}
    //             height={25}
    //             marginLeft={3}
    //             borderRadius={5}
    //             onClick={() => {
    //               dispatch(postAkun5(inputAkun5));
    //               console.log("posting data", inputAkun5);
    //               setTambahAkun5({
    //                 ...inputAkun5,
    //                 kode_akun_5:"",
    //                 uraian_akun_5: "",
    //               });
    //             }}
    //           />
    //         </Space>
    //       );
    //     }
    //     return (
    //       <div>
    //         {editakun5 === record.kode_akun_5 ? (
    //           <Space align="center">
    //            <Buttons
    //             labelButton={"Batal"}
    //             color={"#00BAEB"}
    //             backgroundColor={"white"}
    //             borderColor={"#00BAEB"}
    //             borderRadius={5}
    //             height={25}
    //             onClick={() => dispatch(clearEditAkun5())}
    //           />
    //           <Buttons
    //             labelButton={"Simpan"}
    //             backgroundColor={"#00BAEB"}
    //             height={25}
    //             marginLeft={3}
    //             borderRadius={5}
    //             onClick={() =>
    //               dispatch(
    //                 updateAkun5({
    //                   kode_akun_5: akun5Update.kode_akun_5,
    //                   data: {
    //                     kode_akun_4: akun5Update.kode_akun_4,
    //                     kode_akun_5: akun5Update.kode_akun_5,
    //                     uraian_akun_5: akun5Update.uraian_akun_5,
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
    //             marginRight={3}
    //             backgroundColor={"orange"}
    //             borderColor={"orange"}
    //             color={"black"}
    //             height={30}
    //             onClick={() => dispatch(AkunById5(record.kode_akun_5))}
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
          dataSource={coa5bysub4}
          columns={column}
          rowKey={"kode_coa_5"}
          pagination={false}
          expandedRowKeys={expandKey}
          expandable={{
            expandedRowRender: (record, index) => (
              <ChartOfAccount6
                record={record}
                useEffect={useEffect}
                useSelector={useSelector}
                dispatch={dispatch}
              />
            ),
          }}
          expandIcon={({ expanded, onExpand, record }) => {
            if (record.kode_coa_5 === null) {
              return "";
            }
            return expanded ? (
              <MinusCircleOutlined
                onClick={() => {
                  setExpandKey([]);
                  dispatch(fetchCOA6bySub5(0));
                }}
              />
            ) : (
              <PlusCircleOutlined
                onClick={() => {
                  setExpandKey([record.kode_coa_5]);
                  dispatch(fetchCOA6bySub5(record.kode_coa_5));
                }}
              />
            );
          }}
        />
      </div>
      {/* <MessagePost
          visible={postakun5.status !== null ? true : false}
          message={postakun5.message}
          status={postakun5.status}
        /> */}
    </div>
  );
};

export default ChartOfAccount5;
