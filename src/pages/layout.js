import React, { useEffect, useState, lazy, Suspense } from "react";
import { SplashScreen } from "../component";
import { Navigate, Route, Routes, useSearchParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setMenuStorage, setUsers } from "../utils";
import { setMenu, setUserInLogin } from "../store/global/action";
import { setError } from "../store/global/action";
import { notification } from "antd";
import { setDataAuth } from "../utils/storage";
import { axiosPost2 } from "../config/axios";
import { Modal, Button, Result } from "antd";

const MenuLoad = lazy(() => import("../component/menu/menus"));

const MasterJurnalNew = lazy(() =>
  import("../routes/firstroute/routeMasterJurnal")
);
const TransaksiJurnalNew = lazy(() =>
  import("../routes/firstroute/routeTransaksiJurnal")
);
const BASNew = lazy(() => import("../routes/firstroute/routeBaganAkunStandar"));
const COANew = lazy(() => import("../routes/firstroute/routeCOA"));
const RegistrasiBankNew = lazy(() =>
  import("../routes/firstroute/routeRegistrasiBank")
);
const RekonsiliasiNew = lazy(() =>
  import("../routes/firstroute/routeRekonsilasi")
);
const PiutangNew = lazy(() => import("../routes/firstroute/routePiutang"));
const HutangNew = lazy(() => import("../routes/firstroute/routeHutang"));
const PosisiKeuanganNew = lazy(() =>
  import("../routes/firstroute/routePosisiKeuangan")
);
const PenghasilanKomprehensifNew = lazy(() =>
  import("../routes/firstroute/routePenghasilan")
);
const PerubahanAsetNew = lazy(() =>
  import("../routes/firstroute/routePerubahanAset")
);
const ArusKasNew = lazy(() => import("../routes/firstroute/routeArusKas"));
const DataSBMNew = lazy(() => import("../routes/firstroute/routeDataSBM"));
const BerandaNew = lazy(() => import("../../src/pages/beranda/index"));

const BukuBantuBelanja = lazy(() =>
  import("../routes/firstroute/routeBukuBantuBelanja")
);

const PembukuanLazy = lazy(() => import("../../src/pages/pembukuan/bukubantubelanja")   )

const RenderMenu = ({ content }) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MenuLoad content={content} />
    </Suspense>
  );
};

