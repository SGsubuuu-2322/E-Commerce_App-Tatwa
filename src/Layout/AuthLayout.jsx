// import React from 'react'
import AuthNav from "../Components/AuthNav";

const AuthLayout = ({ children }) => {
  return (
    <>
      <AuthNav />
      {children}
    </>
  );
};

export default AuthLayout;
