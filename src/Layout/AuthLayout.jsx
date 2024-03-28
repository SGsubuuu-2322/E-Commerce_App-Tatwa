// import React from 'react'
import AuthNav from "../Components/AuthNav";

const AuthLayout = ({ children }) => {
  return (
    <div className="h-screen overflow-hidden">
      <AuthNav />
      {children}
    </div>
  );
};

export default AuthLayout;
