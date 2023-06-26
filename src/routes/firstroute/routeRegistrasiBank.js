import React from "react";
import { Suspense } from "react";
import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const RegistrasiBankLazy = lazy(() =>
  import("../../pages/perbankan/registrasibank/index")
);
const TambahBankLazy = lazy(() =>
  import("../../pages/perbankan/registrasibank/tambahbank")
);
const DetailPerbankanLazy = lazy(() =>
  import("../../pages/perbankan/registrasibank/detailbank")
);

const RouteRegistrasiBank = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<div> Mohon Menunggu ... </div>}>
            <RegistrasiBankLazy />
          </Suspense>
        }
      />
      <Route
        path="tambahbank/"
        element={
          <Suspense fallback={<div> Mohon Menunggu ... </div>}>
            <TambahBankLazy />
          </Suspense>
        }
      />
      <Route
        path="detailbank/:nomor_rekening"
        element={
          <Suspense fallback={<div> Mohon Menunggu ... </div>}>
            <DetailPerbankanLazy />
          </Suspense>
        }
      />
    </Routes>
  );
};

export default RouteRegistrasiBank;
