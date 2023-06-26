import React from "react";
import { Suspense } from "react";
import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const HutangNew = lazy(() => import("../../pages/kartu/hutang/index"));

const RouteHutang = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<div> Mohon Menunggu ... </div>}>
            <HutangNew />
          </Suspense>
        }
      />
    </Routes>
  );
};

export default RouteHutang;
