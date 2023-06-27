import { Space, Tabs, Radio,Input} from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setGlobalTitle } from "../../../store/global";
import { DatePickers, Buttons, Tabel } from "../../../component";

import {
  SyncOutlined,
  EditOutlined,
  //CheckCircleOutlined,
} from "@ant-design/icons";
import { formatDate } from "../../../utils/format_tgl_indo";
import { formatRupiah } from "../../../utils/formatRP";
import { FONTSTYLE } from "../../../component/font";
import { useState } from "react";
import { postRekonsiliasi } from "../../../store/rekonsiliasi/action";

const BukuBantuBelanja = () => {
  const { Search } = Input;
  const { TabPane } = Tabs;
  const dispatch = useDispatch();
  //postrekon

  const { postrekon } = useSelector((state) => state.reducerRekonsiliasi);

  console.log("data rekon", postrekon?.data);

  const [cekRekon, setCekRekon] = useState({
    //kode_penyeimbang: "",
    tanggal_awal: "0000-00-00",
    tanggal_akhir: "0000-00-00",
    nomor_rekening: "888801000157508",
  });

  useEffect(() => {
    dispatch(setGlobalTitle("Buku Bantu Berlanja"));
  }, [dispatch]);

  // useEffect(() => {
  //   if (postrekon?.status !== null) {
  //     setTimeout(() => {
  //       dispatch(clearPostRekon());
  //     }, 2000);
  //   }
  //   // eslint-disable-next-line
  // }, [postrekon.status]);

  const onChange = (date, dateString) => {
    setCekRekon({
      ...cekRekon,
      tanggal_awal: dateString[0],
      tanggal_akhir: dateString[1],
    });
  };

  let totalSaldo = 0;
  postrekon?.data?.forEach(({ nominal }) => {
    totalSaldo += parseInt(nominal);
  });

  const columns = [
    {
      title: "No",
      align: "center",
      dataIndex: "id_surat_tugas",
      key: "id_surat_tugas",
      width: 30,
      render: (text, record, index) => {
        return <Space direction="vertical">{index + 1}</Space>;
      },
    },
    {
      title: "Tanggal Transaksi",
      dataIndex: "tanggal_transaksi",
      key: "tanggal_transaksi",
      render: (text, record, index) => {
        return (
          <Space direction="vertical">
            <b> {formatDate(text)} </b>
          </Space>
        );
      },
    },
   
    {
      title: "Deskripsi",
      dataIndex: "keterangan",
      key: "keterangan",
      align: "left",
      render: (text, record, index) => {
        return <Space direction="vertical">{text}</Space>;
      },
    },
    {
      title: "Debit",
      dataIndex: "debit",
      key: "debit",
      align: "center",
      render: (text, record, index) => {
        return (
          <Space direction="vertical">
            {record.Normalitas === "Aktiva" ? "Kredit" : "Debit"}
          </Space>
        );
      },
    },
    {
      title: "Kredit",
      dataIndex: "kredit",
      key: "kredit",
      align: "right",
      render: (text, record, index) => {
        return <Space direction="vertical">{formatRupiah(text)}</Space>;
      },
    },
    {
      title: "Total",
      dataIndex: "total",
      key: "total",
      align: "right",
      render: (text, record, index) => {
        return <Space direction="vertical">{formatRupiah(text)}</Space>;
      },
    },
  ];

  return (
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
      

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1  gap-2" >
      <Radio.Group defaultValue="a" size="large">
      <Radio.Button value="a">Periode</Radio.Button>
      <Radio.Button value="b">Per-Tahun</Radio.Button>
      <Radio.Button value="c">Per-Bulan</Radio.Button>
    </Radio.Group>
        
        <div class="bg-white rounded-lg">
          <div class="p-6">
            <h5 class="text-gray-900 text-xl leading-tight font-medium mb-2">
              Input Periode
            </h5>
            <div className="flex flex-wrap -mx-2 space-y-6 md:space-y-0 mb-5">
        
        <div class="w-full md:w-1/6">
          <div
            style={{
              display: "flex",
              //alignItems: "center",
              //justifyContent: "space-between",
              width: 600,
              marginRight: 10,
            }}
          >
            <DatePickers
              picker={"date"}
              format={"YYYY-MM-DD"}
              onChange={onChange}
            />
            <Buttons
              labelButton={"Proses"}
              borderColor={"#0B53B5"}
              backgroundColor={"#0B53B5"}
              color={"white"}
              marginLeft={5}
              icon={<SyncOutlined />}
              onClick={() => {
                dispatch(postRekonsiliasi(cekRekon));
              }}
            />
          </div>
        </div>
        <div className="w-full px-2 md:w-2/6"></div>
      </div>
            
          </div>
        </div>
        
      </div>
      <h5
        style={{
          marginTop: 10,
          marginBottom: 20,
          fontWeight: "700",
          fontSize: 24,
        }}
      >
        Riwayat Transaksi
      </h5>

      <div className="mt-5 p-5 bg-white rounded-lg">
      <div>
              <Search
                size="large"
                placeholder="Cari..."
                // onChange={(e) => onSearch(e.target.value)}
                style={{
                  width: 500,
                }}
              />
            </div>
        <div type="card">
        
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
                dataSource={postrekon?.data}
                columns={columns}
                rowKey={"key"}
              />
            </div>
          
          {/* <TabPane
            tab={
              <span>
                <SyncOutlined />
                <b> Proses </b>
              </span>
            }
            key="2"
          >
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
              <Tabel dataSource={postrekon?.data} columns={columns} rowKey={"key"} />
            </div>
          </TabPane>
          <TabPane
            tab={
              <span>
                <CheckCircleOutlined />
                <b> Selesai </b>
              </span>
            }
            key="3"
          >
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
              <Tabel dataSource={postrekon?.data} columns={columns} rowKey={"key"} />
            </div>
          </TabPane> */}
        </div>
      </div>
      {/* <MessagePost
        visible={postrekon.status !== null ? true : false}
        message={postrekon.message}
        status={postrekon.status}
      /> */}
    </div>
  );
};

export default BukuBantuBelanja;
