import React from "react";
import { Suspense } from "react";
import { lazy } from "react";
import { Route, Routes } from "react-router-dom";


const PosisiKeuanganLazy = lazy(() =>
  import("../../pages/laporan/posisikeuangan/index")
);

const RoutePosisiKeuangan = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<div> Mohon Menunggu ... </div>}>
            {" "}
            <PosisiKeuanganLazy />{" "}
          </Suspense>
        }
      />
    </Routes>
  );
};

export default RoutePosisiKeuangan;
