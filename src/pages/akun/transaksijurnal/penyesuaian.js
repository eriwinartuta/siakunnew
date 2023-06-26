import React, { useState, useEffect } from "react";
import { Buttons, TextInput, MessagePost } from "../../../component";
// import {
//   PlusOutlined,
//   EditOutlined,
//   DeleteOutlined,
//   MinusOutlined,
//   PlusCircleTwoTone,
//   MinusCircleTwoTone,
// } from "@ant-design/icons";
import LoadingView from "../../../component/loading";
import ErrorView from "../../../component/errorView";
import { fetchNestedJurnal } from "../../../store";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setGlobalTitle } from "../../../store/global";
import {
  jurnalByKode,
  postJurnal,
  clearPost,
  clearPostJurnal
} from "../../../store/transaksijurnal/action";
import {
  Space,
  Divider,
} from "antd";
import { FONTSTYLE } from "../../../component/font";

const JurnalPenyesuaian = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { jurnalbykode, postjurnal } = useSelector(
    (state) => state.reducerTransaksiJurnal
  );
  const [kodeTrans, setKodeTrans] = useState();

  const { error, loading } = useSelector((state) => state.reducerGlobal);

  useEffect(() => {
    dispatch(fetchNestedJurnal());
    dispatch(setGlobalTitle("Akun / Transaksi Jurnal"));
    // eslint-disable-next-line
  }, [dispatch]);

  const [jurnalPost, setJurnalPost] = useState({
    kode_transaksi: "",
    tanggal_transaksi: "",
    keterangan: "",
    modul: "",
    aplikasi: "",
    jurnal_aktiva: "",
    jurnal_pasiva: "",
    akun_aktiva: "",
    akun_pasiva: "",
    aktiva: "",
    pasiva: "",
    kode_surat: ""
  });

  useEffect(() => {
    setJurnalPost({
      ...jurnalPost,
      kode_transaksi: jurnalbykode?.kode_transaksi,
      tanggal_transaksi: jurnalbykode?.tanggal_transaksi,
      keterangan: jurnalbykode?.keterangan,
      modul: jurnalbykode?.modul,
      aplikasi: jurnalbykode?.aplikasi,
      jurnal_aktiva: jurnalbykode?.jurnal_aktiva,
      jurnal_pasiva: jurnalbykode?.jurnal_pasiva,
      akun_aktiva: jurnalbykode?.akun_aktiva,
      akun_pasiva: jurnalbykode?.akun_pasiva,
      aktiva: jurnalbykode?.aktiva,
      pasiva: jurnalbykode?.pasiva,
      kode_surat: jurnalbykode?.kode_surat,
    });
    // eslint-disable-next-line
  }, [jurnalbykode]);

  useEffect(() => {
    if (postjurnal.status !== null) {
      setTimeout(() => {
        dispatch(clearPost());
      }, 3000);
    }
    // eslint-disable-next-line
  }, [postjurnal.status]);


  if (loading) {
    return <LoadingView />;
  }

  if (error !== null) {
    return <ErrorView onClick={() => dispatch(fetchNestedJurnal())} />;
  }

  return (
    <div style={{fontFamily : FONTSTYLE.POPPINS }} className="p-5 bg-white rounded-lg">
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
            Transaksi Jurnal
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
            }}
          >
            Penyesuaian Transaksi
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
        }}
      >
        <div className="flex flex-wrap -mx-2 space-y-6 md:space-y-0">
          <div className="w-full px-2 md:w-1/6 mb-5">
            <label className="block font-bold md:text-left mb-1 md:mb-0 pr-4">
              Kode Transaksi
            </label>
          </div>
          <div className="w-full px-2 md:w-5/6 mb-5">
            <Space direction="horizontal">
              <TextInput
                width={300}
                onChange={(e) => setKodeTrans(e.target.value)}
              />
              <Buttons
                labelButton={"Cari Kode"}
                onClick={() => dispatch(jurnalByKode(kodeTrans))}
              />
            </Space>
          </div>
        </div>
        <div className="flex flex-wrap -mx-2 space-y-6 md:space-y-0">
          <div className="w-full px-2 md:w-1/6 mb-5">
            <label className="block font-bold md:text-left mb-1 md:mb-0 pr-4">
              Tanggal Transaksi
            </label>
          </div>
          <div className="w-full px-2 md:w-5/6 mb-5">
            <TextInput
              disabled={true}
              value={jurnalPost.tanggal_transaksi}
              onChange={(e) =>
                setJurnalPost({
                  ...jurnalPost,
                  tanggal_transaksi: e.target.value,
                })
              }
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-2 space-y-6 md:space-y-0">
          <div className="w-full px-2 md:w-1/6 mb-5">
            <label className="block font-bold md:text-left mb-1 md:mb-0 pr-4">
              Keterangan Transaksi
            </label>
          </div>
          <div className="w-full px-2 md:w-5/6 mb-5">
            <TextInput
              disabled={true}
              value={jurnalPost.keterangan}
              onChange={(e) =>
                setJurnalPost({
                  ...jurnalPost,
                  keterangan: e.target.value,
                })
              }
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-2 space-y-6 md:space-y-0 mb-5">
          <div class="w-full px-2 md:w-1/6">
            <label className="block font-bold md:text-left mb-1 md:mb-0 pr-4">
              Akun 1
            </label>
          </div>
          <div className="w-full px-2 md:w-2/6">
            <TextInput
              disabled={true}
              value={jurnalPost.akun_pasiva}
              onChange={(e) =>
                setJurnalPost({
                  ...jurnalPost,
                  akun_pasiva: e.target.value,
                })
              }
            />
          </div>
          <div class="w-full md:w-1/6">
            <label className="block font-bold md:text-left mb-1 md:mb-0 pr-4">
              Akun 2
            </label>
          </div>
          <div className="w-full px-2 md:w-2/6">
            <TextInput
              disabled={true}
              value={jurnalPost.akun_aktiva}
              onChange={(e) =>
                setJurnalPost({
                  ...jurnalPost,
                  akun_aktiva: e.target.value,
                })
              }
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-2 space-y-6 md:space-y-0 mb-5">
          <div className="w-full px-2 md:w-1/6">
            <label className="block font-bold md:text-left mb-1 md:mb-0 pr-4">
              Jurnal 1
            </label>
          </div>
          <div class="w-full px-2 md:w-2/6">
            <TextInput
              disabled={true}
              value={jurnalPost.jurnal_pasiva}
              onChange={(e) =>
                setJurnalPost({
                  ...jurnalPost,
                  jurnal_pasiva: e.target.value,
                })
              }
            />
          </div>
          <div className="w-full px-2 md:w-1/6">
            <label className="block font-bold md:text-left mb-1 md:mb-0 pr-4">
              Jurnal 2
            </label>
          </div>
          <div className="w-full px-2 md:w-2/6">
            <TextInput
              disabled={true}
              value={jurnalPost.jurnal_aktiva}
              onChange={(e) =>
                setJurnalPost({
                  ...jurnalPost,
                  jurnal_aktiva: e.target.value,
                })
              }
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-2 space-y-6 md:space-y-0 mb-5">
          <div className="w-full px-2 md:w-1/6">
            <label className="block font-bold md:text-left mb-1 md:mb-0 pr-4">
              Nominal 1
            </label>
          </div>
          <div className="w-full px-2 md:w-2/6">
            <TextInput
              disabled={true}
              value={jurnalPost.pasiva}
              onChange={(e) =>
                setJurnalPost({
                  ...jurnalPost,
                  pasiva: e.target.value,
                })
              }
            />
          </div>
          <div className="w-full px-2 md:w-1/6">
            <label className="block font-bold md:text-left mb-1 md:mb-0 pr-4">
              Nominal 2
            </label>
          </div>
          <div className="w-full px-2 md:w-2/6">
            <TextInput
              disabled={true}
              value={jurnalPost.aktiva}
              onChange={(e) =>
                setJurnalPost({
                  ...jurnalPost,
                  aktiva: e.target.value,
                })
              }
            />
          </div>
        </div>

        <div className="grid grid-cols-6 gap-4">
          <div className="col-end-8 col-span-2 ">
            <Space direction="horizontal" align="end">
              <Buttons
                labelButton={"Batal"}
                height={30}
                backgroundColor={"white"}
                color={"#00BAEB"}
                onClick={() => {
                  dispatch(clearPostJurnal());
                  navigate("../../transaksijurnal/");
                }}
              />
              <Buttons
                marginLeft={3}
                backgroundColor={"#00BAEB"}
                color={"white"}
                labelButton={"Simpan"}
                height={30}
                onClick={() =>
                  dispatch(
                    postJurnal({
                      data: {
                        kode_transaksi: jurnalPost.kode_transaksi,
                        tanggal_transaksi: jurnalPost.tanggal_transaksi,
                        keterangan: jurnalPost.keterangan,
                        modul: jurnalPost.modul,
                        aplikasi: jurnalPost.aplikasi,
                        jurnal_aktiva: jurnalPost.jurnal_aktiva,
                        jurnal_pasiva: jurnalPost.jurnal_pasiva,
                        akun_aktiva: jurnalPost.akun_aktiva,
                        akun_pasiva: jurnalPost.akun_pasiva,
                        aktiva: jurnalPost.aktiva,
                        pasiva: jurnalPost.pasiva,
                        tahun: "2022",
                        reversal: jurnalPost.kode_transaksi,
                        kode_surat: jurnalPost.kode_surat,
                        ucr: "Ridho",
                      },
                    })
                  )
                }
              />
            </Space>
          </div>
        </div>
        <MessagePost
            visible={postjurnal.status !== null ? true : false}
            message={postjurnal.message}
            status={postjurnal.status}
          />
      </div>
    </div>
  );
};

export default JurnalPenyesuaian;
