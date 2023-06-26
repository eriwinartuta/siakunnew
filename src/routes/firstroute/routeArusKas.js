import React from "react";
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const ArusKasLazy = lazy(() => import("../../pages/laporan/aruskas/index"));

const RouteArusKas = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<div>Mohonn Menunggu..</div>}>
            <ArusKasLazy />
          </Suspense>
        }
      />
    </Routes>
  );
};

export default RouteArusKas;
