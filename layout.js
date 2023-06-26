import React, { useEffect, useState } from "react";
import { Menus, SplashScreen } from "../component";
import { Route, Routes, useParams } from "react-router-dom";
import {
   RouteMasterJurnal,
   RouteTransaksiJurnal,
   RouteBaganAkunStandar,
   RouteRegistrasiBank,
   RouteRekonsilasi,
   RouteHutang,
   RoutePiutang,
   RoutePembukuan,
   RouteArusKas,
   RoutePenghasilan,
   RoutePerubahanAset,
   RoutePosisiKeuangan,
   RouteDataSBM
} from "../routes/firstroute";
import { useSelector, useDispatch } from "react-redux";
import { setMenuStorage, setUsers } from "../utils";
import { fetchMenu } from "../store/global/action";

const Layout = () => {
   const dispatch = useDispatch();
   const { id_user, kode_group } = useParams();
   const [splashScreen, setSplashScreen] = useState(false);

   const { menu, user } = useSelector((state)=> state.reducerGlobal);

   
  const data = {
    id_user: id_user,
    kode_group: kode_group,
  };

  console.log("dataa", data);

  useEffect(() => {
    setSplashScreen(true);
    dispatch(fetchMenu(data));
  }, []);

  if (user !== null) {
    fetch("https://dev-sippp.ut.ac.id:4800/pegawai/email/" + user.email)
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
      });

    setTimeout(() => {
      setSplashScreen(false);
    }, 3000);
  }

  //  useEffect(()=> {
  //   setSplashScreen(true);
  //     const data = {
  //        id_user: parseInt(id_user),
  //        kode_group: kode_group
  //     };
  //     fetch("https://dev-sippp.ut.ac.id:6999/sippp/menu", {
  //        method: "POST",
  //        headers: {
  //           "Content-Type" : "application/json",
  //        },
  //        body: JSON.stringify(data),
  //     })
  //     .then((res)=> res.json())
  //     .then((a)=> {
  //        //console.log("test", a);
  //        const user = a.data.user;
  //        const token = a.data.token;
  //        const c = a.data.data.menu;
  //        dispatch(setMenuStorage(c));
  //        fetch("https://dev-sippp.ut.ac.id:4800/pegawai/email/" + user.email)
  //        .then((data)=> data.json())
  //        .then((res)=> {
  //           const users = {
  //              id: user.id,
  //              group: user.nama_group,
  //              data: res.data,
  //           };
  //           // console.log("buat users", users)
  //           if (res.status === "Success") {
  //              dispatch(
  //                 setUsers({
  //                    user: users,
  //                    token: token,
  //                 })
  //              );
  //              setTimeout(()=> {
  //               setSplashScreen(false);
  //              }, 3000);
  //           } else {
  //              setTimeout(()=> {
  //               setSplashScreen(false);
  //              }, 3000)
  //           }
  //        })
  //        .catch((err)=> {
  //           console.log("error", err)
  //        });
  //     })
  //     .catch((err)=> {
  //        alert("Terjadi Masalah Jaringan coba beberapa saat lagi")
  //        console.log("jaringan", err);
  //        setTimeout(()=> {
  //         setSplashScreen(false);
  //        }, 3000)
  //     });
  //     // eslint-disable-next-line
  //  }, [] );
   
   //const { menu } = useSelector((state)=> state.reducerGlobal);
   const akun = menu.find((a)=> a.nama_menu1 === "Akun")?.menu2;
   const perbankan = menu.find((a)=> a.nama_menu1 === "Perbankan")?.menu2;
   const kartu = menu.find((a)=> a.nama_menu1 === "Kartu")?.menu2;
   const laporan = menu.find((a)=> a.nama_menu1 === "Laporan")?.menu2;
   const utilitas =  menu.find((a)=> a.nama_menu1 === "Utilitas")?.menu2;
   
  //  if (splashScreen) {
  //   return <SplashScreen />;
  // }

  return (
    <div>
      <Menus
      content={
        <Routes>
          <Route
            path="/"
            element={
              <p>Halaman Tidak Di temukan</p>
            }
          />
          <Route
            path="/masterjurnal/*"
            element={
              akun?.some((a) => a.nama_menu2 === "Master Jurnal") === true ? (
                <RouteMasterJurnal />
              ) : (
                <p>Halaman Tidak Di temukan</p>
              )
            }
          />
          <Route
            path="/transaksijurnal/*"
            element={
              akun?.some((a) => a.nama_menu2 === "Transaksi Jurnal") === true ? (
                <RouteTransaksiJurnal />
              ) : (
                <p>Halaman Tidak Di temukan</p>
              )
            }
          />
          <Route
            path="/bas/*"
            element={
              akun?.some((a) => a.nama_menu2 === "Bagan Akun Standar") === true ? (
                <RouteBaganAkunStandar />
              ) : (
                <p>Halaman Tidak Di temukan</p>
              )
            }
          />
          <Route
            path="/registrasibank/*"
            element={
              perbankan?.some((a) => a.nama_menu2 === "Registrasi Bank") === true ? (
                <RouteRegistrasiBank />
              ) : (
                <p>Halaman Tidak Di temukan</p>
              )
            }
          />
          <Route
            path="/rekonsiliasi/*"
            element={
              perbankan?.some((a) => a.nama_menu2 === "Rekonsiliasi") === true ? (
                <RouteRekonsilasi />
              ) : (
                <p>Halaman Tidak Di temukan</p>
              )
            }
          />
          <Route
            path="/piutang/*"
            element={
              kartu?.some((a) => a.nama_menu2 === "Piutang") === true ? (
                <RoutePiutang />
              ) : (
                <p>Halaman Tidak Di temukan</p>
              )
            }
          />
         <Route
            path="/hutang/*"
            element={
              kartu?.some((a) => a.nama_menu2 === "Hutang") === true ? (
                <RouteHutang />
              ) : (
                <p>Halaman Tidak Di temukan</p>
              )
            }
          />
          <Route
            path="/posisikeuangan/*"
            element={
              laporan?.some((a) => a.nama_menu2 === "Posisi Keuangan") === true ? (
                <RoutePosisiKeuangan />
              ) : (
                <p>Halaman Tidak Di temukan</p>
              )
            }
          />
          <Route
            path="/penghasilan/*"
            element={
              laporan?.some((a) => a.nama_menu2 === "Penghasilan Komprehensif") === true ? (
                <RoutePenghasilan />
              ) : (
                <p>Halaman Tidak Di temukan</p>
              )
            }
          />
          <Route
            path="/perubahanaset/*"
            element={
              laporan?.some((a) => a.nama_menu2 === "Perubahan Aset") === true ? (
                <RoutePerubahanAset />
              ) : (
                <p>Halaman Tidak Di temukan</p>
              )
            }
          />
          <Route
            path="/aruskas/*"
            element={
              laporan?.some((a) => a.nama_menu2 === "Arus Kas") === true ? (
                <RouteArusKas />
              ) : (
                <p>Halaman Tidak Di temukan</p>
              )
            }
          />
          <Route
            path="/datasbm/*"
            element={
              utilitas?.some((a) => a.nama_menu2 === "Data SBM") === true ? (
                <RouteDataSBM />
              ) : (
                <p>Halaman Tidak Di temukan</p>
              )
            }
          />
        </Routes>
      }
    />
    {/* <Menus
      content = {
          <Routes>
              <Route path="*" element={<RouteBaganAkunStandar />} />
              <Route path="/transaksijurnal/*" element={ <RouteTransaksiJurnal />} />
              <Route path="/bas/*" element={ <RouteBaganAkunStandar />} />
              <Route path="/masterjurnal/*" element={ <RouteMasterJurnal />} />
              <Route path="/registrasibank/*" element={ <RouteRegistrasiBank />} />
              <Route path="/rekonsilasi/*" element={ <RouteRekonsilasi /> } />
              <Route path="/piutang/*" element={ <RoutePiutang /> } />
              <Route path="/hutang/*" element={ <RouteHutang /> } />
              <Route path="/datasbm/*" element={ <RouteDataSBM /> } />
              <Route path="/posisikeuangan/*" element={ <RoutePosisiKeuangan /> } />
              <Route path="/penghasilan/*" element={ <RoutePenghasilan /> } />
              <Route path="/perubahanaset/*" element={ <RoutePerubahanAset /> } />
              <Route path="/aruskas/*" element={ <RouteArusKas /> } />
          </Routes>
      }
    /> */}
    </div>
  );
};
export default Layout;
