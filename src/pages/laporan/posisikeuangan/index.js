import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setGlobalTitle } from "../../../store/global";
// import { Tabel, Buttons, DatePickers } from "../../../component";
import { Divider, Radio, DatePicker, Spin, Table, Card, Space } from "antd";
import { Buttons, Selects } from "../../../component";
// import { DownloadOutlined, PlusOutlined } from "@ant-design/icons";
import { FONTSTYLE } from "../../../component/font";
// import { UnderConstruction } from "../../../component";
import { fetchLapPosKeuangan } from "../../../store";
import { DUMMY_LAP } from "../../../config/api";
import { SyncOutlined, ReloadOutlined } from "@ant-design/icons";
import moment from "moment";

import DokumenPdf from "./DokumenPdf";

const PosisiKeuangan = () => {
  const dispatch = useDispatch();
  const { RangePicker } = DatePicker;

  const cardStyle = {
    backgroundColor: "#D8EFFF",
    color: "black",
    height: "400px",
    borderRadius: "10px",
  };

  const { getposisikeuangan } = useSelector(
    (state) => state.reducerLapPosisiKeuangan
  );
  //const { user } = useSelector((state) => state.reducerGlobal);

  useEffect(() => {
    dispatch(setGlobalTitle("Laporan / Posisi Keuangan"));
    dispatch(fetchLapPosKeuangan());
  }, [dispatch]);

  console.log("data dummy", getposisikeuangan);

  const column = [
    {
      title: "Keterangan",
      dataIndex: "no",
      key: "no",
      width: "50%",
      render: (text, record, index) => {
        return (
          <>
            <p> {record.keterangan} </p>
          </>
        );
      },
    },
    {
      title: "Tahun Sekarang",
      dataIndex: "kode_aplikasi",
      key: "kode_aplikasi",
      width: 200,
      align: "right",
      render: (text, record, index) => {
        return (
          <>
            <p> {record.ominal_tahun_sesudah} </p>
          </>
        );
      },
    },
    {
      title: "Tahun Sebelum",
      dataIndex: "kode_modul",
      key: "kode_modul",
      align: "right",
      render: (text, record, index) => {
        return (
          <>
            <p> {record.nominal_tahun_sebelumn} </p>
          </>
        );
      },
    },
  ];

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
      <div class="grid grid-cols-4 ">
        <div class="h-full border-r   ">
          <Card style={cardStyle}>
            <Card style={{ marginBottom: 20 }}>
              <div
                className="grid grid-cols-1   "
                style={{ fontFamily: FONTSTYLE.POPPINS }}
              >
                <label className="block mb-1 text-md font-bold">
                  Pilih Berdasarkan:
                </label>
                <Space direction="vertical" size={12}>
                  <RangePicker picker="year" />
                </Space>
              </div>
            </Card>
            <Buttons
              labelButton={"Proses"}
              borderColor={"#229CE1"}
              backgroundColor={"#229CE1"}
              color={"white"}
              marginBottom={20}
              icon={<SyncOutlined />}
              // onClick={(fetchLapPosKeuangan)}
            />
            <DokumenPdf
              // isEditDone={isEditDone}
              // isEditForm={isEditForm}
              dataTable={getposisikeuangan}
              // dataUnit={dataUnit}
              // pdfData={pdfData}
            />
          </Card>
        </div>
        <div class="col-span-3 ml-5">
          <Table
            // dataSource={data.filter((item) => {
            //   const formattedSearchText = searchText.toLowerCase();

            //   // Filter based on searchText
            //   const searchMatch = Object.values(item).some((value) => {
            //     const formattedValue = value.toString().toLowerCase();
            //     return formattedValue.includes(formattedSearchText);
            //   });
            //   if (searchMatch) return true;

            //   // Filter based on specific date
            //   const searchDate = moment(searchText, "D MMMM", true);
            //   if (searchDate.isValid()) {
            //     const itemDate = moment(item.tanggal_transaksi, "YYYY-MM-DD");
            //     return (
            //       itemDate.format("D MMMM") === searchDate.format("D MMMM")
            //     );
            //   }

            //   return false;
            // })}
            columns={column}
            bordered
            pagination={{ pageSize: 50 }}
            scroll={{ y: 2000 }}
          />
        </div>
      </div>

      {/* 
      <UnderConstruction /> */}
    </div>
  );
};

export default PosisiKeuangan;
