// import React from 'react'

import { Outlet, useNavigate } from "react-router-dom";
import AuthLayout from "../Layout/AuthLayout";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Authentication = () => {
  const { loggedInUser } = useSelector((state) => state.allUsers);
  const Navigate = useNavigate();
  const [loggedIn, setloggedIn] = useState(false);
  useEffect(() => {
    // console.log(loggedInUser);
    if (loggedInUser.length > 0) {
      setloggedIn(true);
    } else {
      setloggedIn(false);
      Navigate("/login");
    }
  }, []);
  return (
    loggedIn && (
      <AuthLayout>
        <Outlet />
      </AuthLayout>
    )
  );
};

export default Authentication;
