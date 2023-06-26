import React, { useEffect, useState } from "react";
import { Tag, Space, Select, Popconfirm, Tooltip } from "antd";
import {
  postDataSBM,
  DataSBMupdate,
  SBMByid,
  clearPostSBM,
  deleteKomponen,
} from "../../../store/sbm/action";
import {
  fetchAllSatuan,
  fetchSelAkun6,
} from "../../../store";
import { setGlobalTitle } from "../../../store/global";
import { formatRupiah } from "../../../utils/formatRP";
import {
  Tabel,
  Buttons,
  Modals,
  TextInput,
  Selects,
  MessagePost,
  TextAreaInput,
  NumberInput
} from "../../../component";
import {
  EditOutlined,
  DeleteOutlined,
  PlusOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { FONTSTYLE } from "../../../component/font";

const DataKomponen = ({ record, dispatch, useSelector }) => {
  const { Option } = Select;
  const [visible, setVisible] = useState();
  const [modalUpdate, setModalUpdate] = useState();
  const {
    listsbmbykegiatan,
    listsatuan,
    postsbm,
    sbmbyid,
    get_akun6,
  } = useSelector((state) => state.reducerDataSBM);
  const { user } = useSelector((state) => state.reducerGlobal);

  const [inputDataSBM, setInputDataSBM] = useState({
    kode_bentuk_kegiatan: "",
    uraian: "",
    komponen: "",
    kode_satuan: "",
    nama_satuan: "",
    uraian_satuan: "",
    kode_akun_6: "",
    uraian_akun6: "",
    satuan_biaya: "",
    keterangan: "",
    ucr: user?.data.nama_pegawai,
  });

  const [deletes, setDelete] = useState({
    kode_bentuk_kegiatan: "",
    kode_sbm: "",
  });

  const [updateDataSBM, setUpdateDataSBM] = useState({
    kode_sbm: "",
    uraian: "",
    bentuk_kegiatan: "",
    komponen: "",
    kode_satuan: "",
    nama_satuan: "",
    uraian_satuan: "",
    kode_akun_6: "",
    uraian_akun6: "",
    satuan_biaya: "",
    keterangan: "",
    uch: user?.data.nama_pegawai,
  });

  useEffect(() => {
    if (postsbm?.status !== null) {
      setTimeout(() => {
        dispatch(clearPostSBM());
      }, 2000);
    }
    // eslint-disable-next-line
  }, [postsbm.status]);

  useEffect(() => {
    setUpdateDataSBM({
      ...updateDataSBM,
      kode_sbm: sbmbyid.kode_sbm,
      kode_bentuk_kegiatan: sbmbyid.kode_bentuk_kegiatan,
      komponen: sbmbyid.komponen,
      kode_satuan: sbmbyid.kode_satuan,
      kode_akun_6: sbmbyid.kode_akun_6,
      satuan_biaya: sbmbyid.satuan_biaya,
      keterangan: sbmbyid.keterangan,
    });
    // eslint-disable-next-line
  }, [sbmbyid]);

  const getKodeSatuan = (val) => {
    const pecah = val.split("-");
    setInputDataSBM({
      ...inputDataSBM,
      kode_satuan: pecah[0],
      nama_satuan: pecah[1],
      uraian_satuan: pecah[2]
    });
  };

  const onChange1 = (value) => {
    setInputDataSBM({
      ...inputDataSBM,
      satuan_biaya: value,
    });
  };

  const onUpdateBiaya = (value) => {
    setUpdateDataSBM({
      ...updateDataSBM,
      satuan_biaya: value,
    });
  };

  const getakun6 = (val) => {
    const pecah = val.split("-");
    setInputDataSBM({
      ...inputDataSBM,
      kode_akun_6: pecah[0],
      uraian_akun6: pecah[1]
    });
  };

  // const upkodekegiatan = (val) => {
  //   const pecah = val.split("-");
  //   setUpdateDataSBM({
  //     ...updateDataSBM,
  //     kode_bentuk_kegiatan: pecah[0],
  //   });
  // };
  
  const upKodeSatuan = (val) => {
    const pecah = val.split("-");
    setUpdateDataSBM({
      ...updateDataSBM,
      kode_satuan: pecah[0],
      nama_satuan: pecah[1],
      uraian_satuan: pecah[2]
    });
  };

  const upakun6 = (val) => {
    const pecah = val.split("-");
    setUpdateDataSBM({
      ...updateDataSBM,
      kode_akun_6: pecah[0],
      uraian_akun6: pecah[1]
    });
  };

  function NewlineText(props) {
    const text = props.text;
    return text.split('\n').map(str => <div>{str}</div>);
  }

  useEffect(() => {
    dispatch(setGlobalTitle("Utilitas / Data SBM"));
    dispatch(fetchAllSatuan());
    dispatch(fetchSelAkun6());
  }, [dispatch]);

  const column = [
    {
      title: () => {
        return (
          <Space direction="horizontal" align="start">
            <Tooltip title="Tambah Komponen">
              <Buttons
                //labelButton={"Tambah"}
                height={25}
                icon={<PlusOutlined />}
                onClick={() => {
                  setVisible(!visible);
                  setInputDataSBM({
                    ...inputDataSBM,
                    kode_bentuk_kegiatan: record.kode_bentuk_kegiatan,
                    uraian: record.uraian,
                  });
                  //console.log("klik", record.kode_bentuk_kegiatan)
                }}
              />
            </Tooltip>
          </Space>
        );
      },
      dataIndex: "kode_sbm",
      key: "kode_sbm",
      width: 75,
      align: "center",
      render: (text, record, index) => {
        return <Space direction="horizontal"> {index + 1} </Space>;
      },
    },
    {
      title: "Komponen",
      dataIndex: "komponen",
      key: "komponen",
      width: 300,
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
              placeholder="Cari Komponen .."
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
        return record.komponen.toLowerCase().includes(value.toLowerCase());
      },
      render: (text, record, index) => {
        return (
          <Space direction="horizontal">
            {" "}
            <b> {text} </b>
          </Space>
        );
      },
    },
    {
      title: "Satuan",
      dataIndex: "kode_satuan",
      key: "kode_satuan",
      width: 75,
      align: "center",
      render: (text, record, index) => {
        return (
          <Space direction="horizontal">
            {" "}
            {record.satuanKegiatan?.nama_satuan}{" "}
          </Space>
        );
      },
    },
    {
      title: "Akun",
      dataIndex: "kode_akun_6",
      key: "kode_akun_6",
      width: 100,
      align: "center",
      render: (text, record, index) => {
        return <Space direction="horizontal"> <Tag style={{fontSize: 16, padding: 5}} color="#6D2BA2">  {text} </Tag> </Space>;
      },
    },
    {
      title: "Satuan Biaya",
      dataIndex: "satuan_biaya",
      key: "satuan_biaya",
      align: "right",
      width: 120,
      render: (text, record, index) => {
        return <Space direction="horizontal"> <b>  {formatRupiah(text)}  </b> </Space>;
      },
    },
    {
      title: "Keterangan",
      dataIndex: "keterangan",
      key: "keterangan",
      render: (text, record, index) => {
        return <Space direction="horizontal"> <NewlineText text={text} /> </Space>;
      },
    },
    {
      title: "Aksi",
      dataIndex: "aksi",
      key: "aksi",
      align: "center",
      width: 80,
      render: (text, record, index) => {
        return (
          <div>
            <Space align="center">
              <Tooltip title="Ubah Data">
                <Buttons
                  icon={<EditOutlined />}
                  borderRadius={20}
                  backgroundColor={"orange"}
                  color={"black"}
                  borderColor={"orange"}
                  height={30}
                  onClick={() => {
                    setModalUpdate(!modalUpdate);
                    setUpdateDataSBM({
                      ...updateDataSBM,
                      uraian: record.bentukegiatan.uraian,
                      uraian_akun6: record.akunMak.uraian_akun_6,
                      nama_satuan: record.satuanKegiatan.nama_satuan,
                      uraian_satuan: record.satuanKegiatan.uraian
                    });
                    dispatch(SBMByid(record.kode_sbm));
                  }}
                />
              </Tooltip>
              <Tooltip title="Hapus Data">
                <Popconfirm
                  title="Apakah yakin akan menghapus Data ini?"
                  //visible={focusDelete === record.kode_sbm ? true : false}
                  onConfirm={() => dispatch(deleteKomponen(deletes))}
                  onCancel={null}
                  okText="Ya"
                  cancelText="Batal"
                >
                  <Buttons
                    icon={<DeleteOutlined />}
                    borderRadius={20}
                    backgroundColor={"red"}
                    borderColor={"red"}
                    height={30}
                    onClick={() => {
                      setDelete({
                        ...deletes,
                        kode_sbm: record.kode_sbm,
                        kode_bentuk_kegiatan: record.kode_bentuk_kegiatan
                      });
                    }}
                    //onClick={() => setFocusDelete(record.kode_sbm)}
                  />
                </Popconfirm>
              </Tooltip>
            </Space>
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
          dataSource={listsbmbykegiatan}
          columns={column}
          rowKey={"kode_sbm"}
          pagination={false}
        />
      </div>
      <Modals
        visible={visible}
        style={{fontFamily: FONTSTYLE.POPPINS}}
        title="Tambah Data SBM"
        iconTitle={<PlusOutlined style={{ marginRight: 5, padding: 5}} />}
        onCancel={() => {
          setVisible(!visible);
          setInputDataSBM({
            ...inputDataSBM,
            kode_bentuk_kegiatan: "",
            komponen: "",
            kode_satuan: "",
            kode_akun_6: "",
            satuan_biaya: "",
            keterangan: "",
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
                <p> Bentuk Kegiatan : </p>
                <p> {inputDataSBM.uraian} </p>
              </label>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Pilih Akun :
              </label>
              <Selects
                value={inputDataSBM.kode_akun_6 +"-"+ inputDataSBM.uraian_akun6}
                marginBottom={10}
                placeholder={"Pilih Akun"}
                filterOption={(input, option) =>
                  option.value.toLowerCase().indexOf(input.toLowerCase()) >=
                    0 ||
                  option.value.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
                onChange={getakun6}
                optionContent={get_akun6?.map((res, index) => {
                  return (
                    <Option
                      key={index}
                      value={res.kode_akun_6 + "-" + res.uraian_akun_6}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center", 
                          fontFamily: FONTSTYLE.POPPINS
                        }}
                      >
                        <Tag color="#108ee9">{res.kode_akun_6}</Tag> {res.uraian_akun_6} 
                      </div>
                    </Option>
                  );
                })}
              />
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Pilih Satuan :
              </label>
              <Selects
              value={inputDataSBM.nama_satuan +"-"+ inputDataSBM.uraian_satuan}
                marginBottom={10}
                filterOption={(input, option) =>
                  option.value.toLowerCase().indexOf(input.toLowerCase()) >=
                    0 ||
                  option.value.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
                onChange={getKodeSatuan}
                placeholder={"Pilih Satuan"}
                optionContent={listsatuan?.map((res, index) => {
                  return (
                    <Option
                      key={index}
                      value={res.kode_satuan + "-" + res.nama_satuan + "-" + res.uraian}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          fontFamily: FONTSTYLE.POPPINS
                        }}
                      >
                      <Tag color="#87d068">{res.nama_satuan}</Tag> {res.uraian} 
                      </div>
                    </Option>
                  );
                })}
              />
              <label className="block text-gray-700 text-sm font-bold mb-2">
                {" "}
                Nama Komponen{" "}
              </label>
              <TextInput
                value={inputDataSBM.komponen}
                placeholder={"Masukkan Nama Komponen"}
                onChange={(e) => {
                  setInputDataSBM({
                    ...inputDataSBM,
                    komponen: e.target.value,
                  });
                }}
              />
              <label className="block text-gray-700 text-sm font-bold mb-2">
                {" "}
                Satuan Biaya{" "}
              </label>
              <NumberInput
                value={inputDataSBM.satuan_biaya}
                formatter={(value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
                placeholder={"Masukkan Satuan Biaya"}
                onChange={onChange1}
              />
              <label className="block text-gray-700 text-sm font-bold mb-2">
                {" "}
                Keterangan{" "}
              </label>
              <TextAreaInput
                rows={4}
                value={inputDataSBM.keterangan}
                placeholder={"Masukkan Keterangan"}
                onChange={(e) => {
                  setInputDataSBM({
                    ...inputDataSBM,
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
                  setInputDataSBM({
                    ...inputDataSBM,
                    kode_bentuk_kegiatan: "",
                    komponen: "",
                    kode_satuan: "",
                    kode_akun_6: "",
                    uraian_akun6: "",
                    satuan_biaya: "",
                    keterangan: "",
                    uraian: ""
                  });
                }}
              />
              <Buttons
                onClick={() => {
                  dispatch(postDataSBM(inputDataSBM));
                  console.log("posting data", inputDataSBM);
                  setVisible(!visible);
                  setInputDataSBM({
                    ...inputDataSBM,
                    kode_bentuk_kegiatan: "",
                    komponen: "",
                    kode_satuan: "",
                    nama_satuan:"",
                    uraian_satuan:"",
                    kode_akun_6: "",
                    uraian_akun6: "",
                    satuan_biaya: "",
                    keterangan: "",
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

      <Modals
        visible={modalUpdate}
        style={{fontFamily: FONTSTYLE.POPPINS}}
        title="Update Data SBM"
        iconTitle={<EditOutlined style={{ marginRight: 5, padding: 5 }} />}
        onCancel={() => {
          setModalUpdate(!modalUpdate);
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
              {/* <label className="block text-gray-700 text-sm font-bold mb-2">
                {" "}
                Pilih Kegiatan :{" "}
              </label>
              <Selects
                disabled={true}
                marginBottom={10}
                //onSearch={onSearch}
                filterOption={(input, option) =>
                  option.value.toLowerCase().indexOf(input.toLowerCase()) >=
                    0 ||
                  option.value.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
                onChange={upkodekegiatan}
                value={updateDataSBM.kode_bentuk_kegiatan}
                placeholder={"Pilih Kegiatan"}
                optionContent={listkegiatan?.map((res, index) => {
                  return (
                    <Option key={index} value={res.kode_bentuk_kegiatan}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        {res.uraian}
                      </div>
                    </Option>
                  );
                })}
              /> */}
              <label className="block text-gray-700 text-sm font-bold mb-2">
                <p> Bentuk Kegiatan : </p>
                <p> {updateDataSBM.uraian} </p>
              </label>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                {" "}
                Pilih Akun :{" "}
              </label>
              <Selects
                marginBottom={10}
                filterOption={(input, option) =>
                  option.value.toLowerCase().indexOf(input.toLowerCase()) >=
                    0 ||
                  option.value.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
                onChange={upakun6}
                value={updateDataSBM.kode_akun_6+" - " +updateDataSBM.uraian_akun6}
                placeholder={"Pilih Akun"}
                optionContent={get_akun6?.map((res, index) => {
                  return (
                    <Option
                      key={index}
                      value={res.kode_akun_6 + "-" + res.uraian_akun_6}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          fontFamily: FONTSTYLE.POPPINS
                        }}
                      >
                        <Tag color="#108ee9">{res.kode_akun_6}</Tag>  {res.uraian_akun_6}
                      </div>
                    </Option>
                  );
                })}
              />
              <label className="block text-gray-700 text-sm font-bold mb-2">
                {" "}
                Pilih Satuan{" "}
              </label>
              <Selects
                marginBottom={10}
                filterOption={(input, option) =>
                  option.value.toLowerCase().indexOf(input.toLowerCase()) >=
                    0 ||
                  option.value.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
                onChange={upKodeSatuan}
                value={updateDataSBM.nama_satuan + " - " + updateDataSBM.uraian_satuan}
                placeholder={"Pilih Satuan"}
                optionContent={listsatuan?.map((res, index) => {
                  return (
                    <Option key={index} value={res.kode_satuan+"-"+res.nama_satuan+"-"+res.uraian}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          fontFamily: FONTSTYLE.POPPINS
                        }}
                      >
                       <Tag color="#87d068">{res.nama_satuan}</Tag> {res.uraian}
                      </div>
                    </Option>
                  );
                })}
              />
              <label className="block text-gray-700 text-sm font-bold mb-2">
                {" "}
                Nama Komponen{" "}
              </label>
              <TextInput
                value={updateDataSBM.komponen}
                placeholder={"Masukkan Nama Komponen"}
                onChange={(e) => {
                  setUpdateDataSBM({
                    ...updateDataSBM,
                    komponen: e.target.value,
                  });
                }}
              />
              <label className="block text-gray-700 text-sm font-bold mb-2">
                {" "}
                Satuan Biaya{" "}
              </label>
              <NumberInput
                value={updateDataSBM.satuan_biaya}
                formatter={(value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
                placeholder={"Masukkan Satuan Biaya"}
                onChange={onUpdateBiaya}
              />
              <label className="block text-gray-700 text-sm font-bold mb-2">
                {" "}
                Keterangan{" "}
              </label>
              <TextAreaInput
                rows={4}
                value={updateDataSBM.keterangan}
                placeholder={"Masukkan Keterangan"}
                onChange={(e) => {
                  setUpdateDataSBM({
                    ...updateDataSBM,
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
                  setUpdateDataSBM({
                    ...updateDataSBM,
                    kode_bentuk_kegiatan: "",
                    komponen: "",
                    kode_satuan: "",
                    kode_akun_6: "",
                    satuan_biaya: "",
                    keterangan: "",
                  });
                }}
              />
              <Buttons
                onClick={() => {
                  dispatch(
                    DataSBMupdate({
                      data: {
                        kode_sbm: updateDataSBM.kode_sbm,
                        kode_bentuk_kegiatan:
                          updateDataSBM.kode_bentuk_kegiatan,
                        kode_akun_6: updateDataSBM.kode_akun_6,
                        kode_satuan: updateDataSBM.kode_satuan,
                        komponen: updateDataSBM.komponen,
                        satuan_biaya: updateDataSBM.satuan_biaya,
                        keterangan: updateDataSBM.keterangan,
                        uch: user?.data.nama_pegawai,
                      },
                    })
                  );
                  console.log("update data", updateDataSBM);
                  setModalUpdate(!modalUpdate);
                  setUpdateDataSBM({
                    ...updateDataSBM,
                    kode_bentuk_kegiatan: "",
                    komponen: "",
                    kode_satuan: "",
                    kode_akun_6: "",
                    satuan_biaya: "",
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
        visible={postsbm.status !== null ? true : false}
        message={postsbm.message}
        status={postsbm.status}
      />
    </div>
  );
};

export default DataKomponen;
