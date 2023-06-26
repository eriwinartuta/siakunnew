import React, { lazy } from "react";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";


const PerubahanAsetLazy = lazy(() =>
  import("../../pages/laporan/perubahanaset/index")
);

const RoutePerubahanAset = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<div> Mohon Menunggu ... </div>}>
            <PerubahanAsetLazy />
          </Suspense>
        }
      />
    </Routes>
  );
};

export default RoutePerubahanAset;
