import React from "react";
import { Suspense } from "react";
import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const GlobalLazy = lazy(() => import("../../pages/layout"));

const GlobalRoute = () => {
  return (
    <Routes>
      <Route
        path="/*"
        element={
          <Suspense fallback={<div> Mohon Menunggu ... </div>}>
            <GlobalLazy />
          </Suspense>
        }
      />
    </Routes>
  );
};

export default GlobalRoute;
