import React, { Suspense } from "react";
import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const PenghasilanLazy = lazy(() =>
  import("../../pages/laporan/penghasilankomprehensif/index")
);

const RoutePenghasilan = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<div> Mohon Menunggu ... </div>}>
            <PenghasilanLazy />
          </Suspense>
        }
      />
    </Routes>
  );
};

export default RoutePenghasilan;
