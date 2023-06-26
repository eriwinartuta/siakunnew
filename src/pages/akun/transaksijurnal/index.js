import React, { useState, useEffect } from "react";
import { Tabel, Buttons, DatePickers } from "../../../component";
import { SearchOutlined, PlusOutlined } from "@ant-design/icons";
import LoadingView from "../../../component/loading";
import { useNavigate } from "react-router-dom";
import ErrorView from "../../../component/errorView";
import { fetchFilterJurnal } from "../../../store";
import { useDispatch, useSelector } from "react-redux";
import { formatDate } from "../../../utils/format_tgl_indo";
import { setGlobalTitle } from "../../../store/global";
import ribuan from "../../../utils/formatribu";
import { Space, Table, Tag, Button } from "antd";
import { FONTSTYLE } from "../../../component/font";
import { jurnalByKode, jurnalByKodeRealisasi, fetchKodeSurat } from "../../../store/transaksijurnal/action";

const TransaksiJurnal = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { filterjurnal } = useSelector((state) => state.reducerTransaksiJurnal);
  const { error, loading } = useSelector((state) => state.reducerGlobal);

  const [tgl_mulai, setTglMulai] = useState("0000-00-00");
  const [tgl_selesai, setTglSelesai] = useState("0000-00-00");

  useEffect(() => {
    dispatch(setGlobalTitle("Akun / Transaksi Jurnal"));
    dispatch(fetchFilterJurnal(tgl_mulai, tgl_selesai));
    // eslint-disable-next-line
  }, [dispatch]);

  const onChange = (date, dateString) => {
    setTglMulai(dateString[0]);
    setTglSelesai(dateString[1]);
  };

  // const colomntrans = [
  //   {
  //     title: "Tanggal Transaksi",
  //     dataIndex: "tanggal_transaksi",
  //     key: "tanggal_transaksi",
  //     render: (text, record, index) => {
  //       return (
  //         <Space direction="vertical" size={0}>
  //           <p> <b> {formatDate(text)} </b> </p>
  //           <p> &nbsp; </p>
  //           <p> &nbsp; </p>
  //         </Space>
  //       );
  //     },
  //   },
  //   {
  //     title: "Kode - Keterangan Transaksi",
  //     dataIndex: "kode_transaksi",
  //     key: "kode_transaksi",
  //     render: (text, record, index) => {
  //       return (
  //         <Space direction="vertical" size={0}>
  //           <p> <b>  {text} - {record.keterangan} </b> </p>
  //           <Tag color="blue"> <a href="#/" onClick={() => {
  //             navigate("detailtrxjurnal/");
  //           }}

  //           >  Lihat Detail </a> </Tag>
  //           <p> &nbsp; </p>

  //         </Space>
  //       );
  //     },
  //   },
  //   {
  //     title: "Aplikasi",
  //     dataIndex: "aplikasi",
  //     key: "aplikasi",
  //     width: 200,
  //     render: (text, record, index) => {
  //       return (
  //         <Space direction="vertical" size={0}>
  //           <p> <b>  {text} </b> </p>
  //           <p> &nbsp; </p>
  //           <p> &nbsp; </p>
  //         </Space>
  //       );
  //     },
  //   },
  //   {
  //     title: "Jurnal",
  //     children: [
  //       {
  //         title: "Akun - Debit",
  //         dataIndex: 'jurnal_aktiva',
  //         key: 'jurnal_aktiva',
  //         render: (text, record, index) => {
  //           return (
  //             <Space direction="vertical" size={0}>
  //                <p> &nbsp; </p>
  //               <p> <Tag color="blue"> {record.jurnal_aktiva2?.kode_akun_6} </Tag> - {record.jurnal_aktiva2?.uraian_akun_6} </p>
  //             </Space>
  //           );
  //         },
  //       },
  //       {
  //         title: "Akun - Kredit",
  //         dataIndex: 'jurnal_pasiva',
  //         key: 'jurnal_pasiva',
  //         render: (text, record, index) => {
  //           return (
  //             <Space direction="vertical" size={0}>
  //               <p> &nbsp; </p>
  //               <p> &nbsp; </p>
  //               <p> <Tag color="green"> {record.jurnal_pasiva2?.kode_akun_6} </Tag>  - {record.jurnal_pasiva2?.uraian_akun_6} </p>
  //             </Space>
  //           );
  //         },
  //       },
  //     ],
  //     //width: 300,
  //   },
  //   // {
  //   //   title: "Akun",
  //   //   children: [
  //   //     {
  //   //       dataIndex: 'akun_aktiva',
  //   //       key: 'akun_aktiva',
  //   //       width: 50,
  //   //       render: (text, record, index) => {
  //   //         return (
  //   //           <Space direction="vertical" size={0}>
  //   //              <p> &nbsp; </p>
  //   //             <p> {record.jurnal_aktiva2?.kode_akun_6} </p>
  //   //           </Space>
  //   //         );
  //   //       },
  //   //     },
  //   //     {
  //   //       dataIndex: 'akun_pasiva',
  //   //       key: 'akun_pasiva',
  //   //       width: 50,
  //   //       render: (text, record, index) => {
  //   //         return (
  //   //           <Space direction="vertical" size={0}>
  //   //             <p> &nbsp; </p>
  //   //             <p> &nbsp; </p>
  //   //             <p> {record.jurnal_pasiva2?.kode_akun_6} </p>
  //   //           </Space>
  //   //         );
  //   //       },
  //   //     },
  //   //   ],
  //   //   width: 100,
  //   // },
  //   {
  //     title: "Debit",
  //     dataIndex: "Aktiva",
  //     key: "Aktiva",
  //     align: "right",
  //     render: (text, record, index) => {
  //       return (
  //         <Space direction="vertical" size={0}>
  //           <p> &nbsp; </p>
  //           <p> {ribuan(text)} </p>
  //           <p> {ribuan(0)} </p>
  //         </Space>
  //       );
  //     },
  //   },
  //   {
  //     title: "Kredit",
  //     dataIndex: "Pasiva",
  //     key: "Pasiva",
  //     align: "right",
  //     render: (text, record, index) => {
  //       return (
  //         <Space direction="vertical" size={0}>
  //           <p> &nbsp; </p>
  //           <p> {ribuan(0)} </p>
  //           <p> {ribuan(text)} </p>
  //         </Space>
  //       );
  //     },
  //   },
  // ];

  const colomntrans = [
    {
      title: "Akun",
      dataIndex: "tanggal_transaksi",
      key: "tanggal_transaksi",
      render: (text, record, index) => {
        return (
          <Space direction="vertical" size={0}>
            <p>
              {" "}
              <Button
                style={{ fontSize: 18 }}
                type="link"
                onClick={() => {
                  dispatch(jurnalByKode(record.kode_transaksi));
                  dispatch(jurnalByKodeRealisasi(record.realisasi));
                  dispatch(fetchKodeSurat(record.kode_surat))
                  setTimeout(() => {
                    navigate("detailtrxjurnal/" + record.kode_surat);
                  }, 3000);
               
                  
                }}
              >
                <b>
                  {record.kode_transaksi} | {formatDate(text)} 
                </b>
              </Button>
            </p>
            <p> <b>  ( {record.keterangan} ) </b> </p>
            <p className="tracking-wide">
              {" "}
              <Tag style={{ fontSize: 16, padding: 5, margin: 5 }} color="blue">
                {" "}
                {record.akun_aktiva}{" "}
              </Tag>{" "}
              {record.jurnal_aktiva}{" "}
            </p>
            <p className="tracking-wide">
              {" "}
              <Tag
                style={{ fontSize: 16, padding: 5, margin: 5 }}
                color="green"
              >
                {" "}
                {record.akun_pasiva}{" "}
              </Tag>{" "}
              {record.jurnal_pasiva}{" "}
            </p>
          </Space>
        );
      },
    },
    // {
    //   title: "Kode - Keterangan Transaksi",
    //   dataIndex: "kode_transaksi",
    //   key: "kode_transaksi",
    //   render: (text, record, index) => {
    //     return (
    //       <Space direction="vertical" size={0}>
    //         <p>
    //           {" "}
    //           <b>
    //             {" "}
    //             {text} - {record.keterangan}{" "}
    //           </b>{" "}
    //         </p>
    //         <Tag color="blue">
    //           {" "}
    //           <a
    //             href="#/"
    //             onClick={() => {
    //               navigate("detailtrxjurnal/");
    //             }}
    //           >
    //             {" "}
    //             Lihat Detail{" "}
    //           </a>{" "}
    //         </Tag>
    //         <p> &nbsp; </p>
    //       </Space>
    //     );
    //   },
    // },

    {
      title: "Debit",
      dataIndex: "Aktiva",
      key: "Aktiva",
      align: "right",
      render: (text, record, index) => {
        return (
          <Space direction="vertical" size={0}>
            <p> &nbsp; </p>
            <p> &nbsp; </p>
            <p> {ribuan(text)} </p>
            <p> {ribuan(0)} </p>
          </Space>
        );
      },
    },
    {
      title: "Kredit",
      dataIndex: "Pasiva",
      key: "Pasiva",
      align: "right",
      render: (text, record, index) => {
        return (
          <Space direction="vertical" size={0}>
            <p> &nbsp; </p>
            <p> &nbsp; </p>
            <p> {ribuan(0)} </p>
            <p> {ribuan(text)} </p>
          </Space>
        );
      },
    },
  ];

  if (loading) {
    return <LoadingView />;
  }

  if (error !== null) {
    return (
      <ErrorView
        onClick={() => dispatch(fetchFilterJurnal(tgl_mulai, tgl_selesai))}
      />
    );
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
              marginBottom: 20,
              fontWeight: "700",
              fontSize: 16,
              fontFamily: FONTSTYLE.PUBLICSANS,
            }}
          >
            Daftar Transaksi
          </h5>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: 600,
            marginRight: 10,
            fontFamily: FONTSTYLE.PUBLICSANS,
          }}
        >
          <DatePickers
            picker={"date"}
            format={"YYYY-MM-DD"}
            onChange={onChange}
          />
          <Buttons
            labelButton={"Cari Transaksi"}
            marginLeft={5}
            icon={<SearchOutlined />}
            onClick={() => {
              dispatch(fetchFilterJurnal(tgl_mulai, tgl_selesai));
            }}
          />
          <Buttons
            labelButton={"Penyesuaian"}
            marginRight={10}
            marginLeft={5}
            icon={<PlusOutlined />}
            //onClick={dispatch(fetchFilterJurnal(tgl_mulai, tgl_selesai))}
            onClick={() => {
              navigate("penyesuaian/");
            }}
            //borderRadius={5}
            //visibility={tambahVisi === false ? "hidden" : "visible"}
            //transition={"all 100ms ease-in-out .150ms"}
            //onClick={() => dispatch(postVisi(inputData))}
            //loading={loadingpost}
          />
        </div>
      </div>
      <div
        style={{
          padding: 5,
          zIndex: 0,
          //overflowX: "auto",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          fontFamily: FONTSTYLE.POPPINS,
        }}
      >
        <Tabel
          dataSource={filterjurnal}
          columns={colomntrans}
          pagination={{
            defaultPageSize: 25,
            showSizeChanger: true,
            pageSizeOptions: ["25", "50", "75"],
          }}
          rowKey={"kode_transaksi"}
          summary={() => {
            let totalAktiva = 0;
            let totalPasiva = 0;

            let total = [];
            for (let a = 0; a < filterjurnal?.length; a++) {
              let aktiva1 = filterjurnal[a]?.Aktiva;
              let pasiva1 = filterjurnal[a]?.Pasiva;
              total.push({
                aktiva: aktiva1,
                pasiva: pasiva1,
              });
            }

            total.forEach(({ aktiva }) => {
              totalAktiva += parseInt(aktiva);
            });
            total.forEach(({ pasiva }) => {
              totalPasiva += parseInt(pasiva);
            });

            return (
              <>
                <Table.Summary.Row>
                  <Table.Summary.Cell colSpan={1}>
                    <b> Total {filterjurnal?.length} Transaksi </b>
                  </Table.Summary.Cell>
                  {/* <Table.Summary.Cell align="right">
                    <b> {ribuan(totalAktiva)} </b>
                  </Table.Summary.Cell>
                  <Table.Summary.Cell align="right">
                    <b> {ribuan(totalPasiva)} </b>
                  </Table.Summary.Cell> */}
                </Table.Summary.Row>
              </>
            );
          }}
        />
      </div>
    </div>
  );
};

export default TransaksiJurnal;
