import React, { useState, useEffect } from "react";
import { Tabel, Buttons, TextInput } from "../../../component";
import {
  SearchOutlined,
  MinusCircleOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import {
  fetchAkun3bySub2,
} from "../../../store/akun/action";
import "../../../assets/style/table.css";
import { Tag, Space, Tooltip } from "antd";
import ChartOfAccount3 from "./COA3";
import { fetchCOA3bySub2 } from "../../../store/coa/action";

const ChartOfAccount2 = ({ record, dispatch, useSelector }) => {
  const { coa2bysub1 } = useSelector((state) => state.reducerCOA);

  const [expandKey, setExpandKey] = useState([]);

  //   const [inputAkun2, setTambahAkun2] = useState({
  //     kode_akun_1: record.kode_akun_1,
  //     kode_akun_2: "",
  //     uraian_akun_2: "",
  //   });

  //   useEffect(() => {
  //     if (postakun2?.status !== null) {
  //       setTimeout(() => {
  //         dispatch(clearPostAkun2());
  //       }, 2000);
  //     }
  //     // eslint-disable-next-line
  //   }, [postakun2?.status]);

  //   const [akun2Update, setAkun2Update] = useState({
  //     kode_akun_1: record.kode_akun_1,
  //     kode_akun_2: "",
  //     uraian_akun_2: "",
  //   });

  //   useEffect(() => {
  //     setAkun2Update({
  //       kode_akun_1: akun2byid.kode_akun_1,
  //       kode_akun_2: akun2byid.kode_akun_2,
  //       uraian_akun_2: akun2byid.uraian_akun_2,
  //     });
  //   }, [akun2byid]);

  const column = [
    {
      title: () => {
        return (
          <Space direction="horzontal" align="start">
            <Tooltip title="Tambah Akun ">
              <Buttons
                //labelButton={"Tambah"}
                height={25}
                icon={<PlusCircleOutlined />}
                disable={true}
                //   onClick={() =>
                //     dispatch(
                //       setInputAkun2({
                //         kode_akun_1: record.kode_akun_1,
                //         akun2: akun2bysub1,
                //       })
                //     )
                //   }
              />
            </Tooltip>
          </Space>
        );
      },
      dataIndex: "kode_coa_2",
      key: "kode_coa_2",
      width: 50,
      align: "center",
      render: (text, record, index) => {
        if (record.uraian_coa_2 === null) {
          return <div></div>;
        }
        return (
          <Tag style={{ fontSize: 16, padding: 5, margin: 5 }} color="#FF9800">
            {text}
          </Tag>
        );
      },
    },
    {
      title: "Deskripsi",
      dataIndex: "uraian_coa_2",
      key: "uraian_coa_2",
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
        return record.uraian_akun_2.toLowerCase().includes(value.toLowerCase());
      },
      render: (text, record, index) => {
        // if (record.uraian_akun_2 === null) {
        //   return (
        //     <div>
        //       <TextInput
        //         placeholder={"Deskripsi Akun"}
        //         marginBottom={4}
        //         value={inputAkun2.uraian_akun_2}
        //         onChange={(e) =>
        //           setTambahAkun2({
        //             ...inputAkun2,
        //             uraian_akun_2: e.target.value,
        //           })
        //         }
        //       />
        //     </div>
        //   );
        // }
        return (
          <div>
            {/* {editakun2 === record.kode_akun_2 ? (
              <TextInput
                value={akun2Update.uraian_akun_2}
                onChange={(e) =>
                  setAkun2Update({
                    ...akun2Update,
                    uraian_akun_2: e.target.value,
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
              
                <Space> {record.uraian_akun_2} </Space>
              </div>
            )} */}
            <Space> {record.uraian_coa_2} </Space>
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
    //     if (record.uraian_akun_2 === null) {
    //       return (
    //         <Space align="center">
    //           <Buttons
    //             labelButton={"Batal"}
    //             color={"#00BAEB"}
    //             backgroundColor={"white"}
    //             borderColor={"#00BAEB"}
    //             borderRadius={5}
    //             height={25}
    //             onClick={() => dispatch(clearInputAkun2(record.kode_akun_1))}
    //           />
    //           <Buttons
    //             labelButton={"Simpan"}
    //             backgroundColor={"#00BAEB"}
    //             height={25}
    //             marginLeft={3}
    //             borderRadius={5}
    //             onClick={() => {
    //               dispatch(postAkun2(inputAkun2));
    //               console.log("posting data", inputAkun2);
    //               setTambahAkun2({
    //                 ...inputAkun2,
    //                 kode_akun_1: "",
    //                 kode_akun_2: "",
    //                 uraian_akun_1: "",
    //               });
    //             }}
    //           />
    //         </Space>
    //       );
    //     }
    //     return (
    //       <div>
    //         {editakun2 === record.kode_akun_2 ? (
    //           <Space align="center">
    //             <Buttons
    //               labelButton={"Batal"}
    //               color={"#00BAEB"}
    //               backgroundColor={"white"}
    //               borderColor={"#00BAEB"}
    //               borderRadius={5}
    //               height={25}
    //               onClick={() => dispatch(clearEditAkun2())}
    //             />
    //             <Buttons
    //               labelButton={"Simpan"}
    //               backgroundColor={"#00BAEB"}
    //               height={25}
    //               marginLeft={3}
    //               borderRadius={5}
    //               onClick={() =>
    //                 dispatch(
    //                   updateAkun2({
    //                     kode_akun_2: akun2Update.kode_akun_2,
    //                     data: {
    //                       kode_akun_1: akun2Update.kode_akun_1,
    //                       kode_akun_2: akun2Update.kode_akun_2,
    //                       uraian_akun_2: akun2Update.uraian_akun_2,
    //                     },
    //                   })
    //                 )
    //               }
    //             />
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
    //             onClick={() => dispatch(AkunById2(record.kode_akun_2))}
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
          dataSource={coa2bysub1}
          columns={column}
          rowKey={"kode_coa_2"}
          expandedRowKeys={expandKey}
          pagination={false}
          expandable={{
            expandedRowRender: (record, index) => (
              <ChartOfAccount3
                record={record}
                useEffect={useEffect}
                useSelector={useSelector}
                dispatch={dispatch}
              />
            ),
          }}
          expandIcon={({ expanded, onExpand, record }) => {
            if (record.kode_coa_2 === null) {
              return "";
            }
            return expanded ? (
              <MinusCircleOutlined
                onClick={() => {
                  setExpandKey([]);
                  dispatch(fetchAkun3bySub2(0));
                }}
              />
            ) : (
              <PlusCircleOutlined
                onClick={() => {
                  setExpandKey([record.kode_coa_2]);
                  dispatch(fetchCOA3bySub2(record.kode_coa_2));
                }}
              />
            );
          }}
        />
      </div>
      {/* <MessagePost
          visible={postakun2.status !== null ? true : false}
          message={postakun2.message}
          status={postakun2.status}
        /> */}
    </div>
  );
};

export default ChartOfAccount2;
