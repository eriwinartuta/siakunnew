import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setGlobalTitle } from "../../../store/global";
// import { Tabel, Buttons, DatePickers } from "../../../component";
import { Divider } from "antd";
// import { DownloadOutlined, PlusOutlined } from "@ant-design/icons";
import { FONTSTYLE } from "../../../component/font";
// import { UnderConstruction } from "../../../component";
import { fetchLapPosKeuangan } from "../../../store";
import { DUMMY_LAP } from "../../../config/api";

const PosisiKeuangan = () => {
  const dispatch = useDispatch();
  const { getposisikeuangan } = useSelector(
    (state) => state.reducerLapPosisiKeuangan
  );
  //const { user } = useSelector((state) => state.reducerGlobal);

  useEffect(() => {
    dispatch(setGlobalTitle("Laporan / Posisi Keuangan"));
    dispatch(fetchLapPosKeuangan());
  }, [dispatch]);

  console.log("data dummy", getposisikeuangan);

  // const colomLapPosisiKeu = [
  //   {
  //     title: "Tanggal",
  //     dataIndex: "no",
  //     key: "no",
  //     width: "50%",
  //     render: (text, record, index) => {
  //       return (
  //         <>
  //           <p> {record.jenis} </p>
  //           <p> {record.sub_jenis[index]?.keterangan} </p>
  //           <p>
  //             {" "}
  //             {
  //               record.sub_jenis[index]?.sub_keterangan[index]?.nama_keterangan
  //             }{" "}
  //           </p>
  //         </>
  //       );
  //     },
  //   },
  //   {
  //     title: "Tanggal Awal",
  //     dataIndex: "kode_aplikasi",
  //     key: "kode_aplikasi",
  //     width: 200,
  //     align: "right",
  //     render: (text, record, index) => {
  //       return (
  //         <>
  //           <p> &nbsp; </p>
  //           <p> &nbsp; </p>
  //           <p> {record.sub_jenis[index]?.sub_keterangan[index]?.debit} </p>
  //         </>
  //       );
  //     },
  //   },
  //   {
  //     title: "Tanggal Akhir",
  //     dataIndex: "kode_modul",
  //     key: "kode_modul",
  //     align: "right",
  //     render: (text, record, index) => {
  //       return (
  //         <>
  //           <p> &nbsp; </p>
  //           <p> &nbsp; </p>
  //           <p> {record.sub_jenis[index]?.sub_keterangan[index]?.kredit} </p>
  //         </>
  //       );
  //     },
  //   },
  // ];

  return (
    <div
      style={{ fontFamily: FONTSTYLE.POPPINS }}
      className="p-5 bg-white rounded-lg"
    >
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
              fontSize: 24,
              marginLeft: 20,
              fontFamily: FONTSTYLE.PUBLICSANS,
            }}
          >
            Laporan Posisi Keuangan
          </h5>
        </div>
        <div
          style={{
            display: "flex flex-end",
            alignItems: "center",
            justifyContent: "justify-end",
            width: 600,
            marginRight: 10,
            fontFamily: FONTSTYLE.PUBLICSANS,
          }}
        >
          {/* <DatePickers
            picker={"date"}
            format={"YYYY-MM-DD"}
            //onChange={onChange}
          /> */}
          {/* <Buttons
            labelButton={"Unduh Laporan"}
            icon={<DownloadOutlined />}
            // onClick={() => {
            //   dispatch(fetchFilterJurnal(tgl_mulai, tgl_selesai));
            // }}
          /> */}
        </div>
      </div>
      <Divider />
      <div className="grid grid-cols-1 gap-2 mt-5">
        <p align="center" className="text-xl font-bold mb-5 mt-5">
          <iframe
            src={ DUMMY_LAP + "lapposisikeuangan.pdf"}
            width="90%"
            height="800px"
            title="Dokumen Laporan Posisi Keuangan"
          />
        </p>
      </div>

      {/* 
      <UnderConstruction /> */}
    </div>
  );
};

export default PosisiKeuangan;
