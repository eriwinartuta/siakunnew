import React from "react";
import { Suspense } from "react";
import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const BantuBelanjaLazy = lazy(() =>
  import("../../pages/pembukuan/bukubantubelanja/indexRole")
);

const BantuBelanja = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<div> Mohon Menunggu ... </div>}>
            <BantuBelanjaLazy />
          </Suspense>
        }
      />
    </Routes>
  );
};

export default BantuBelanja;
