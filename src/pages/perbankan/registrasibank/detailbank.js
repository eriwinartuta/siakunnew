import React, { useEffect } from "react";
import { Buttons } from "../../../component";
import { LeftCircleOutlined } from "@ant-design/icons";
import LoadingView from "../../../component/loading";
import ErrorView from "../../../component/errorView";
import { fetchRefBank } from "../../../store";
import { setGlobalTitle } from "../../../store/global";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Divider, Row, Col, Descriptions } from "antd";
import { RefBankById } from "../../../store/registrasibank/action";
import { FONTSTYLE } from "../../../component/font";

const DetailPerbankan = () => {
  const { nomor_rekening } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { bankbyid } = useSelector((state) => state.reducerRegistrasiBank);
  useEffect(() => {
    dispatch(setGlobalTitle("Perbankan / Registrasi Bank"));
    dispatch(RefBankById(nomor_rekening));
    // eslint-disable-next-line
  }, [dispatch]);

  const { error, loading } = useSelector((state) => state.reducerGlobal);

  if (loading) {
    return <LoadingView />;
  }

  if (error !== null) {
    return <ErrorView onClick={() => dispatch(fetchRefBank())} />;
  }

  return (
    <div className="p-5">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          position: "sticky",
          fontFamily: FONTSTYLE.POPPINS,
        }}
      >
        <div>
          <Buttons
            labelButton={"Kembali"}
            icon={<LeftCircleOutlined />}
            onClick={(e) => {
              navigate("../../registrasibank/");
            }}
          />
          <h5
            style={{
              marginTop: 20,
              fontWeight: "700",
              fontSize: 36,
              fontFamily: FONTSTYLE.PUBLICSANS,
            }}
          >
            Detail Perbankan
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
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col span={12}>
            <Descriptions column={2}>
              <Descriptions.Item className="font-bold">
                Nama Bank
              </Descriptions.Item>
              <Descriptions.Item>: {bankbyid?.nama_bank}</Descriptions.Item>
              <Descriptions.Item className="font-bold">
                Nomor Rekening
              </Descriptions.Item>
              <Descriptions.Item>
                : {bankbyid?.nomor_rekening}{" "}
              </Descriptions.Item>
              <Descriptions.Item className="font-bold">
                Atas Nama Rekening
              </Descriptions.Item>
              <Descriptions.Item>
                : {bankbyid?.atas_nama_rekening}
              </Descriptions.Item>
              <Descriptions.Item className="font-bold">
                Jenis Rekening
              </Descriptions.Item>
              <Descriptions.Item>
                : {bankbyid?.status_rekening}
              </Descriptions.Item>
              <Descriptions.Item className="font-bold">
                Unit Kerja
              </Descriptions.Item>
              <Descriptions.Item>: {bankbyid?.kode_unit} </Descriptions.Item>
              <Descriptions.Item className="font-bold">
                Alamat Bank
              </Descriptions.Item>
              <Descriptions.Item>: {bankbyid?.alamat_bank} </Descriptions.Item>
              <Descriptions.Item className="font-bold">
                Penanggung Jawab
              </Descriptions.Item>
              <Descriptions.Item>
                : {bankbyid?.penanggung_jawab}{" "}
              </Descriptions.Item>
              <Descriptions.Item className="font-bold">
                Kontak
              </Descriptions.Item>
              <Descriptions.Item>: {bankbyid?.kontak} </Descriptions.Item>
              <Descriptions.Item className="font-bold">
                Keterangan
              </Descriptions.Item>
              <Descriptions.Item>: {bankbyid?.keterangan} </Descriptions.Item>
            </Descriptions>
          </Col>
          <Col span={12} className="p-5 bg-white rounded-lg">
            <p className="text-xl text-color mb-5 text-center">
              <b> Dokumen Perbankan </b>
            </p>
            <center>
              {/* <iframe
                src={
                  URL_EXPENDITURE +
                  "/view-file-barjas/" +
                  detailbarjas?.dokumenKirimPanutan?.link_file
                }
                width="90%"
                height="600px"
                align="center"
                title="Dokumen SPM"
              /> */}
              <img
                alt="File Dokumen Bank"
                src={
                  "https://dev-sippp.ut.ac.id:4200/siakun/file/pdf-bank/" +
                  bankbyid?.dokumen
                }
                width="80%"
                height="600px"
              />
            </center>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default DetailPerbankan;
