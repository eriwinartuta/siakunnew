import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setGlobalTitle } from "../../../store/global";
// import { UnderConstruction } from "../../../component";
import { FONTSTYLE } from "../../../component/font";
import { Divider } from "antd";
import LazyLoad from "react-lazyload";
import { DUMMY_LAP } from "../../../config/api";

const PenghasilanKomprehensif = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setGlobalTitle("Laporan / Penghasilan Komprehensif"));
  }, [dispatch]);

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
            Laporan Penghasilan Komprehensif
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
          <LazyLoad>
            <iframe
              src={DUMMY_LAP + "lappenghasilankomprehensif.pdf"}
              width="90%"
              height="800px"
              title="Dokumen Laporan Penghasilan Komprehensif"
            />
          </LazyLoad>
        </p>
      </div>

      {/* 
      <UnderConstruction /> */}
    </div>
  );
};

export default PenghasilanKomprehensif;
