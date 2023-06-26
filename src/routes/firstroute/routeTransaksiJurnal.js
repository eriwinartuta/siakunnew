import React from "react";
import { Suspense } from "react";
import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const TransaksiJurnalLazy = lazy(() =>
  import("../../pages/akun/transaksijurnal/index")
);
const PenyesuaianJurnalLazy = lazy(() =>
  import("../../pages/akun/transaksijurnal/penyesuaian")
);
const DetailJurnalLazy = lazy(() =>
  import("../../pages/akun/transaksijurnal/detailtrans/detailperjadin")
);

const RouteTransaksiJurnal = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<div> Mohon Menunggu ... </div>}>
            <TransaksiJurnalLazy />
          </Suspense>
        }
      />
      <Route
        path="penyesuaian/"
        element={
          <Suspense fallback={<div> Mohon Menunggu ... </div>}>
            <PenyesuaianJurnalLazy />
          </Suspense>
        }
      />
      <Route
        path="detailtrxjurnal/:id_surat"
        element={
          <Suspense fallback={<div> Mohon Menunggu ... </div>}>
            <DetailJurnalLazy />
          </Suspense>
        }
      />
    </Routes>
  );
};

export default RouteTransaksiJurnal;
