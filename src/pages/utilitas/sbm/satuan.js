import React, { useEffect, useState } from "react";
import { Space, Tooltip } from "antd";
import { useDispatch } from "react-redux";
import {
  fetchSatuan,
  setInputSatuan,
  postSatuan,
  clearPostSatuan,
  clearInputSatuan,
} from "../../../store/sbm/action";
import { setGlobalTitle } from "../../../store/global";
import {
  Tabel,
  Buttons,
  TextInput,
  MessagePost,
} from "../../../component";
import { useSelector } from "react-redux";
import {
  EditOutlined,
  PlusOutlined,
  SearchOutlined,
} from "@ant-design/icons";

const DataSatuan = () => {

  const dispatch = useDispatch();
  const {
    listsatuan1,
    datalistsatuan,
    postsatuan,
  } = useSelector((state) => state.reducerDataSBM);

  // const { user } = useSelector((state) => state.reducerGlobal);

  const [satuanInput, setSatuanInput] = useState({
    nama_satuan: "",
    uraian: "",
  });

  //   const [kegiatanUpdate, setKegiatanUpdate] = useState({
  //     kode_bentuk_kegiatan: "",
  //     uraian: "",
  //   });

  useEffect(() => {
    if (postsatuan?.status !== null) {
      setTimeout(() => {
        dispatch(clearPostSatuan());
      }, 3000);
    }
    // eslint-disable-next-line
  }, [postsatuan?.status]);

  //   useEffect(() => {
  //     setKegiatanUpdate({
  //       ...kegiatanUpdate,
  //       kode_bentuk_kegiatan: kegiatanbyid.kode_bentuk_kegiatan,
  //       uraian: kegiatanbyid.uraian,
  //     });
  //   }, [kegiatanbyid]);

  //   const [deletes, setDelete] = useState({
  //     kode_bentuk_kegiatan: "",
  //   });

  useEffect(() => {
    dispatch(setGlobalTitle("Utilitas / Data SBM"));
    dispatch(fetchSatuan());
  }, [dispatch]);

  const column = [
    {
      title: () => {
        return (
          <Space direction="horizontal" align="start">
            <Tooltip title="Tambah Satuan">
              <Buttons
                //labelButton={"Tambah"}
                height={25}
                icon={<PlusOutlined />}
                onClick={() =>
                  dispatch(
                    setInputSatuan({
                      listsatuan1: listsatuan1,
                    })
                  )
                }
              />
            </Tooltip>
          </Space>
        );
      },
      dataIndex: "kode_satuan",
      key: "kode_satuan",
      width: 30,
      align: "center",
      render: (text, record, index) => {
        if (record.nama_satuan === null) {
          return <div></div>;
        }
        return <Space direction="horizontal"> {text} </Space>;
      },
    },
    {
      title: "Nama Satuan",
      dataIndex: "nama_satuan",
      key: "nama_satuan",
      width: 150,
      render: (text, record, index) => {
        if (record.nama_satuan === null) {
          return (
            <div>
              <TextInput
                placeholder={"Nama Satuan"}
                marginBottom={4}
                value={satuanInput.nama_satuan}
                onChange={(e) =>
                  setSatuanInput({
                    ...satuanInput,
                    nama_satuan: e.target.value,
                  })
                }
              />
            </div>
          );
        }
        return (
          <div>
            {/* {editkegiatan === record.kode_satuan ? (
              <TextInput
                //value={kegiatanUpdate.uraian}
                // onChange={(e) =>
                //   setKegiatanUpdate({
                //     ...kegiatanUpdate,
                //     uraian: e.target.value,
                //   })
                // }
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
                  <b> {record.nama_satuan} </b>
                </Space>
              </div> */}
            <Space direction="horizontal">
              <b> {record.nama_satuan} </b>
            </Space>
          </div>
        );
      },
    },
    {
      title: "Uraian",
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
              placeholder="Cari Satuan .."
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
        if (record.nama_satuan === null) {
          return (
            <div>
              <TextInput
                placeholder={"Uraian"}
                marginBottom={4}
                value={satuanInput.uraian}
                onChange={(e) =>
                  setSatuanInput({
                    ...satuanInput,
                    uraian: e.target.value,
                  })
                }
              />
            </div>
          );
        }
        return (
          // <div>
          //   {editkegiatan === record.kode_satuan ? (
          //     <TextInput
          //       //value={kegiatanUpdate.uraian}
          //       // onChange={(e) =>
          //       //   setKegiatanUpdate({
          //       //     ...kegiatanUpdate,
          //       //     uraian: e.target.value,
          //       //   })
          //       // }
          //     />
          //   ) : (
          //     <div
          //       style={{
          //         display: "flex",
          //         justifyContent: "flex-start",
          //         alignItems: "flex-end",
          //       }}
          //     >
          //       <Space direction="horizontal">
          //         <b> {record.uraian} </b>
          //       </Space>
          //     </div>
          <Space direction="horizontal">
            <b> {record.uraian} </b>
          </Space>
          //   )}
          // </div>
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
        if (record.nama_satuan === null) {
          return (
            <div style={{ display: "flex" }}>
              <Buttons
                labelButton={"Batal"}
                color={"#00BAEB"}
                backgroundColor={"white"}
                borderColor={"#00BAEB"}
                borderRadius={5}
                height={25}
                onClick={() => dispatch(clearInputSatuan(datalistsatuan))}
              />
              <Buttons
                labelButton={"Simpan"}
                backgroundColor={"#00BAEB"}
                height={25}
                marginLeft={3}
                borderRadius={5}
                onClick={() => {
                  dispatch(postSatuan(satuanInput));
                  console.log("posting data", satuanInput);
                  setInputSatuan({
                    ...satuanInput,
                    nama_satuan: "",
                    uraian: "",
                  });
                }}
              />
            </div>
          );
        }
        return (
          //   <div>
          //     {editkegiatan === record.kode_bentuk_kegiatan ? (
          //       <Space align="center">
          //         <Buttons
          //           labelButton={"Batal"}
          //           color={"#00BAEB"}
          //           backgroundColor={"white"}
          //           borderColor={"#00BAEB"}
          //           borderRadius={5}
          //           height={25}
          //           onClick={() => dispatch(clearEditKegiatan())}
          //         />
          //         <Buttons
          //           labelButton={"Simpan"}
          //           backgroundColor={"#00BAEB"}
          //           height={25}
          //           marginLeft={5}
          //           borderRadius={5}
          //           onClick={() =>
          //             dispatch(
          //               updateKegiatan({
          //                 kode_bentuk_kegiatan:
          //                   kegiatanUpdate.kode_bentuk_kegiatan,
          //                 data: {
          //                   kode_bentuk_kegiatan:
          //                     kegiatanUpdate.kode_bentuk_kegiatan,
          //                   uraian: kegiatanUpdate.uraian,
          //                   uch: user?.data.nama_pegawai,
          //                 },
          //               })
          //             )
          //           }
          //         />
          //       </Space>
          //     ) : (
          //       <Space align="center">
          //         <Tooltip title="Ubah Data">
          //         <Buttons
          //           icon={<EditOutlined />}
          //           borderRadius={20}
          //           marginRight={5}
          //           backgroundColor={"orange"}
          //           color={"black"}
          //           borderColor={"orange"}
          //           height={30}
          //           onClick={() =>
          //             dispatch(kegiatanByID(record.kode_bentuk_kegiatan))
          //           }
          //         />
          //         </Tooltip>
          //       </Space>
          //     )}
          //   </div>
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
                // onClick={() =>
                //   dispatch(kegiatanByID(record.kode_bentuk_kegiatan))
                // }
              />
            </Tooltip>
          </Space>
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
            }}
          >
            Data Satuan Kegiatan 
          </h5>
        </div>
      </div>
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
          dataSource={datalistsatuan}
          columns={column}
          rowKey={"kode_satuan"}
          pagination={{
            defaultPageSize: 25,
            showSizeChanger: true,
            pageSizeOptions: ["25", "50", "75"],
          }}
          
        />
      </div>

      <MessagePost
        visible={postsatuan.status !== null ? true : false}
        message={postsatuan.message}
        status={postsatuan.status}
      />
    </div>
  );
};

export default DataSatuan;
