import React, { lazy } from "react";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const MasterJurnalNew = lazy(() =>
  import("../../pages/akun/masterjurnal/index")
);

const routeMasterJurnal = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<div> Mohon Menunggu ... </div>}>
            <MasterJurnalNew />
          </Suspense>
        }
      />
    </Routes>
  );
};

export default routeMasterJurnal;
