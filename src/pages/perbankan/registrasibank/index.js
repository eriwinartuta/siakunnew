import React from "react";
import { setGlobalTitle } from "../../../store/global";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  Tabel,
  Buttons,
  TextInput,
  Modals,
  MessagePost
} from "../../../component";
import { Space, Tag, Radio } from "antd";
import {
  RefBankById,
  updateRefBank,
  clearUpdateBank,
} from "../../../store/registrasibank/action";
import { fetchAllBank } from "../../../store";
import "../../../assets/style/table.css";
import {
  PlusOutlined,
  EyeOutlined,
  EditOutlined,
} from "@ant-design/icons";
import { useEffect, useState } from "react";
import { FONTSTYLE } from "../../../component/font";

const RegistrasiBank = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { listbank, bankbyid, postregist } = useSelector(
    (state) => state.reducerRegistrasiBank
  );
  const {user} = useSelector((state) => state.reducerGlobal);
  const [modalUpdate, setModalUpdate] = useState();
  
  useEffect(() => {
    dispatch(setGlobalTitle("Perbankan / Registrasi Bank"));
    dispatch(fetchAllBank());
    // eslint-disable-next-line
  }, [dispatch]);

  useEffect(() => {
    if (postregist?.status !== null) {
      setTimeout(() => {
        dispatch(clearUpdateBank());
      }, 3000);
    }
    // eslint-disable-next-line
  }, [postregist?.status]);

  const [bankUpdate, setBankUpdate] = useState({
    kode_bank: "",
    nama_bank: "",
    nomor_rekening: "",
    alamat_bank: "",
    atas_nama_rekening: "",
    penanggung_jawab: "",
    kontak: "",
    keterangan: "",
    dokumen: "",
    status_rekening: "",
    kode_unit: "",
    uch: "Ridho",
  });

  useEffect(() => {
    setBankUpdate({
      ...bankUpdate,
      kode_bank: bankbyid?.kode_bank,
      nama_bank: bankbyid?.nama_bank,
      nomor_rekening: bankbyid?.nomor_rekening,
      alamat_bank: bankbyid?.alamat_bank,
      atas_nama_rekening: bankbyid?.atas_nama_rekening,
      penanggung_jawab: bankbyid?.penanggung_jawab,
      kontak: bankbyid?.kontak,
      keterangan: bankbyid?.keterangan,
      dokumen: bankbyid?.dokumen,
      status_rekening: bankbyid?.status_rekening,
      kode_unit: bankbyid?.kode_unit
    });
    // eslint-disable-next-line
  }, [bankbyid]);

  const updateStatRek = (val) => {
    setBankUpdate({
      ...bankUpdate,
      status_rekening: val.target.value
    });
    //setPilRek(val.target.value)
    // if (pilrek?.pilrek === "PUSAT") {
    //   setBankUpdate({
    //     ...bankUpdate,
    //     kode_unit: "-",
    //     status_rekening: "PUSAT"
    //   })
    // }
    // else {
    //   setBankUpdate({
    //     ...bankUpdate,
    //     status_rekening: "UNIT"
    //   })
    // }
    
  };

  const colombank = [
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
      title: "Kode - Nama Bank",
      dataIndex: "kode_bank",
      key: "kode_bank",
      render: (text, record, index) => {
        return (
          <p>
            {" "}
            {text} - {record.nama_bank}{" "}
          </p>
        );
      },
    },
    {
      title: "Nomor Rekening",
      dataIndex: "nomor_rekening",
      key: "nomor_rekening",
      render: (text, record, index) => {
        return  <p> {text} </p>
        ;
      },
    },
    {
      title: "Atas Nama Rekening",
      dataIndex: "atas_nama_rekening",
      key: "atas_nama_rekening",
      render: (text, record, index) => {
        return  <p> {text} </p>
        ;
      },
    },
    {
      title: "Jenis Rekening",
      dataIndex: "status_rekening",
      key: "status_rekening",
      align: "center",
      width: 100,
      render: (text, record, index) => {
        return <> {record.status_rekening === "PUSAT" ? <Tag style={{ fontSize: 14, fontFamily: FONTSTYLE.POPPINS}} color={"blue"}> {text} </Tag> : <Tag style={{ fontSize: 14, fontFamily: FONTSTYLE.POPPINS}} color={"orange"}> {"UNIT"} </Tag> } </>;
      },
    },
    // {
    //   title: "Alamat Bank",
    //   dataIndex: "alamat_bank",
    //   key: "alamat_bank",
    //   render: (text, record, index) => {
    //     return <p> {text} </p>;
    //   },
    // },
    {
      title: "Penanggung Jawab",
      dataIndex: "penanggung_jawab",
      key: "penanggung_jawab",
      render: (text, record, index) => {
        return <p> {text} </p>;
      },
    },
    // {
    //   title: "Keterangan",
    //   dataIndex: "keterangan",
    //   key: "keterangan",
    //   render: (text, record, index) => {
    //     return <p> {text} </p>;
    //   },
    // },
    // {
    //   title: "Kontak",
    //   dataIndex: "kontak",
    //   key: "kontak",
    //   render: (text, record, index) => {
    //     return <p> {text} </p>;
    //   },
    // },
    {
      title: "Aksi",
      dataIndex: "aksi",
      key: "aksi",
      align: "center",
      width: 200,
      render: (text, record, index) => {
        return (
          <div>
            <>
              <Space direction="horizontal" align="center">
                <Buttons
                  backgroundColor={"#017EFA"}
                  color={"white"}
                  labelButton={"Lihat Detail "}
                  icon={<EyeOutlined />}
                  borderColor={"#017EFA"}
                  onClick={(e) => {
                    navigate("detailbank/" + record.nomor_rekening);
                  }}
                />

                <Buttons
                  shape={"circle"}
                  icon={<EditOutlined />}
                  backgroundColor={"orange"}
                  color={"black"}
                  borderColor={"orange"}
                  onClick={() => {
                    setModalUpdate(!modalUpdate);
                    dispatch(RefBankById(record.nomor_rekening));
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
          fontFamily: FONTSTYLE.PUBLICSANS
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
            Daftar Rekening Bank
          </h5>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: 400,
            marginRight: 10,
            fontFamily: FONTSTYLE.PUBLICSANS
          }}
        >
          <TextInput width={250} borderRadius={5} placeholder={"Cari Data"} />

          <Buttons
            labelButton={"Tambah Bank"}
            marginLeft={10}
            icon={<PlusOutlined />}
            onClick={() => {
              navigate("tambahbank/");
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
          fontFamily: FONTSTYLE.POPPINS,
          zIndex: 0,
          overflowX: "auto",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          
        }}
      >
        <Tabel
          dataSource={listbank}
          columns={colombank}
          rowKey={"nomor_rekening"}
          pagination={{
            defaultPageSize: 25,
            showSizeChanger: true,
            pageSizeOptions: ["25", "50", "75"],
          }}
        />
      </div>
      <Modals
        visible={modalUpdate}
        title="Ubah Data Rekening Bank"
        iconTitle={<EditOutlined style={{ marginRight: 5 }} />}
        onCancel={() => {
          setModalUpdate(!modalUpdate);
        }}
        width={600}
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
              <label className="block text-gray-700 text-sm font-bold mb-2"> Jenis Rekening</label>
              <Radio.Group 
              value={bankUpdate.status_rekening}
              onChange={updateStatRek}
            >
             
              <Radio value={"PUSAT"}>
                <b> Rekening Pusat </b>
              </Radio>
              <Radio value={"UNIT"}>
                <b> Rekening Unit </b>
              </Radio>
            </Radio.Group>
            <label className="block text-gray-700 text-sm font-bold mb-2"> Unit Kerja </label>
              <TextInput
                disabled={true}
                value={bankUpdate.kode_unit}
                placeholder={"Masukkan Kode Unit"}
                onChange={(e) => {
                  setBankUpdate({
                    ...bankUpdate,
                    nama_bank: e.target.value,
                  });
                }}
              />

              <label className="block text-gray-700 text-sm font-bold mb-2"> Kode Bank - Nama Bank</label>
              <TextInput
                disabled={true}
                value={bankUpdate.kode_bank+" - "+bankUpdate.nama_bank}
                //placeholder={"Masukkan Kode Bank"}
                // onChange={(e) => {
                //   setBankUpdate({
                //     ...bankUpdate,
                //     kode_bank: e.target.value,
                
                //   });
                // }}
              />
              
              <label className="block text-gray-700 text-sm font-bold mb-2"> Atas Nama Rekening </label>
              <TextInput
                value={bankUpdate.atas_nama_rekening}
                placeholder={"Masukkan Atas Nama Rekening"}
                onChange={(e) => {
                  setBankUpdate({
                    ...bankUpdate,
                    atas_nama_rekening: e.target.value,
                  });
                }}
              />
              <label className="block text-gray-700 text-sm font-bold mb-2"> Alamat Bank </label>
              <TextInput
                value={bankUpdate.alamat_bank}
                placeholder={"Masukkan Alamat Bank"}
                onChange={(e) => {
                  setBankUpdate({
                    ...bankUpdate,
                    alamat_bank: e.target.value,
                  });
                }}
              />
              <label className="block text-gray-700 text-sm font-bold mb-2"> Penangung Jawab </label>
              <TextInput
                value={bankUpdate.penanggung_jawab}
                placeholder={"Masukkan Penanggung Jawab"}
                onChange={(e) => {
                  setBankUpdate({
                    ...bankUpdate,
                    penanggung_jawab: e.target.value,
                  });
                }}
              />
              <label className="block text-gray-700 text-sm font-bold mb-2"> Keterangan </label>
              <TextInput
                value={bankUpdate.keterangan}
                placeholder={"Masukkan Keterangan"}
                onChange={(e) => {
                  setBankUpdate({
                    ...bankUpdate,
                    keterangan: e.target.value,
                  });
                }}
              />
              <label className="block text-gray-700 text-sm font-bold mb-2"> Kontak </label>
              <TextInput
                value={bankUpdate.kontak}
                placeholder={"Masukkan kontak"}
                onChange={(e) => {
                  setBankUpdate({
                    ...bankUpdate,
                    kontak: e.target.value,
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
                  setBankUpdate({
                    ...bankUpdate,
                    kode_bank: "",
                    nama_bank: "",
                    nomor_rekening: "",
                    alamat_bank: "",
                    atas_nama_rekening: "",
                    penanggung_jawab: "",
                    kontak: "",
                    keterangan: "",
                    uch: "",
                  });
                }}
              />
              <Buttons
                onClick={() => {
                  dispatch(
                    updateRefBank({
                      data: {
                        kode_unit: bankUpdate.kode_unit,
                        status_rekening: bankUpdate.status_rekening,
                        kode_bank: bankUpdate.kode_bank,
                        nama_bank: bankUpdate.nama_bank,
                        atas_nama_rekening: bankUpdate.atas_nama_rekening,
                        nomor_rekening: bankUpdate.nomor_rekening,
                        alamat_bank: bankUpdate.alamat_bank,
                        penanggung_jawab: bankUpdate.penanggung_jawab,
                        keterangan: bankUpdate.keterangan,
                        kontak: bankUpdate.kontak,
                        uch: user?.data.nama_pegawai,
                      },
                    })
                  );
                  console.log("update data", bankUpdate);
                  setModalUpdate(!modalUpdate);
                  setBankUpdate({
                    ...bankUpdate,
                    kode_bank: "",
                    nama_bank: "",
                    nomor_rekening: "",
                    alamat_bank: "",
                    atas_nama_rekening: "",
                    penanggung_jawab: "",
                    kontak: "",
                    keterangan: "",
                    uch: "",
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
        visible={postregist.status !== null ? true : false}
        message={postregist.message}
        status={postregist.status}
      />
    </div>
  );
};

export default RegistrasiBank;
