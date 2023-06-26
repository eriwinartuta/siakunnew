import React from "react";
import { Suspense } from "react";
import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const COALazy = lazy(() => import("../../pages/akun/chartofaccount/index"));

const RouteChartOfAccount = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<div> Mohon Menunggu ... </div>}>
            <COALazy />
          </Suspense>
        }
      />
    </Routes>
  );
};

export default RouteChartOfAccount;
