import React from "react";
import { Suspense } from "react";
import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const BerandaLazy = lazy(() => import("../../pages/beranda/index"));

const RouteBeranda = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<div> Mohon Menunggu ... </div>}>
            <BerandaLazy />
          </Suspense>
        }
      />
    </Routes>
  );
};

export default RouteBeranda;
