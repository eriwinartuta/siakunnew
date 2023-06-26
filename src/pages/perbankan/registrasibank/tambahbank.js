import React, { useState, useEffect } from "react";
import {
  Buttons,
  TextInput,
  Uploads,
  MessagePost,
  Selects,
} from "../../../component";
import { FileOutlined } from "@ant-design/icons";
import LoadingView from "../../../component/loading";
import ErrorView from "../../../component/errorView";
import {
  postRegistrasiBank,
  clearPost,
  fetchAllUnit,
} from "../../../store/registrasibank/action";
import { fetchRefBank } from "../../../store";
import { setGlobalTitle } from "../../../store/global";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Divider, Select, Space, Radio } from "antd";
import { FONTSTYLE } from "../../../component/font";

const TambahBank = () => {
  const { Option } = Select;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [pilrek, setPilRek] = useState(0);
  const { postregist, bank, allunit } = useSelector(
    (state) => state.reducerRegistrasiBank
  );
  const { error, loading, user } = useSelector((state) => state.reducerGlobal);
  const [uploadListPosts, setUploadListPost] = useState(false);
  const [previewUpload, setPreviewUpload] = useState(null);

  const [posts, setPost] = useState({
    kode_bank: "",
    kode_unit: "",
    nama_bank: "",
    nomor_rekening: "",
    alamat_bank: "",
    atas_nama_rekening: "",
    penanggung_jawab: "",
    kontak: "",
    keterangan: "",
    status_rekening: "",
    ucr: user?.data.nama_pegawai,
    dokumen: "",
  });

  useEffect(() => {
    dispatch(fetchRefBank());
    dispatch(fetchAllUnit());
    dispatch(setGlobalTitle("Perbankan / Registrasi Bank"));
  }, [dispatch]);

  const getbank = (val) => {
    const pecah = val.split("-");
    setPost({
      ...posts,
      kode_bank: pecah[0],
      nama_bank: pecah[1],
    });
  };

  const getkodeunit = (val) => {
    const pecah = val.split("-");
    setPost({
      ...posts,
      kode_unit: pecah[0],
    });
  };

  const getjenis = (val) => {
    setPilRek({
      pilrek: val.target.value,
    });
    if (pilrek?.pilrek === 0) {
      setPost({
        ...posts,
        kode_unit: "-",
        status_rekening: "PUSAT",
      });
    } else {
      setPost({
        ...posts,
        status_rekening: "UNIT",
      });
    }
  };

  const handleRegisBank = (e) => {
    e.preventDefault();
    const fd = new FormData();
    fd.append("kode_bank", posts.kode_bank);
    fd.append("kode_unit", posts.kode_unit);
    fd.append("nama_bank", posts.nama_bank);
    fd.append("nomor_rekening", posts.nomor_rekening);
    fd.append("alamat_bank", posts.alamat_bank);
    fd.append("atas_nama_rekening", posts.atas_nama_rekening);
    fd.append("penanggung_jawab", posts.penanggung_jawab);
    fd.append("status_rekening", posts.status_rekening);
    fd.append("kontak", posts.kontak);
    fd.append("keterangan", posts.keterangan);
    fd.append("dokumen", posts.dokumen);
    fd.append("ucr", "Ridho");
    dispatch(postRegistrasiBank(fd));
    setPost({
      kode_bank: "",
      kode_unit: "-",
      nama_bank: "",
      nomor_rekening: "",
      alamat_bank: "",
      atas_nama_rekening: "",
      penanggung_jawab: "",
      keterangan: "",
      kontak: "",
      ucr: "",
      dokumen: "",
    });
    console.log("posting data", posts);
  };

  useEffect(() => {
    if (postregist.status !== null) {
      setTimeout(() => {
        dispatch(clearPost());
      }, 3000);
    }
    //eslint-disable-next-line
  }, [postregist?.status]);

  if (loading) {
    return <LoadingView />;
  }

  if (error !== null) {
    return <ErrorView onClick={() => dispatch(fetchRefBank())} />;
  }

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
            Registrasi Bank
          </h5>
        </div>
      </div>

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
              fontWeight: "700",
              fontSize: 16,
              fontFamily: FONTSTYLE.PUBLICSANS,
            }}
          >
            Formulir Registrasi Bank
          </h5>
        </div>
      </div>
      <Divider />
      <div
        style={{
          padding: 0,
          zIndex: 0,
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          fontFamily: FONTSTYLE.POPPINS,
        }}
      >
        <div className="flex flex-wrap -mx-2 space-y-6 md:space-y-0">
          <div className="w-full px-2 md:w-1/6 mb-5">
            <label className="block font-bold md:text-left mb-1 md:mb-0 pr-4">
              Pilih Rekening
            </label>
          </div>
          <div className="w-full px-2 md:w-5/6 mb-5">
            <Radio.Group onChange={getjenis}>
              <Radio value={0}>
                <b> Rekening Pusat </b>
              </Radio>
              <Radio value={1}>
                <b> Rekening Unit </b>
              </Radio>
            </Radio.Group>
          </div>
        </div>
        {pilrek.pilrek === 1 ? (
          <div className="flex flex-wrap -mx-2 space-y-6 md:space-y-0">
            <div className="w-full px-2 md:w-1/6 mb-5">
              <label className="block fon t-bold md:text-left mb-1 md:mb-0 pr-4">
                Pilih Unit
              </label>
            </div>
            <div className="w-full px-2 md:w-5/6 mb-5">
              <Selects
                //value={inputDataSBM.kode_akun_6 +"-"+ inputDataSBM.uraian_akun6}
                marginBottom={10}
                placeholder={"Pilih Unit"}
                filterOption={(input, option) =>
                  option.value.toLowerCase().indexOf(input.toLowerCase()) >=
                    0 ||
                  option.value.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
                onChange={getkodeunit}
                optionContent={allunit?.map((res, index) => {
                  return (
                    <Option key={index} value={res.kode_unit}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          fontFamily: FONTSTYLE.POPPINS,
                        }}
                      >
                        <b> {res.kode_unit} </b> - {res.nama_unit}
                      </div>
                    </Option>
                  );
                })}
              />
            </div>
          </div>
        ) : (
          <div> </div>
        )}

        <div className="flex flex-wrap -mx-2 space-y-6 md:space-y-0 mb-5">
          <div class="w-full px-2 md:w-1/6">
            <label className="block font-bold md:text-left mb-1 md:mb-0 pr-4">
              Kode Bank
            </label>
          </div>
          <div className="w-full px-2 md:w-2/6">
            <Selects
              //value={inputDataSBM.kode_akun_6 +"-"+ inputDataSBM.uraian_akun6}
              marginBottom={10}
              placeholder={"Pilih Kode Bank"}
              filterOption={(input, option) =>
                option.value.toLowerCase().indexOf(input.toLowerCase()) >= 0 ||
                option.value.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
              onChange={getbank}
              optionContent={bank?.map((res, index) => {
                return (
                  <Option
                    key={index}
                    value={res.kode_bank + "-" + res.nama_bank}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        fontFamily: FONTSTYLE.POPPINS,
                      }}
                    >
                      <b> {res.kode_bank} </b> - {res.nama_bank}
                    </div>
                  </Option>
                );
              })}
            />
          </div>
          <div class="w-full md:w-1/6">
            <label className="block font-bold md:text-center mb-1 md:mb-0 pr-4">
              Nama Bank
            </label>
          </div>
          <div className="w-full px-2 md:w-2/6">
            <TextInput disabled={true} value={posts.nama_bank} />
          </div>
        </div>
      </div>

      <div
        style={{
          fontFamily: FONTSTYLE.POPPINS,
        }}
        className="flex flex-wrap -mx-2 space-y-6 md:space-y-0"
      >
        <div className="w-full px-2 md:w-1/6 mb-5">
          <label className="block font-bold md:text-left mb-1 md:mb-0 pr-4">
            Nomor Rekening
          </label>
        </div>
        <div className="w-full px-2 md:w-5/6 mb-5">
          <TextInput
            value={posts.nomor_rekening}
            onChange={(e) =>
              setPost({
                ...posts,
                nomor_rekening: e.target.value,
              })
            }
          />
        </div>
      </div>
      <div
        style={{
          fontFamily: FONTSTYLE.POPPINS,
        }}
        className="flex flex-wrap -mx-2 space-y-6 md:space-y-0"
      >
        <div className="w-full px-2 md:w-1/6 mb-5">
          <label className="block font-bold md:text-left mb-1 md:mb-0 pr-4">
            Nama Pemilik Rekening
          </label>
        </div>
        <div className="w-full px-2 md:w-5/6 mb-5">
          <TextInput
            value={posts.atas_nama_rekening}
            onChange={(e) =>
              setPost({
                ...posts,
                atas_nama_rekening: e.target.value,
              })
            }
          />
        </div>
      </div>
      <div
        style={{
          fontFamily: FONTSTYLE.POPPINS,
        }}
        className="flex flex-wrap -mx-2 space-y-6 md:space-y-0"
      >
        <div className="w-full px-2 md:w-1/6 mb-5">
          <label className="block font-bold md:text-left mb-1 md:mb-0 pr-4">
            Alamat Bank
          </label>
        </div>
        <div className="w-full px-2 md:w-5/6 mb-5">
          <TextInput
            value={posts.alamat_bank}
            onChange={(e) =>
              setPost({
                ...posts,
                alamat_bank: e.target.value,
              })
            }
          />
        </div>
      </div>
      <div
        style={{
          fontFamily: FONTSTYLE.POPPINS,
        }}
        className="flex flex-wrap -mx-2 space-y-6 md:space-y-0"
      >
        <div className="w-full px-2 md:w-1/6 mb-5">
          <label className="block font-bold md:text-left mb-1 md:mb-0 pr-4">
            Penanggung Jawab
          </label>
        </div>
        <div className="w-full px-2 md:w-5/6 mb-5">
          <TextInput
            value={posts.penanggung_jawab}
            onChange={(e) =>
              setPost({
                ...posts,
                penanggung_jawab: e.target.value,
              })
            }
          />
        </div>
      </div>
      <div
        style={{
          fontFamily: FONTSTYLE.POPPINS,
        }}
        className="flex flex-wrap -mx-2 space-y-6 md:space-y-0"
      >
        <div className="w-full px-2 md:w-1/6 mb-5">
          <label className="block font-bold md:text-left mb-1 md:mb-0 pr-4">
            Keterangan
          </label>
        </div>
        <div className="w-full px-2 md:w-5/6 mb-5">
          <TextInput
            value={posts.keterangan}
            onChange={(e) =>
              setPost({
                ...posts,
                keterangan: e.target.value,
              })
            }
          />
        </div>
      </div>
      <div
        style={{
          fontFamily: FONTSTYLE.POPPINS,
        }}
        className="flex flex-wrap -mx-2 space-y-6 md:space-y-0"
      >
        <div className="w-full px-2 md:w-1/6 mb-5">
          <label className="block font-bold md:text-left mb-1 md:mb-0 pr-4">
            Kontak
          </label>
        </div>
        <div className="w-full px-2 md:w-5/6 mb-5">
          <TextInput
            value={posts.kontak}
            onChange={(e) =>
              setPost({
                ...posts,
                kontak: e.target.value,
              })
            }
          />
        </div>
      </div>
      <div
        style={{
          fontFamily: FONTSTYLE.POPPINS,
        }}
        className="flex flex-wrap -mx-2 space-y-6 md:space-y-0"
      >
        <div className="w-full px-2 md:w-1/6 mb-5">
          <label className="block font-bold md:text-left mb-1 md:mb-0 pr-4">
            Upload Dokumen
          </label>
        </div>
        <div className="w-full px-2 md:w-5/6 mb-5">
          <Uploads
            name={"file"}
            multiple={false}
            showUploadList={uploadListPosts}
            onRemove={() => setPreviewUpload(null)}
            onChange={(info) => {
              if (
                info.file.type !== "image/png" &&
                info.file.type !== "image/jpeg" &&
                info.file.type !== "image/jpg" &&
                info.file.type !== "application/pdf"
              ) {
                alert("File Harus bertipe PNG, JPEG atau PDF");
                setUploadListPost(false);
                setPreviewUpload(null);
              } else {
                setUploadListPost(true);
                setPreviewUpload(
                  URL.createObjectURL(info.fileList[0]?.originFileObj)
                );

                setPost({
                  ...posts,
                  dokumen: info.fileList[0]?.originFileObj,
                });
              }
            }}
            beforeUpload={() => false}
            contentUpload={
              <Space direction="vertical" align="center">
                <p>
                  <b> Perhatian !</b> Apabila anda ingin menambahkan file
                  attachment, silahkan masukan disini
                  <b> Maksimal ukuran 500KB </b>
                </p>
                <Buttons
                  icon={<FileOutlined />}
                  labelButton={"Pilih Dokumen yang diupload"}
                ></Buttons>
                <img
                  src={previewUpload}
                  style={{
                    height: 300,
                    marginTop: 20,
                    //fontSize: 12,
                    //borderWidth: 1,
                    borderStyle: "dotted",
                    padding: 3,
                  }}
                  alt="Dokumen Belum diupload"
                />
              </Space>
            }
          />
        </div>
      </div>
      <div
        style={{
          fontFamily: FONTSTYLE.POPPINS,
        }}
        className="grid grid-cols-6 gap-4 mt-20"
      >
        <div className="col-end-8 col-span-2 ">
          <Space direction="horizontal" align="end">
            <Buttons
              labelButton={"Batal"}
              //height={30}
              backgroundColor={"white"}
              color={"#00BAEB"}
              onClick={() => {
                setPost({
                  kode_bank: "",
                  nama_bank: "",
                  nomor_rekening: "",
                  alamat_bank: "",
                  atas_nama_rekening: "",
                  penanggung_jawab: "",
                  kontak: "",
                  ucr: "",
                  dokumen: "",
                });
                navigate("../../registrasibank/");
              }}
            />
            <Buttons
              marginLeft={3}
              onClick={handleRegisBank}
              disable={
                posts.kode_bank === ""
                  ? true
                  : posts.nama_bank === ""
                  ? true
                  : posts.nomor_rekening === ""
                  ? true
                  : posts.alamat_bank === ""
                  ? true
                  : posts.atas_nama_rekening === ""
                  ? true
                  : posts.penanggung_jawab === ""
                  ? true
                  : posts.kontak === ""
                  ? true
                  : posts.dokumen === ""
                  ? true
                  : false
              }
              color={
                posts.kode_bank === ""
                  ? "whitesmoke"
                  : posts.nama_bank === ""
                  ? "whitesmoke"
                  : posts.nomor_rekening === ""
                  ? "whitesmoke"
                  : posts.alamat_bank === ""
                  ? "whitesmoke"
                  : posts.atas_nama_rekening === ""
                  ? "whitesmoke"
                  : posts.penanggung_jawab === ""
                  ? "whitesmoke"
                  : posts.kontak === ""
                  ? "whitesmoke"
                  : posts.dokumen === ""
                  ? "whitesmoke"
                  : "white"
              }
              backgroundColor={
                posts.kode_bank === ""
                  ? "grey"
                  : posts.nama_bank === ""
                  ? "grey"
                  : posts.nomor_rekening === ""
                  ? "grey"
                  : posts.alamat_bank === ""
                  ? "grey"
                  : posts.atas_nama_rekening === ""
                  ? "grey"
                  : posts.penanggung_jawab === ""
                  ? "grey"
                  : posts.kontak === ""
                  ? "grey"
                  : posts.dokumen === ""
                  ? "grey"
                  : "#00BAEB"
              }
              labelButton={"Simpan"}
              //height={30}
            />
          </Space>
        </div>

        <MessagePost
          visible={postregist.status !== null ? true : false}
          message={postregist.message}
          status={postregist.status}
        />
      </div>
    </div>
  );
};

export default TambahBank;
