import React, { useEffect } from "react";
// import { Descriptions } from "antd";
// import { ImageTransaksi } from "../../../assets";
// import LoadingView from "../../../component/loading";
// import ErrorView from "../../../component/errorView";
// import { fetchNestedJurnal } from "../../../store";
import { useDispatch } from "react-redux";
import { setGlobalTitle } from "../../../store/global";
// import { Divider } from "antd";
import DetailTransaksiPerjadin from "./detailtrans/detailperjadin";
import { FONTSTYLE } from "../../../component/font";

const DetailTransaksiJurnal = () => {
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  // const { error, loading } = useSelector((state) => state.reducerGlobal);

  useEffect(() => {
    dispatch(setGlobalTitle("Akun / Transaksi Jurnal"));
  }, [dispatch]);

  // if (loading) {
  //   return <LoadingView />;
  // }

  // if (error !== null) {
  //   return <ErrorView onClick={() => dispatch(fetchNestedJurnal(0, 0))} />;
  // }

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          position: "sticky",
          fontFamily: FONTSTYLE.POPPINS,
        }}
      ></div>
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
        <DetailTransaksiPerjadin />
      </div>
    </div>

    // <div className="p-5">
    //   <div
    //     style={{
    //       display: "flex",
    //       justifyContent: "space-between",
    //       position: "sticky",
    //     }}
    //   >
    //     <div>
    //       <h5
    //         style={{
    //           fontWeight: "700",
    //           fontSize: 20,
    //         }}
    //       >
    //         Transaksi Jurnal
    //       </h5>
    //     </div>
    //   </div>
    //   <div className="grid grid-cols-2 gap-3">
    //     <div className="p-5 bg-white rounded-lg ">
    //       <p
    //         style={{
    //           fontWeight: "700",
    //           fontSize: 18,
    //         }}
    //       >
    //         Detail Transaksi
    //       </p>
    //       <Divider />
    //       <Descriptions column={2} >
    //         <Descriptions.Item className="font-bold"> Penyedia </Descriptions.Item>
    //         <Descriptions.Item> :  </Descriptions.Item>
    //         <Descriptions.Item className="font-bold"> Nama Permintaan </Descriptions.Item>
    //         <Descriptions.Item>:
    //         </Descriptions.Item>
    //         <Descriptions.Item className="font-bold"> Jenis Belanja </Descriptions.Item>
    //         <Descriptions.Item> :  </Descriptions.Item>
    //         <Descriptions.Item className="font-bold"> Pembayaran </Descriptions.Item>
    //         <Descriptions.Item> : Langsung (LS) </Descriptions.Item>
    //         <Descriptions.Item className="font-bold"> Harga Total </Descriptions.Item>
    //         <Descriptions.Item >: 200000000
    //         </Descriptions.Item>
    //       </Descriptions>
    //     </div>
    //     <div className="text-center">
    //       <img alt="Gambar Transaksi" className="object-fill w-96 object-center" src={ImageTransaksi} width={450}/>
    //     </div>
    //   </div>
    // </div>
  );
};

export default DetailTransaksiJurnal;
