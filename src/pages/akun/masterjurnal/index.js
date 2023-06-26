import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setGlobalTitle } from "../../../store/global";
import { Select, Space, Tag } from "antd";
import {
  Buttons,
  TextInput,
  Tabel,
  Modals,
  Selects,
  MessagePost,
} from "../../../component";
import {
  PlusOutlined,
  //EyeOutlined,
  EditOutlined,
  //DeleteOutlined,
} from "@ant-design/icons";
//import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { fetchMasterJurnalAll } from "../../../store";
import {
  clearPostMasterJurnal,
  fetchAllAplikasi,
  fetchAllModul,
  fetchMasterAkun6,
  MasterJurnalByKode,
  MasterJurnalUpdate,
  postDataMasterJurnal,
} from "../../../store/masterjurnal/action";
import { useState } from "react";
import { FONTSTYLE } from "../../../component/font";

const MasterJurnal = () => {
  const dispatch = useDispatch();
  //const navigate = useNavigate();
  const { Option } = Select;
  const {
    listmasterjurnal,
    postmasterjurnal,
    masterjurnalbyid,
    //editmasterjurnal,
    getaplikasi,
    getmodul,
    getallakun,
  } = useSelector((state) => state.reducerMasterJurnal);
  const { user } = useSelector((state) => state.reducerGlobal);

  const [visible, setVisible] = useState();
  const [modalUpdate, setModalUpdate] = useState();
  const [modbyapps, setModByApps] = useState();
  const [akunKredit, setAkunKredit] = useState();

  useEffect(() => {
    dispatch(fetchMasterJurnalAll());
    dispatch(fetchMasterAkun6());
    dispatch(fetchAllAplikasi());
    dispatch(fetchAllModul());
    dispatch(setGlobalTitle("Akun / Master Jurnal"));
  }, [dispatch]);

  const [inputMasterJurnal, setInoutMaster] = useState({
    //kode_penyeimbang: "",
    keterangan: "",
    kode_aplikasi: "",
    aplikasi: "",
    kode_modul: "",
    modul: "",
    Debit: "",
    Kredit: "",
    ucr: user?.data.nama_pegawai,
  });

  const [updateMasterJurnal, setUpdateMasterJurnal] = useState({
    kode_penyeimbang: "",
    keterangan: "",
    kode_aplikasi: "",
    aplikasi: "",
    kode_modul: "",
    modul: "",
    Debit: "",
    Kredit: "",
    uch: user?.data.nama_pegawai,
  });

  useEffect(() => {
    if (postmasterjurnal?.status !== null) {
      setTimeout(() => {
        dispatch(clearPostMasterJurnal());
      }, 2000);
    }
    // eslint-disable-next-line
  }, [postmasterjurnal.status]);

  useEffect(() => {
    setUpdateMasterJurnal({
      ...updateMasterJurnal,
      kode_penyeimbang: masterjurnalbyid.kode_penyeimbang,
      keterangan: masterjurnalbyid.keterangan,
      kode_aplikasi: masterjurnalbyid.kode_aplikasi,
      aplikasi: masterjurnalbyid.aplikasi,
      kode_modul: masterjurnalbyid.kode_modul,
      modul: masterjurnalbyid.modul,
      Debit: masterjurnalbyid.Debit,
      Kredit: masterjurnalbyid.Kredit,
    });
    // eslint-disable-next-line
  }, [masterjurnalbyid]);

  const getApps = (val) => {
    const pecah = val.split("_");
    console.log("value", pecah[1]);
    setInoutMaster({
      ...inputMasterJurnal,
      kode_aplikasi: pecah[0],
      aplikasi: pecah[1],
    });
    const pilapps = getmodul.filter(
      (aplikasi) => aplikasi.kode_aplikasi === pecah[0]
    );
    setModByApps(pilapps);
  };

  const getModl = (val) => {
    const pecah = val.split("-");
    setInoutMaster({
      ...inputMasterJurnal,
      kode_modul: pecah[0],
      modul: pecah[1],
    });
  };

  const getAkunDebit = (val) => {
    const pecah = val.split("-");
    setInoutMaster({
      ...inputMasterJurnal,
      Debit: pecah[0],
    });
    const pilapps = getallakun.filter(
      (aplikasi) => aplikasi.kode_akun_6 !== pecah[0]
    );
    setAkunKredit(pilapps);
  };

  const getAkunKredit = (val) => {
    const pecah = val.split("-");
    setInoutMaster({
      ...inputMasterJurnal,
      Kredit: pecah[0],
    });
  };

  const updateApps = (val) => {
    const pecah = val.split("_");
    console.log("value", pecah[1]);
    setUpdateMasterJurnal({
      ...updateMasterJurnal,
      kode_aplikasi: pecah[0],
      aplikasi: pecah[1],
    });
    const pilapps = getmodul.filter(
      (aplikasi) => aplikasi.kode_aplikasi === pecah[0]
    );
    setModByApps(pilapps);
  };

  const updateModl = (val) => {
    const pecah = val.split("-");
    setUpdateMasterJurnal({
      ...updateMasterJurnal,
      kode_modul: pecah[0],
      modul: pecah[1],
    });
  };

  const updateAkunDebit = (val) => {
    const pecah = val.split("-");
    setUpdateMasterJurnal({
      ...updateMasterJurnal,
      Debit: pecah[0],
    });
    const pilapps = getallakun.filter(
      (aplikasi) => aplikasi.kode_akun_6 !== pecah[0]
    );
    setAkunKredit(pilapps);
  };

  const updateAkunKredit = (val) => {
    const pecah = val.split("-");
    setUpdateMasterJurnal({
      ...updateMasterJurnal,
      Kredit: pecah[0],
    });
  };

  const colomMasterJurnal = [
    {
      title: "No",
      dataIndex: "no",
      key: "no",
      width: 30,
      align: "center",
      render: (text, record, index) => {
        return <p> {index + 1} </p>;
      },
    },
    {
      title: "Kode - Nama Aplikasi",
      dataIndex: "kode_aplikasi",
      key: "kode_aplikasi",
      width: 200,
      render: (text, record, index) => {
        return (
          <p>
            {" "}
            <Tag style={{ fontSize: 16, padding: 5 }} color="#108ee9">
              {" "}
              {text}{" "}
            </Tag>{" "}
            {record.aplikasi}{" "}
          </p>
        );
      },
    },
    {
      title: "Kode - Nama Modul",
      dataIndex: "kode_modul",
      key: "kode_modul",
      render: (text, record, index) => {
        return (
          <p>
            {" "}
            <Tag style={{ fontSize: 16, padding: 5 }} color="#87d068">
              {" "}
              {text}{" "}
            </Tag>{" "}
            {record.modul}{" "}
          </p>
        );
      },
    },
    {
      title: "Keterangan",
      dataIndex: "keterangan",
      key: "keterangan",
      render: (text, record, index) => {
        return <p> {text} </p>;
      },
    },
    {
      title: "Akun Debit",
      dataIndex: "Debit",
      key: "Debit",
      align: "center",
      render: (text, record, index) => {
        return (
          <p>
            {" "}
            <Tag style={{ fontSize: 16, padding: 5 }} color="#FF9800">
              {" "}
              {text}
            </Tag>{" "}
          </p>
        );
      },
    },
    {
      title: "Akun Kredit",
      dataIndex: "Kredit",
      key: "Kredit",
      align: "center",
      render: (text, record, index) => {
        return (
          <p>
            {" "}
            <Tag style={{ fontSize: 16, padding: 5 }} color="#6D2BA2">
              {" "}
              {text}{" "}
            </Tag>{" "}
          </p>
        );
      },
    },
    {
      title: "Aksi",
      dataIndex: "aksi",
      key: "aksi",
      align: "center",
      width: 50,
      render: (text, record, index) => {
        return (
          <div>
            <>
              <Space direction="horizontal" align="center">
                <Buttons
                  shape={"circle"}
                  icon={<EditOutlined />}
                  backgroundColor={"orange"}
                  color={"black"}
                  borderColor={"orange"}
                  onClick={() => {
                    setModalUpdate(!modalUpdate);
                    dispatch(MasterJurnalByKode(record.kode_penyeimbang));
                  }}
                />
                {/* <Buttons
                  shape={"circle"}
                  backgroundColor={"red"}
                  color={"white"}
                  borderColor={"red"}
                  icon={<DeleteOutlined />}
                /> */}
              </Space>
            </>
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
          fontFamily: FONTSTYLE.PUBLICSANS,
        }}
      >
        <div>
          <h5
            style={{
              marginBottom: 20,
              fontWeight: "700",
              fontSize: 24,
              fontFamily: FONTSTYLE.PUBLICSANS,
            }}
          >
            Master Jurnal
          </h5>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: 400,
            marginRight: 10,
            fontFamily: FONTSTYLE.PUBLICSANS,
          }}
        >
          <TextInput width={250} borderRadius={5} placeholder={"Cari Data"} />

          <Buttons
            labelButton={"Tambah Master"}
            marginLeft={10}
            icon={<PlusOutlined />}
            onClick={() => {
              setVisible(!visible);
            }}
            color={"white"}
            backgroundColor={"#017EFA"}
            borderColor={"#017EFA"}
          />
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
          fontFamily: FONTSTYLE.POPPINS,
        }}
      >
        <Tabel
          dataSource={listmasterjurnal}
          columns={colomMasterJurnal}
          rowKey={"kode_penyeimbang"}
        />
      </div>

      <Modals
        visible={visible}
        style={{ fontFamily: FONTSTYLE.POPPINS, fontWeight: 700 }}
        title="Tambah Master Jurnal"
        iconTitle={<PlusOutlined style={{ marginRight: 5 }} />}
        onCancel={() => {
          setVisible(!visible);
          setInoutMaster({
            ...inputMasterJurnal,
            kode_modul: "",
            kode_aplikasi: "",
            modul: "",
            aplikasi: "",
            keterangan: "",
            Debit: "",
            Kredit: "",
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
                fontFamily: FONTSTYLE.POPPINS,
              }}
            >
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Pilih Aplikasi :
              </label>
              <Selects
                //value={inputMasterJurnal.kode_aplikasi +"-"+ inputMasterJurnal.aplikasi}
                marginBottom={10}
                placeholder={"Pilih Aplikasi"}
                filterOption={(input, option) =>
                  option.value.toLowerCase().indexOf(input.toLowerCase()) >=
                    0 ||
                  option.value.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
                onChange={getApps}
                optionContent={getaplikasi?.map((res, index) => {
                  return (
                    <Option
                      key={index}
                      value={res.kode_aplikasi + "_" + res.nama_aplikasi}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <Tag color="#108ee9">{res.kode_aplikasi}</Tag>{" "}
                        {res.nama_aplikasi}
                      </div>
                    </Option>
                  );
                })}
              />
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Pilih Modul :
              </label>
              <Selects
                //value={inputMasterJurnal.kode_modul +"-"+ inputMasterJurnal.nama_menu1}
                marginBottom={10}
                filterOption={(input, option) =>
                  option.value.toLowerCase().indexOf(input.toLowerCase()) >=
                    0 ||
                  option.value.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
                onChange={getModl}
                placeholder={"Pilih Modul"}
                optionContent={modbyapps?.map((res, index) => {
                  return (
                    <Option
                      key={index}
                      value={res.kode_menu1 + "-" + res.nama_menu1}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <Tag color="#87d068">{res.kode_menu1}</Tag>{" "}
                        {res.nama_menu1}
                      </div>
                    </Option>
                  );
                })}
              />
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Keterangan
              </label>
              <TextInput
                value={inputMasterJurnal.keterangan}
                placeholder={"Masukkan Keterangan"}
                onChange={(e) => {
                  setInoutMaster({
                    ...inputMasterJurnal,
                    keterangan: e.target.value,
                  });
                }}
              />
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Pilih Akun Debit :
              </label>
              <Selects
                //value={inputMasterJurnal.kode_modul +"-"+ inputMasterJurnal.nama_menu1}
                marginBottom={10}
                filterOption={(input, option) =>
                  option.value.toLowerCase().indexOf(input.toLowerCase()) >=
                    0 ||
                  option.value.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
                onChange={getAkunDebit}
                placeholder={"Pilih Akun Debit"}
                optionContent={getallakun?.map((res, index) => {
                  return (
                    <Option
                      key={index}
                      value={res.kode_akun_6 + "-" + res.uraian_akun_6}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <Tag color="#FF9800">{res.kode_akun_6}</Tag>{" "}
                        {res.uraian_akun_6}
                      </div>
                    </Option>
                  );
                })}
              />
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Pilih Akun Kredit :
              </label>
              <Selects
                //value={inputMasterJurnal.kode_modul +"-"+ inputMasterJurnal.nama_menu1}
                marginBottom={10}
                filterOption={(input, option) =>
                  option.value.toLowerCase().indexOf(input.toLowerCase()) >=
                    0 ||
                  option.value.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
                onChange={getAkunKredit}
                placeholder={"Pilih Akun Kredit"}
                optionContent={akunKredit?.map((res, index) => {
                  return (
                    <Option
                      key={index}
                      value={res.kode_akun_6 + "-" + res.uraian_akun_6}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <Tag color="#6D2BA2">{res.kode_akun_6}</Tag>{" "}
                        {res.uraian_akun_6}
                      </div>
                    </Option>
                  );
                })}
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
                  setInoutMaster({
                    ...inputMasterJurnal,
                    kode_aplikasi: "",
                    aplikasi: "",
                    kode_modul: "",
                    modul: "",
                    keterangan: "",
                    Debit: "",
                    Kredit: "",
                  });
                  console.log("cancel", inputMasterJurnal);
                }}
              />
              <Buttons
                onClick={() => {
                  dispatch(postDataMasterJurnal(inputMasterJurnal));
                  console.log("posting data", inputMasterJurnal);
                  setVisible(!visible);
                  setInoutMaster({
                    ...inputMasterJurnal,
                    keterangan: "",
                    kode_aplikasi: "",
                    aplikasi: "",
                    kode_modul: "",
                    modul: "",
                    Debit: "",
                    Kredit: "",
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
        title="Edit Master Jurnal"
        iconTitle={<EditOutlined style={{ marginRight: 5 }} />}
        onCancel={() => {
          setModalUpdate(!modalUpdate);
          updateMasterJurnal({
            ...updateMasterJurnal,
            kode_modul: "",
            kode_aplikasi: "",
            modul: "",
            aplikasi: "",
            keterangan: "",
            Debit: "",
            Kredit: "",
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
                fontFamily: FONTSTYLE.POPPINS,
              }}
            >
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Pilih Aplikasi :
              </label>
              <Selects
                value={
                  updateMasterJurnal.kode_aplikasi +
                  "-" +
                  updateMasterJurnal.aplikasi
                }
                marginBottom={10}
                placeholder={"Pilih Aplikasi"}
                filterOption={(input, option) =>
                  option.value.toLowerCase().indexOf(input.toLowerCase()) >=
                    0 ||
                  option.value.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
                onChange={updateApps}
                optionContent={getaplikasi?.map((res, index) => {
                  return (
                    <Option
                      key={index}
                      value={res.kode_aplikasi + "_" + res.nama_aplikasi}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <Tag color="#108ee9">{res.kode_aplikasi}</Tag>{" "}
                        {res.nama_aplikasi}
                      </div>
                    </Option>
                  );
                })}
              />
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Pilih Modul :
              </label>
              <Selects
                value={
                  updateMasterJurnal.kode_modul + "-" + updateMasterJurnal.modul
                }
                marginBottom={10}
                filterOption={(input, option) =>
                  option.value.toLowerCase().indexOf(input.toLowerCase()) >=
                    0 ||
                  option.value.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
                onChange={updateModl}
                placeholder={"Pilih Modul"}
                optionContent={modbyapps?.map((res, index) => {
                  return (
                    <Option
                      key={index}
                      value={res.kode_menu1 + "-" + res.nama_menu1}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <Tag color="#87d068">{res.kode_menu1}</Tag>{" "}
                        {res.nama_menu1}
                      </div>
                    </Option>
                  );
                })}
              />
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Keterangan
              </label>
              <TextInput
                value={updateMasterJurnal.keterangan}
                placeholder={"Masukkan Keterangan"}
                onChange={(e) => {
                  setUpdateMasterJurnal({
                    ...updateMasterJurnal,
                    keterangan: e.target.value,
                  });
                }}
              />
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Pilih Akun Debit :
              </label>
              <Selects
                value={updateMasterJurnal.Debit}
                marginBottom={10}
                filterOption={(input, option) =>
                  option.value.toLowerCase().indexOf(input.toLowerCase()) >=
                    0 ||
                  option.value.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
                onChange={updateAkunDebit}
                placeholder={"Pilih Akun Debit"}
                optionContent={getallakun?.map((res, index) => {
                  return (
                    <Option
                      key={index}
                      value={res.kode_akun_6 + "-" + res.uraian_akun_6}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <Tag color="#FF9800">{res.kode_akun_6}</Tag>{" "}
                        {res.uraian_akun_6}
                      </div>
                    </Option>
                  );
                })}
              />
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Pilih Akun Kredit :
              </label>
              <Selects
                value={updateMasterJurnal.Kredit}
                marginBottom={10}
                filterOption={(input, option) =>
                  option.value.toLowerCase().indexOf(input.toLowerCase()) >=
                    0 ||
                  option.value.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
                onChange={updateAkunKredit}
                placeholder={"Pilih Akun Kredit"}
                optionContent={akunKredit?.map((res, index) => {
                  return (
                    <Option
                      key={index}
                      value={res.kode_akun_6 + "-" + res.uraian_akun_6}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <Tag color="#6D2BA2">{res.kode_akun_6}</Tag>{" "}
                        {res.uraian_akun_6}
                      </div>
                    </Option>
                  );
                })}
              />
            </Space>
            <div
              style={{
                fontFamily: FONTSTYLE.POPPINS,
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Buttons
                labelButton={"Batal"}
                backgroundColor={"white"}
                borderColor={"#229CE1"}
                color={"#229CE1"}
                marginRight={10}
                onClick={() => {
                  setModalUpdate(!modalUpdate);
                  setUpdateMasterJurnal({
                    ...updateMasterJurnal,
                    kode_penyeimbang: "",
                    kode_aplikasi: "",
                    aplikasi: "",
                    kode_modul: "",
                    modul: "",
                    keterangan: "",
                    Debit: "",
                    Kredit: "",
                  });
                }}
              />
              <Buttons
                onClick={() => {
                  dispatch(
                    MasterJurnalUpdate({
                      data: {
                        kode_penyeimbang: updateMasterJurnal.kode_penyeimbang,
                        kode_aplikasi: updateMasterJurnal.kode_aplikasi,
                        aplikasi: updateMasterJurnal.aplikasi,
                        kode_modul: updateMasterJurnal.kode_modul,
                        modul: updateMasterJurnal.modul,
                        Debit: updateMasterJurnal.Debit,
                        Kredit: updateMasterJurnal.Kredit,
                        uch: user?.data.nama_pegawai,
                      },
                    })
                  );
                  console.log("update data", updateMasterJurnal);
                  setModalUpdate(!modalUpdate);
                  setUpdateMasterJurnal({
                    ...updateMasterJurnal,
                    kode_penyeimbang: "",
                    keterangan: "",
                    kode_aplikasi: "",
                    aplikasi: "",
                    kode_modul: "",
                    modul: "",
                    Debit: "",
                    Kredit: "",
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
        visible={postmasterjurnal.status !== null ? true : false}
        message={postmasterjurnal.message}
        status={postmasterjurnal.status}
      />
    </div>
  );
};

export default MasterJurnal;
