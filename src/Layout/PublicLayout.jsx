// import React from 'react'

import { Outlet } from "react-router-dom";
import PublicNav from "../Components/PublicNav";

const PublicLayout = () => {
  return (
    <>
      <PublicNav />
      <Outlet />
    </>
  );
};

export default PublicLayout;
