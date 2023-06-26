import React from "react";
import { Suspense } from "react";
import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const RekonsiliasiLazy = lazy(() =>
  import("../../pages/perbankan/rekonsilasi/index")
);

const RouteRekonsilasi = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<div> Mohon Menunggu ... </div>}>
            <RekonsiliasiLazy />
          </Suspense>
        }
      />
    </Routes>
  );
};

export default RouteRekonsilasi;