const Layout = () => {
  const dispatch = useDispatch();
  // const { id_user, kode_group } = useParams();
  const [searchParams] = useSearchParams();
  const [splashScreen, setSplashScreen] = useState(true);
  const { menu } = useSelector((state) => state.reducerGlobal);
  const [closeWindow, setCloseWindow] = useState(false);

  const menus = JSON.parse(localStorage.getItem("menu"));
  const usersData = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    const currentParams = Object.fromEntries([...searchParams]);
    const data = {
      id_user: parseInt(currentParams?.id_user),
      kode_group: currentParams?.kode_group,
    };

    if (data.id_user !== isNaN(true) && data.kode_group !== undefined) {
      // console.log("jalankan fetch");
      fetchMenu(data);
      dispatch(setDataAuth(data));
    } else {
      // console.log("jalankan get");
      getAuth();
    }
    //eslint-disable-next-line
  }, []);

  const getAuth = () => {
    dispatch(setMenu(menus));
    dispatch(setUserInLogin(usersData));
    setSplashScreen(false);
  };

  const fetchMenu = (val) => {
    const data = {
      url: "https://asset.ut.ac.id/siakunman/menucoba",
      data: val,
    };
    axiosPost2(data)
      .then((a) => {
        console.log("aaa", a);
        if (a?.data?.status === "Success") {
          console.log("bbb", a.data.data.user);
          const user = a.data.data.user;
          const token_lama = a.data.data.token_lama;
          const token_baru = a.data.data.token_baru;
          const c = a.data.data.data.menu;
          //console.log("token_lama", token_lama);
          dispatch(setMenuStorage(c));
          fetch("https://asset.ut.ac.id/hrd/pegawai/email/" + user.email)
            .then((data) => data.json())
            .then((res) => {
              const users = {
                id: user.id,
                group: user.nama_group,
                data: res.data,
              };

              if (res.status === "Success") {
                dispatch(
                  setUsers({
                    user: users,
                    token_lama: token_lama,
                    token_baru: token_baru,
                  })
                );

                setTimeout(() => {
                  setSplashScreen(false);
                }, 3000);
              } else {
                setTimeout(() => {
                  setSplashScreen(false);
                }, 3000);
              }
            })
            .catch((err) => {
              dispatch(setError(err));
              notification.error({
                description:
                  "Gagal Memuat user profile! Coba Beberapa Saat Lagi",
                key: 1,
              });
            });
        }
      })
      .catch((err) => {
        dispatch(setError(err));
        notification.error({
          description: "Terjadi Masalah Jaringan Coba Beberapa Saat Lagi",
          key: 2,
        });
        setTimeout(() => {
          setSplashScreen(false);
        }, 3000);
      });
  };

  //const { menu } = useSelector((state)=> state.reducerGlobal);
  const akun = menu?.find((a) => a.nama_menu1 === "Akun")?.menu2;
  const perbankan = menu?.find((a) => a.nama_menu1 === "Perbankan")?.menu2;
  const kartu = menu?.find((a) => a.nama_menu1 === "Kartu")?.menu2;
  const laporan = menu?.find((a) => a.nama_menu1 === "Laporan")?.menu2;
  const utilitas = menu?.find((a) => a.nama_menu1 === "Utilitas")?.menu2;
  const pembukuan = menu?.find((a) => a.nama_menu1 === "Pembukuan")?.menu2;


  const CekLoginBrowser = () => {
    return (
      <Modal visible={closeWindow} footer={false} closable={false}>
        <Result
          status="warning"
          title="Anda telah login dengan akun berbeda di browser ini silahkan login kembali!"
          subTitle={`Anda telah login akun dengan email ${usersData?.data.email} `}
          extra={[
            <Button
              onClick={() => {
                setCloseWindow(false);
                window.close();
              }}
            >
              Keluar Aplikasi
            </Button>,
          ]}
        />
      </Modal>
    );
  };

  if (splashScreen) {
    return (
      <>
        <Suspense fallback={<div>Loading...</div>}>
          <SplashScreen splashScreen={splashScreen} />
        </Suspense>
      </>
    );
  }

  return (
    <div>
      <CekLoginBrowser />
      <RenderMenu
        content={
          <Suspense fallback={<SplashScreen />}>
            <Routes>
              <Route path="*" element={<p>Halaman Tidak Di temukan</p>} />
              <Route
                path="/"
                element={<Navigate to={"/beranda"} replace={false} />}
              />
              <Route
                path="/beranda/*"
                element={
                  <Suspense fallback={<div> Mohon Menunggu ... </div>}>
                    <BerandaNew />
                  </Suspense>
                }
              />
              <Route
                path="/pembukuan/*"
                element={
                  menu?.some((a) => a.nama_menu1 === "Pembukuan") === true ? (
                    <Suspense fallback={<div> Mohon Menunggu ... </div>}>
                      <BukuBantuBelanja />
                    </Suspense>
                  ) : (
                    <p>Halaman Tidak Di Temukan Brosist!!</p>
                  )
                }
              />
              <Route
                path="/masterjurnal/*"
                element={
                  akun?.some((a) => a.nama_menu2 === "Master Jurnal") ===
                  true ? (
                    <Suspense fallback={<div> Mohon Menunggu ... </div>}>
                      <MasterJurnalNew />
                    </Suspense>
                  ) : (
                    <p>Halaman Tidak Di temukan</p>
                  )
                }
              />
              <Route
                path="/transaksijurnal/*"
                element={
                  akun?.some((a) => a.nama_menu2 === "Transaksi Jurnal") ===
                  true ? (
                    <Suspense fallback={<div> Mohon Menunggu ... </div>}>
                      <TransaksiJurnalNew />
                    </Suspense>
                  ) : (
                    <p>Halaman Tidak Di temukan</p>
                  )
                }
              />
              <Route
                path="/saldoawal/*"
                element={
                  akun?.some((a) => a.nama_menu2 === "Saldo Awal") ===
                  true ? (
                    <Suspense fallback={<div> Mohon Menunggu ... </div>}>
                      <BASNew />
                    </Suspense>
                  ) : (
                    <p>Halaman Tidak Di temukan</p>
                  )
                }
              />
              <Route
                path="/coa/*"
                element={
                  akun?.some((a) => a.nama_menu2 === "COA") === true ? (
                    <Suspense fallback={<div> Mohon Menunggu ... </div>}>
                      <COANew />
                    </Suspense>
                  ) : (
                    <p>Halaman Tidak Di temukan</p>
                  )
                }
              />
              <Route
                path="/registrasibank/*"
                element={
                  perbankan?.some((a) => a.nama_menu2 === "Registrasi Bank") ===
                  true ? (
                    <Suspense fallback={<div> Mohon Menunggu ... </div>}>
                      <RegistrasiBankNew />
                    </Suspense>
                  ) : (
                    <p>Halaman Tidak Di temukan</p>
                  )
                }
              />
              <Route
                path="/rekonsiliasi/*"
                element={
                  perbankan?.some((a) => a.nama_menu2 === "Rekonsiliasi") ===
                  true ? (
                    <Suspense fallback={<div> Mohon Menunggu ... </div>}>
                      <RekonsiliasiNew />
                    </Suspense>
                  ) : (
                    <p>Halaman Tidak Di temukan</p>
                  )
                }
              />
              <Route
                path="/piutang/*"
                element={
                  kartu?.some((a) => a.nama_menu2 === "Piutang") === true ? (
                    <Suspense fallback={<div> Mohon Menunggu ... </div>}>
                      <PiutangNew />
                    </Suspense>
                  ) : (
                    <p>Halaman Tidak Di temukan</p>
                  )
                }
              />
              <Route
                path="/hutang/*"
                element={
                  kartu?.some((a) => a.nama_menu2 === "Hutang") === true ? (
                    <Suspense fallback={<div> Mohon Menunggu ... </div>}>
                      <HutangNew />
                    </Suspense>
                  ) : (
                    <p>Halaman Tidak Di temukan</p>
                  )
                }
              />
              <Route
                path="/posisikeuangan/*"
                element={
                  laporan?.some((a) => a.nama_menu2 === "Posisi Keuangan") ===
                  true ? (
                    <Suspense fallback={<div> Mohon Menunggu ... </div>}>
                      <PosisiKeuanganNew />
                    </Suspense>
                  ) : (
                    <p>Halaman Tidak Di temukan</p>
                  )
                }
              />
              <Route
                path="/penghasilan/*"
                element={
                  laporan?.some(
                    (a) => a.nama_menu2 === "Penghasilan Komprehensif"
                  ) === true ? (
                    <Suspense fallback={<div> Mohon Menunggu ... </div>}>
                      <PenghasilanKomprehensifNew />
                    </Suspense>
                  ) : (
                    <p>Halaman Tidak Di temukan</p>
                  )
                }
              />
              <Route
                path="/perubahanaset/*"
                element={
                  laporan?.some((a) => a.nama_menu2 === "Perubahan Aset") ===
                  true ? (
                    <Suspense fallback={<div> Mohon Menunggu ... </div>}>
                      <PerubahanAsetNew />
                    </Suspense>
                  ) : (
                    <p>Halaman Tidak Di temukan</p>
                  )
                }
              />
              <Route
                path="/aruskas/*"
                element={
                  laporan?.some((a) => a.nama_menu2 === "Arus Kas") === true ? (
                    <Suspense fallback={<div> Mohon Menunggu ... </div>}>
                      <ArusKasNew />
                    </Suspense>
                  ) : (
                    <p>Halaman Tidak Di temukan</p>
                  )
                }
              />
              <Route
                path="/datasbm/*"
                element={
                  utilitas?.some((a) => a.nama_menu2 === "Data SBM") ===
                  true ? (
                    <Suspense fallback={<div> Mohon Menunggu ... </div>}>
                      <DataSBMNew />
                    </Suspense>
                  ) : (
                    <p>Halaman Tidak Di temukan</p>
                  )
                }
              />
              <Route
                path="/belanja/*"
                element={
                  pembukuan?.some((a) => a.nama_menu2 === "Buku Bantu Belanja") ===
                  true ? (
                    <Suspense fallback={<div> Mohon Menunggu ... </div>}>
                      <BukuBantuBelanja />
                    </Suspense>
                  ) : (
                    <p>Halaman Tidak Di temukan</p>
                  )
                }
              />
            </Routes>
          </Suspense>
        }
      />
    </div>
  );
};
export default Layout;
