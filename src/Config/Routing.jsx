// import React from "react";
import { Route, Routes } from "react-router-dom";
import { PublicRoutes } from "../Routes/PublicRoutes";
import PublicLayout from "../Layout/PublicLayout";

const Routing = () => {
  return (
    <>
      <Routes>
        <Route element={<PublicLayout />}>
          {PublicRoutes.map((pr, i) => {
            return <Route key={i} path={pr.path} element={<pr.element />} />;
          })}
        </Route>
      </Routes>
    </>
  );
};

export default Routing;
