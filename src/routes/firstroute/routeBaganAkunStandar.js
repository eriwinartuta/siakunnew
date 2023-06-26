import React from "react";
import { Suspense } from "react";
import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const BASLazy = lazy(() => import("../../pages/akun/baganakunstandar/index"));

const RouteBaganAkunStandar = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<div>Mohonn Menunggu..</div>}>
            <BASLazy />
          </Suspense>
        }
      />
    </Routes>
  );
};

export default RouteBaganAkunStandar;
