import React, { Suspense } from "react";
import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const PiutangLazy = lazy(() => import("../../pages/kartu/piutang/index"));

const RoutePiutang = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<div> Mohon Menunggu ... </div>}> 
          <PiutangLazy />
          </Suspense>
        }
      />
    </Routes>
  );
};

export default RoutePiutang;
