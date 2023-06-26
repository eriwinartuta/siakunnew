import React, { useState, useEffect } from "react";
import { Tabel, Buttons, TextInput, MessagePost } from "../../../component";
import {  EditOutlined, SearchOutlined, MinusCircleOutlined, PlusCircleOutlined } from "@ant-design/icons";
import {
  setInputAkun3,
  clearInputAkun3,
  postAkun3,
  updateAkun3,
  clearEditAkun3,
  AkunById3,
  clearPostAkun3,
  fetchAkun4bySub3
} from "../../../store/akun/action";
import "../../../assets/style/table.css";
import { Tag, Space, Tooltip } from "antd";
import BaganAkunStandar4 from "./BASSub4";

const BaganAkunStandar3 = ({ record, dispatch, useSelector }) => {
  const { datalistakun3, akun3byid, editakun3, postakun3, akun3bysub2 } = useSelector(
    (state) => state.reducerBAS
  );

  const [expandKey, setExpandKey] = useState([]);

  const [inputAkun3, setTambahAkun3] = useState({
    kode_akun_2: record.kode_akun_2,
    kode_akun_3:"",
    uraian_akun_3: "",
  });

  useEffect(() => {
    if (postakun3?.status !== null) {
      setTimeout(() => {
        dispatch(clearPostAkun3());
      }, 2000);
    }
    // eslint-disable-next-line
  }, [postakun3?.status]);


  const [akun3Update, setAkun3Update] = useState({
    kode_akun_2: record.kode_akun_3,
    kode_akun_3:"",
    uraian_akun_3: "",
  });

  useEffect(() => {
    setAkun3Update({
      kode_akun_2: akun3byid.kode_akun_2,
      kode_akun_3: akun3byid.kode_akun_3,
      uraian_akun_3: akun3byid.uraian_akun_3,
    });
  }, [akun3byid]);

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
              onClick={() =>
                dispatch(
                  setInputAkun3({
                    kode_akun_2: record.kode_akun_2,
                    akun3: akun3bysub2,
                  })
                )
              }
            />
             </Tooltip>           
          </Space>
        );
      },
      dataIndex: "kode_akun_3",
      key: "kode_akun_3",
      width: 50,
      align: "center",
      render: (text, record, index) => {
        if (record.uraian_akun_3 === null) {
          return <div></div>;
        }
        return <Tag style={{ fontSize: 16,  padding: 5, margin:5 }} color="#1CD386">{text}</Tag>;
      },
    },
    {
      title: "Deskripsi",
      dataIndex: "uraian_akun_3",
      key: "uraian_akun_3",
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
        return record.uraian_akun_3.toLowerCase().includes(value.toLowerCase());
      },
      render: (text, record, index) => {
        if (record.uraian_akun_3 === null) {
          return (
            <div>
              <TextInput
                placeholder={"Deskripsi Akun"}
                marginBottom={4}
                value={inputAkun3.uraian_akun_3}
                onChange={(e) =>
                  setTambahAkun3({
                    ...inputAkun3,
                    uraian_akun_3: e.target.value,
                  })
                }
              />
            </div>
          );
        }
        return (
          <div>
            {editakun3 === record.kode_akun_3 ? (
              <TextInput
                value={akun3Update.uraian_akun_3}
                onChange={(e) =>
                  setAkun3Update({
                    ...akun3Update,
                    uraian_akun_3: e.target.value,
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
                  {record.uraian_akun_3}
                </p> */}
                <Space> {record.uraian_akun_3} </Space>
              </div>
            )}
          </div>
        );
      },
    },
    {
      title: "Aksi",
      dataIndex: "aksi",
      key: "aksi",
      align: "center",
      width: 180,
      render: (text, record, index) => {
        if (record.uraian_akun_3 === null) {
          return (
           <Space align="center"> 
              <Buttons
                labelButton={"Batal"}
                color={"#00BAEB"}
                backgroundColor={"white"}
                borderColor={"#00BAEB"}
                borderRadius={5}
                height={25}
                onClick={() => dispatch(clearInputAkun3(record.kode_akun_2))}
              />
              <Buttons
                labelButton={"Simpan"}
                backgroundColor={"#00BAEB"}
                height={25}
                marginLeft={3}
                borderRadius={5}
                onClick={() => {
                  dispatch(postAkun3(inputAkun3));
                  console.log("posting data", inputAkun3);
                  setTambahAkun3({
                    ...inputAkun3,
                    kode_akun_3:"",
                    uraian_akun_3: "",
                  });
                }}
              />
              </Space>
          );
        }
        return (
          <div>
            {editakun3 === record.kode_akun_3 ? (
             <Space align="center"> 
               <Buttons
                labelButton={"Batal"}
                color={"#00BAEB"}
                backgroundColor={"white"}
                borderColor={"#00BAEB"}
                borderRadius={5}
                height={25}
                onClick={() => dispatch(clearEditAkun3())}
              />
              <Buttons
                labelButton={"Simpan"}
                backgroundColor={"#00BAEB"}
                height={25}
                marginLeft={3}
                borderRadius={5}
                onClick={() =>
                  dispatch(
                    updateAkun3({
                      kode_akun_3: akun3Update.kode_akun_3,
                      data: {
                        kode_akun_2: akun3Update.kode_akun_2,
                        kode_akun_3: akun3Update.kode_akun_3,
                        uraian_akun_3: akun3Update.uraian_akun_3,
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
                backgroundColor={"orange"}
                borderColor={"orange"}
                color={"black"}
                height={30}
                onClick={() => dispatch(AkunById3(record.kode_akun_3))}
              />
              </Space>
            )}
          </div>

         
        );
      },
    },
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
          dataSource={datalistakun3}
          columns={column}
          rowKey={"kode_akun_3"}
          pagination={false}
          expandedRowKeys={expandKey}
          expandable={{
            expandedRowRender: (record, index) => (
              <BaganAkunStandar4
                record={record}
                useEffect={useEffect}
                useSelector={useSelector}
                dispatch={dispatch}
              />
            ),
          }}
          expandIcon={({ expanded, onExpand, record }) => {
            if (record.kode_akun_3 === null) {
              return "";
            }
            return expanded ? (
              <MinusCircleOutlined onClick={() => {
                setExpandKey([])
                dispatch(fetchAkun4bySub3(0))
              }} />
            ) : (
              <PlusCircleOutlined
                onClick={() => {
                  setExpandKey([record.kode_akun_3]);
                  dispatch(fetchAkun4bySub3(record.kode_akun_3));
                 
                }}
              />
            );
          }}
        />
      </div>
      <MessagePost
          visible={postakun3.status !== null ? true : false}
          message={postakun3.message}
          status={postakun3.status}
        />
    </div>
  );
};

export default BaganAkunStandar3;
