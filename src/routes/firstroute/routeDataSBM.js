import React from "react";
import { Suspense } from "react";
import { lazy } from "react";
import { Route, Routes } from "react-router-dom";


const DataSBMLazy = lazy(() => import("../../pages/utilitas/sbm/index"));
const DataSatuanLazy = lazy(() => import("../../pages/utilitas/sbm/satuan"));

const RouteDataSBM = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<div> Mohon Menunggu ... </div>}>
            <DataSBMLazy />
          </Suspense>
        }
      />
      <Route
        path="satuan_kegiatan/"
        element={
          <Suspense fallback={<div> Mohon Menunggu ... </div>}>
            <DataSatuanLazy />
          </Suspense>
        }
      />
    </Routes>
  );
};

export default RouteDataSBM;
