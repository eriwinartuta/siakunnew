import React, { useState, useEffect } from "react";
import {
  Tabel,
  Buttons,
  TextInput,
  MessagePost,
  TextAreaInput,
  Modals,
} from "../../../component";
import {
  PlusOutlined,
  EditOutlined,
  SearchOutlined,
  EyeInvisibleOutlined,
  EyeOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import {
  postAkun6,
  updateAkun6,
  AkunById6,
  clearPostAkun6,
  updateStatus6,
  nonupdateStatus6,
} from "../../../store/akun/action";
import "../../../assets/style/table.css";
import { Tag, Space, Tooltip, Popconfirm } from "antd";
import { FONTSTYLE } from "../../../component/font";

const BaganAkunStandar6 = ({ record, dispatch, useSelector }) => {
  const { akun6byid, postakun6, akun6bysub5 } = useSelector(
    (state) => state.reducerBAS
  );


  const [visible, setVisible] = useState();
  const [modalUpdate, setModalUpdate] = useState();

  const [inputAkun6, setTambahAkun6] = useState({
    kode_akun_5: record.kode_akun_5,
    kode_akun_6: "",
    uraian_akun_6: "",
    keterangan: "-",
  });

  useEffect(() => {
    if (postakun6?.status !== null) {
      setTimeout(() => {
        dispatch(clearPostAkun6());
      }, 2000);
    }
    // eslint-disable-next-line
  }, [postakun6?.status]);

  const [akun6Update, setAkun6Update] = useState({
    kode_akun_5: record.kode_akun_5,
    kode_akun_6: "",
    uraian_akun_6: "",
    keterangan: "",
  });

  const [aktifStatus, setAktifStatus] = useState({
    kode_akun_5: "",
    kode_akun_6: "",
    aktif: 1,
  });
  const [nonaktifStatus, setnonAktifStatus] = useState({
    kode_akun_5: "",
    kode_akun_6: "",
    aktif: 0,
  });

  useEffect(() => {
    setAkun6Update({
      kode_akun_5: akun6byid.kode_akun_5,
      kode_akun_6: akun6byid.kode_akun_6,
      uraian_akun_6: akun6byid.uraian_akun_6,
      keterangan: akun6byid.keterangan,
    });
  }, [akun6byid]);

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
                onClick={() => {
                  setVisible(!visible);
                }}
              />
            </Tooltip>
          </Space>
        );
      },
      dataIndex: "kode_akun_6",
      key: "kode_akun_6",
      width: 100,
      align: "center",
      render: (text, record, index) => {
        if (record.uraian_akun_6 === null) {
          return <div></div>;
        }
        return (
          <Tag
            className="tracking-wide"
            style={{ fontSize: 16, padding: 5, margin: 5 }}
            color="#6D2BA2"
          >
            {text}
          </Tag>
        );
      },
    },
    {
      title: "Deskripsi",
      dataIndex: "uraian_akun_6",
      key: "uraian_akun_6",
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
              placeholder="Cari Deskripsi Akun.."
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
        return record.uraian_akun_6.toLowerCase().includes(value.toLowerCase());
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
              {record.uraian_akun_6}
            </p> */}
            <Space> {record.uraian_akun_6} </Space>
          </div>
        );
      },
    },
    {
      title: "Status",
      dataIndex: "aktif",
      key: "aktif",
      align: "center",
      width: 100,
      render: (text, record, index) => {
        return (
          <div>
            {record.aktif === 0 ? (
              <Tag color={"red"}> Tidak Aktif </Tag>
            ) : (
              <Tag color={"green"}> Aktif </Tag>
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
        return (
          <Space align="center">
            <Buttons
              icon={<EditOutlined />}
              borderRadius={20}
              backgroundColor={"orange"}
              borderColor={"orange"}
              color={"black"}
              height={30}
              onClick={() => {
                setModalUpdate(!modalUpdate);
                dispatch(AkunById6(record.kode_akun_6));
              }}
            />
            {record.aktif === 0 ? (
              <Tooltip title="Aktifkan Status">
                <Popconfirm
                  title="Apakah yakin akan mengaktifkan Akun ini?"
                  onConfirm={() => {
                    dispatch(
                      updateStatus6({
                        //kode_akun_6: aktifStatus.kode_akun_6,
                        data: aktifStatus,
                      })
                    );
                  }}
                  onCancel={null}
                  okText="Ya"
                  cancelText="Batal"
                >
                  <Buttons
                    backgroundColor={"green"}
                    borderColor={"green"}
                    color={"white"}
                    icon={<EyeOutlined />}
                    shape="circle"
                    onClick={() => {
                      setAktifStatus({
                        ...aktifStatus,
                        kode_akun_5: record.kode_akun_5,
                        kode_akun_6: record.kode_akun_6,
                      });
                    }}
                  />
                </Popconfirm>
              </Tooltip>
            ) : (
              <Tooltip title="Non Aktifkan Status">
                <Popconfirm
                  title="Apakah yakin akan menonaktifkan Akun ini?"
                  onConfirm={() => {
                    dispatch(
                      nonupdateStatus6({
                        data: nonaktifStatus,
                      })
                    );
                  }}
                  onCancel={null}
                  okText="Ya"
                  cancelText="Batal"
                >
                  <Buttons
                    backgroundColor={"red"}
                    borderColor={"red"}
                    color={"white"}
                    icon={<EyeInvisibleOutlined />}
                    shape="circle"
                    onClick={() => {
                      setnonAktifStatus({
                        ...nonaktifStatus,
                        kode_akun_5: record.kode_akun_5,
                        kode_akun_6: record.kode_akun_6,
                      });
                    }}
                  />
                </Popconfirm>
              </Tooltip>
            )}
          </Space>
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
          dataSource={akun6bysub5}
          columns={column}
          rowKey={"kode_akun_6"}
          pagination={false}
          // expandedRowKeys={expandKey}
          // expandable={{
          //   expandedRowRender: (record) => (
          //     <p
          //       style={{
          //         margin: 0,
          //       }}
          //     >
          //       {record.keterangan === null ? (
          //         "Keterangan Belum diisi"
          //       ) : (
          //         <p> {record.keterangan} </p>
          //       )}
          //     </p>
          //   ),
          // }}
          // expandIcon={({ expanded, onExpand, record }) => {
          //   if (record.kode_akun_6 === null) {
          //     return "";
          //   }
          //   return expanded ? (
          //     <MinusCircleOutlined onClick={() => setExpandKey([])} />
          //   ) : (
          //     <PlusCircleOutlined
          //       onClick={() => {
          //         setExpandKey([record.kode_akun_6]);
          //         //dispatch(fetchAkun6());
          //       }}
          //     />
          //   );
          // }}
        />
      </div>

      <Modals
        visible={visible}
        title="Tambah Akun BAS 6"
        iconTitle={<PlusOutlined style={{ marginRight: 5 }} />}
        onCancel={() => {
          setVisible(!visible);
        }}
        width={500}
        className={"modal"}
        contentModal={
          <>
            <Space
              direction="vertical"
              style={{
                display: "flex",
                padding: "1%",
                marginBottom: 20,
                paddingTop: 0,
                fontFamily: FONTSTYLE.POPPINS,
              }}
            >
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Uraian Akun 6
              </label>
              <TextInput
                value={inputAkun6.uraian_akun_6}
                placeholder={"Uraian Akun"}
                onChange={(e) => {
                  setTambahAkun6({
                    ...inputAkun6,
                    uraian_akun_6: e.target.value,
                  });
                }}
              />
              <label className="block text-gray-700 text-sm font-bold mb-2">
                {" "}
                Keterangan{" "}
              </label>
              <TextAreaInput
                rows={8}
                value={inputAkun6.keterangan}
                placeholder={"Masukan Keterangan"}
                onChange={(e) => {
                  setTambahAkun6({
                    ...inputAkun6,
                    keterangan: e.target.value,
                  });
                }}
              />
            </Space>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Buttons
                labelButton={"Batal"}
                backgroundColor={"white"}
                borderColor={"#229CE1"}
                color={"#229CE1"}
                marginRight={10}
                onClick={() => {
                  setVisible(!visible);
                }}
              />
              <Buttons
                onClick={() => {
                  dispatch(postAkun6(inputAkun6));
                  console.log("posting data", inputAkun6);
                  setVisible(!visible);
                  setTambahAkun6({
                    ...inputAkun6,
                    uraian_akun_6: "",
                    keterangan: "",
                  });
                }}
                borderColor={"#229CE1"}
                backgroundColor={"#229CE1"}
                labelButton={"Simpan"}
                type={"primary"}
              />
            </div>
          </>
        }
      />

      <Modals
        visible={modalUpdate}
        title="Ubah Akun Bas 6"
        iconTitle={<EditOutlined style={{ marginRight: 5 }} />}
        onCancel={() => {
          setModalUpdate(!modalUpdate);
        }}
        width={500}
        className={"modal"}
        contentModal={
          <>
            <Space
              direction="vertical"
              style={{
                display: "flex",
                padding: "1%",
                marginBottom: 20,
                paddingTop: 0,
                fontFamily: FONTSTYLE.POPPINS,
              }}
            >
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Uraian Akun 6
              </label>
              <TextInput
                value={akun6Update.uraian_akun_6}
                placeholder={"Masukkan Uraian"}
                onChange={(e) => {
                  setAkun6Update({
                    ...akun6Update,
                    uraian_akun_6: e.target.value,
                  });
                }}
              />
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Keterangan
              </label>
              <TextAreaInput
                rows={8}
                value={akun6Update.keterangan}
                placeholder={"Masukkan keterangan"}
                onChange={(e) => {
                  setAkun6Update({
                    ...akun6Update,
                    keterangan: e.target.value,
                  });
                }}
              />
            </Space>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Buttons
                labelButton={"Batal"}
                backgroundColor={"white"}
                borderColor={"#229CE1"}
                color={"#229CE1"}
                marginRight={10}
                onClick={() => {
                  setModalUpdate(!modalUpdate);
                  setAkun6Update({
                    ...akun6Update,
                    uraian_akun_6: "",
                    keterangan: "",
                  });
                }}
              />
              <Buttons
                onClick={() => {
                  dispatch(
                    updateAkun6({
                      kode_akun_6: akun6Update.kode_akun_6,
                      data: akun6Update,
                    })
                  );
                  console.log("update data", akun6Update);
                  setModalUpdate(!modalUpdate);
                  setAkun6Update({
                    ...akun6Update,
                    uraian_akun_6: "",
                    keterangan: "",
                  });
                }}
                borderColor={"#229CE1"}
                backgroundColor={"#229CE1"}
                labelButton={"Simpan"}
                type={"primary"}
              />
            </div>
          </>
        }
      />

      <MessagePost
        visible={postakun6.status !== null ? true : false}
        message={postakun6.message}
        status={postakun6.status}
      />
    </div>
  );
};

export default BaganAkunStandar6;
