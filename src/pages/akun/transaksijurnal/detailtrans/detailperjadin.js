import React, { useEffect } from "react";
import { Card, Tabs } from "antd";
//import "../../assets/style/table.css";
//import { Loading, ErrorView } from "../../../../../component/";
import { FilePdfOutlined } from "@ant-design/icons";
//import "../../App.css";
import { useDispatch, useSelector } from "react-redux";
import { FONTSTYLE } from "../../../../component/font";
import { formatDate } from "../../../../utils/format_tgl_indo";
import { formatRupiah } from "../../../../utils/formatRP";
import { fetchDetailTransaksiPerjadin } from "../../../../store/transaksijurnal/action";
import { useParams } from "react-router-dom";
import { ImageTransaksi } from "../../../../assets";
import { Buttons } from "../../../../component";
import { LeftCircleOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const DetailTransaksiPerjadin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id_surat } = useParams();
  // const navigate = useNavigate();
  const { TabPane } = Tabs;
  //const { Step } = Steps;
  const {
    detailtransaksiperjadin,
    jurnaltransaksi,
    jurnalrealisasi,
    suratheaderid,
  } = useSelector((state) => state.reducerTransaksiJurnal);
  const { user } = useSelector((state) => state.reducerGlobal);

  // useEffect(() => {
  //   dispatch(
  //     fetchDetailTransaksiPerjadin(
  //       user?.data.TrxUnitKerjaPegawais[0]?.kode_unit,
  //       id_surat
  //     )
  //   );
  //   // eslint-disable-next-line
  // }, [dispatch]);

  //   if (loading) {
  //     return <Loading />;
  //   }

  //   if (error !== null) {
  //     return (
  //       <ErrorView
  //         onClick={() =>
  //           dispatch(
  //             fetchDetailTransaksiPerjadin(
  //               user?.data.TrxUnitKerjaPegawais[0]?.kode_unit,
  //               id_surat
  //             )
  //           )
  //         }
  //       />
  //     );
  //   }

  let totalSkemaSeluruh = 0;
  detailtransaksiperjadin[0]?.surtug[0]?.hsurat?.forEach(({ total_biaya }) => {
    totalSkemaSeluruh += parseInt(total_biaya);
  });

  return (
    <div
      style={{ fontFamily: FONTSTYLE.POPPINS }}
      className="p-10 bg-grey rounded-lg"
    >
      <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2">
        <div style={{ fontFamily: FONTSTYLE.PUBLICSANS }}>
            <p className="text-2xl font-bold ">  <Buttons  icon={<LeftCircleOutlined />}  labelButton={"Kembali"}  onClick={() => {
              navigate("../../transaksijurnal/");
            }}  />  Detail Transaksi Jurnal </p>
          <div className="mt-5">
            <Card size="small" title="Kode Transaksi ">
              <p className="text-xl font-bold">
                <b> {jurnaltransaksi?.kode_transaksi}</b>
                <p style={{ fontSize: 12 }}> {jurnaltransaksi?.keterangan} </p>
              </p>
            </Card>
          </div>
          <div className="mt-5">
            <Card size="small" title="Tanggal Transaksi">
              <p className="text-xl font-bold">
                <b> {formatDate(jurnaltransaksi?.tanggal_transaksi)} </b>
              </p>
            </Card>
          </div>
          {jurnalrealisasi?.length === 0 ? (
            <div> </div>
          ) : (
            <>
              {" "}
              <div className="mt-5">
                <Card size="small" title="Kode Transaksi Realisasi">
                  <p className="text-xl font-bold">
                    <b> {jurnalrealisasi?.kode_transaksi} </b>
                    <p style={{ fontSize: 12 }}>
                      {" "}
                      {jurnalrealisasi?.keterangan}{" "}
                    </p>
                  </p>
                </Card>
              </div>{" "}
              <div className="mt-5">
                <Card size="small" title="Tanggal Transaksi">
                  <p className="text-xl font-bold">
                    <b> {formatDate(jurnalrealisasi?.tanggal_transaksi)} </b>
                  </p>
                </Card>
              </div>{" "}
            </>
          )}
          <div className="mt-5">
            <Card size="small" title="Unit ">
              <p className="text-xl font-bold">
                <b> {suratheaderid?.nama_unit}</b>
                <p style={{ fontSize: 12 }}>
                  {" "}
                  Jenis Usulan : {suratheaderid?.SuratdokHeader[0]?.katagori_surat}{" "}
                </p>
              </p>
            </Card>
          </div>

          {/* <div className="mt-5">
          <Card size="small" title="Total Biaya">
            <p className="text-2xl font-bold text-right">
              <b>{formatRupiah(totalSkemaSeluruh)} </b>
            </p>
          </Card>
        </div> */}
        </div>

        <div>
          <div className="text-center mt-10">
            <center>
              <img
                alt="Gambar Transaksi"
                className="text-center object-fill w-96 object-center"
                src={ImageTransaksi}
                width={600}
              />
            </center>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <p
          style={{ fontFamily: FONTSTYLE.PUBLICSANS }}
          className="text-2xl font-bold "
        >
          {" "}
           Dokumen Transaksi {suratheaderid?.SuratdokHeader[0]?.katagori_surat}
        </p>
        <Tabs >
          {suratheaderid?.SuratdokHeader?.map((res, index) => {
            return (
              <TabPane
                tab={
                  <span>
                    <FilePdfOutlined />
                    <b> {res.jenis_surat} </b>
                  </span>
                }
                key={index}
              >
                <p className="text-xl text-color mb-5 text-center">
                  <b>
                    Nomor {res.jenis_surat} :  {res.nomor}
                  </b>
                </p>
                <center>
                  <iframe
                    title={res?.jenis_surat}
                    src={res?.link_file}
                    width="75%"
                    height="1000px"
                    align="center"
                  />
                </center>
              </TabPane>
            );
          })}
        </Tabs>
      </div>
    </div>
  );
};

export default DetailTransaksiPerjadin;
