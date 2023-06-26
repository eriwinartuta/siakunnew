import React, { useEffect, useState } from "react";
import { Space, Tooltip } from "antd";
import { useDispatch } from "react-redux";
import {
  clearPostKegiatan,
  fetchKegiatan,
  clearInputKegiatan,
  postKegiatan,
  clearEditKegiatan,
  updateKegiatan,
  kegiatanByID,
  fetchDataSBMByKegiatan,
} from "../../../store/sbm/action";
import { setGlobalTitle } from "../../../store/global";
import {
  Tabel,
  Buttons,
  Modals,
  TextInput,
  MessagePost,
  TextAreaInput
} from "../../../component";
import { useSelector } from "react-redux";
import {
  EditOutlined,
  MinusCircleOutlined,
  PlusCircleOutlined,
  PlusOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import DataKomponen from "./komponen";
import { FONTSTYLE } from "../../../component/font";
// import { useNavigate } from "react-router-dom";
const DataSBM = () => {
  // const navigate= useNavigate();
  const dispatch = useDispatch();
  const [visible, setVisible] = useState();
  const {
    datalistkegiatan,
    postkegiatan,
    kegiatanbyid,
    editkegiatan,
  } = useSelector((state) => state.reducerDataSBM);

  const { user } = useSelector((state) => state.reducerGlobal);

  const [expandKey, setExpandKey] = useState([]);

  const [kegiatanInput, setKegiatanInput] = useState({
    uraian: "",
    ucr: "Testing",
  });


  const [kegiatanUpdate, setKegiatanUpdate] = useState({
    kode_bentuk_kegiatan: "",
    uraian: "",
  });

  useEffect(() => {
    if (postkegiatan?.status !== null) {
      setTimeout(() => {
        dispatch(clearPostKegiatan());
      }, 3000);
    }
    // eslint-disable-next-line
  }, [postkegiatan?.status]);

  useEffect(() => {
    setKegiatanUpdate({
      ...kegiatanUpdate,
      kode_bentuk_kegiatan: kegiatanbyid.kode_bentuk_kegiatan,
      uraian: kegiatanbyid.uraian,
    });
    // eslint-disable-next-line
  }, [kegiatanbyid]);

  // const [deletes, setDelete] = useState({
  //   kode_bentuk_kegiatan: "",
  // });

  useEffect(() => {
    dispatch(setGlobalTitle("Utilitas / Data SBM"));
    dispatch(fetchKegiatan());
  }, [dispatch]);

  const column = [
    {
      title: () => {
        return (
          <Space direction="horizontal" align="start">
            <Tooltip title="Tambah Kegiatan"> 
            <Buttons
              height={25}
              icon={<PlusOutlined />}
              onClick={() => {
                setVisible(!visible);
                //console.log("klik", record.kode_bentuk_kegiatan)
              }}
              // onClick={() =>
              //   dispatch(
              //     setInputKegiatan({
              //       listkegiatan: listkegiatan,
              //     })
              //   )
              // }
            />
            </Tooltip>
          </Space>
        );
      },
      dataIndex: "kode_bentuk_kegiatan",
      key: "kode_bentuk_kegiatan",
      width: 75,
      align: "center",
      render: (text, record, index) => {
        if (record.uraian === null) {
          return <div></div>;
        }
        return <Space direction="horizontal"> {text} </Space>;
      },
    },
    {
      title: "Bentuk Kegiatan",
      dataIndex: "uraian",
      key: "uraian",
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
              width={500}
              placeholder="Cari Kegiatan .."
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
        return record.uraian.toLowerCase().includes(value.toLowerCase());
      },
      render: (text, record, index) => {
        if (record.kode_bentuk_kegiatan === null) {
          return (
            <div>
              <TextInput
                placeholder={"Bentuk Kegiatan"}
                marginBottom={4}
                value={kegiatanInput.uraian}
                onChange={(e) =>
                  setKegiatanInput({
                    ...kegiatanInput,
                    uraian: e.target.value,
                  })
                }
              />
            </div>
          );
        }
        return (
          <div>
            {editkegiatan === record.kode_bentuk_kegiatan ? (
              <TextInput
                value={kegiatanUpdate.uraian}
                onChange={(e) =>
                  setKegiatanUpdate({
                    ...kegiatanUpdate,
                    uraian: e.target.value,
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
                <Space direction="horizontal">
                  <b> {record.uraian} </b>
                </Space>
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
      width: 80,
      render: (text, record, index) => {
        if (record.uraian === null) {
          return (
            <div style={{ display: "flex" }}>
              <Buttons
                labelButton={"Batal"}
                color={"#00BAEB"}
                backgroundColor={"white"}
                borderColor={"#00BAEB"}
                borderRadius={5}
                height={25}
                onClick={() => dispatch(clearInputKegiatan(datalistkegiatan))}
              />
              <Buttons
                labelButton={"Simpan"}
                backgroundColor={"#00BAEB"}
                height={25}
                marginLeft={3}
                borderRadius={5}
                onClick={() => {
                  dispatch(postKegiatan(kegiatanInput));
                  // console.log("posting data", kegiatanInput);
                  setKegiatanInput({
                    ...kegiatanInput,
                    uraian: "",
                  });
                }}
              />
            </div>
          );
        }
        return (
          <div>
            {editkegiatan === record.kode_bentuk_kegiatan ? (
              <Space align="center">
                <Buttons
                  labelButton={"Batal"}
                  color={"#00BAEB"}
                  backgroundColor={"white"}
                  borderColor={"#00BAEB"}
                  borderRadius={5}
                  height={25}
                  onClick={() => dispatch(clearEditKegiatan())}
                />
                <Buttons
                  labelButton={"Simpan"}
                  backgroundColor={"#00BAEB"}
                  height={25}
                  marginLeft={5}
                  borderRadius={5}
                  onClick={() =>
                    dispatch(
                      updateKegiatan({
                        kode_bentuk_kegiatan:
                          kegiatanUpdate.kode_bentuk_kegiatan,
                        data: {
                          kode_bentuk_kegiatan:
                            kegiatanUpdate.kode_bentuk_kegiatan,
                          uraian: kegiatanUpdate.uraian,
                          uch: user?.data.nama_pegawai,
                        },
                      })
                    )
                  }
                />
              </Space>
            ) : (
              <Space align="center">
                <Tooltip title="Ubah Data"> 
                <Buttons
                  icon={<EditOutlined />}
                  borderRadius={20}
                  marginRight={5}
                  backgroundColor={"orange"}
                  color={"black"}
                  borderColor={"orange"}
                  height={30}
                  onClick={() =>
                    dispatch(kegiatanByID(record.kode_bentuk_kegiatan))
                  }
                />
                </Tooltip>
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
          position: "sticky",
        }}
      >
        <div>
          <h5
            style={{
              marginBottom: 20,
              fontWeight: "700",
              fontSize: 24,
              fontFamily: FONTSTYLE.PUBLICSANS
            }}
          >
            Data Satuan Biaya Masukan (SBM)
          </h5>
        </div>
        {/* <div
          style={{
            display: "flex",
            alignItems: "right",
            justifyContent: "space-between",
            width: 150,
            marginLeft: 50,
          }}
        >
          <Buttons
            labelButton={"Tambah Satuan"}
            height={30}
            marginRight={10}
            icon={<PlusOutlined />}
            onClick={(e) => {
              navigate("satuan_kegiatan");
            }}
          />
        </div> */}
      </div>
      <div
        style={{
          padding: 5,
          zIndex: 0,
          overflowX: "auto",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          fontFamily: FONTSTYLE.POPPINS
        }}
      >
        <Tabel
          dataSource={datalistkegiatan}
          columns={column}
          rowKey={"kode_bentuk_kegiatan"}
          pagination={{
            defaultPageSize: 25,
            showSizeChanger: true,
            pageSizeOptions: ["25", "50", "75"],
          }}
          expandedRowKeys={expandKey}
          expandable={{
            expandedRowRender: (record, index) => (
              <DataKomponen
                key={index}
                kodeprogram={record.kode_sbm}
                dispatch={dispatch}
                useSelector={useSelector}
                useEffect={useEffect}
                record={record}
              />
            ),
          }}
          expandIcon={({ expanded, onExpand, record }) => {
            if (record.kode_bentuk_kegiatan === null) {
              return "";
            }
            return expanded ? (
              <MinusCircleOutlined onClick={() => {
                
                setExpandKey([])
                dispatch(fetchDataSBMByKegiatan(0));
              }} />
            ) : (
              <PlusCircleOutlined
                onClick={() => {
                  setExpandKey([record.kode_bentuk_kegiatan]);
                  dispatch(fetchDataSBMByKegiatan(record.kode_bentuk_kegiatan));
                }}
              />
            );
          }}
        />
      </div>
      <Modals
        visible={visible}
        title="Tambah Kegiatan"
        iconTitle={<PlusOutlined style={{ marginRight: 5 }} />}
        onCancel={() => {
          setVisible(!visible);
          setKegiatanInput({
            ...kegiatanInput,
            uraian: "",
          });
        }}
        width={800}
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
                fontFamily: FONTSTYLE.POPPINS
              }}
            >
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Nama Kegiatan :
              </label>
              <TextAreaInput
                rows={4}
                value={kegiatanInput.uraian}
                placeholder={"Masukkan Nama Kegiatan"}
                onChange={(e) => {
                  setKegiatanInput({
                    ...kegiatanInput,
                    uraian: e.target.value,
                  });
                }}
              />
            </Space>
            <div style={{ fontFamily: FONTSTYLE.POPPINS, display: "flex", justifyContent: "center" }}>
              <Buttons
                labelButton={"Batal"}
                backgroundColor={"white"}
                borderColor={"#229CE1"}
                color={"#229CE1"}
                marginRight={10}
                onClick={() => {
                  setVisible(!visible);
                  setKegiatanInput({
                    ...kegiatanInput,
                    uraian: "",
                  });
                }}
              />
              <Buttons
                onClick={() => {
                  dispatch(postKegiatan(kegiatanInput));
                  setVisible(!visible);
                  setKegiatanInput({
                    ...kegiatanInput,
                    uraian: ""
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
        visible={postkegiatan.status !== null ? true : false}
        message={postkegiatan.message}
        status={postkegiatan.status}
      />
    </div>
  );
};

export default DataSBM;
