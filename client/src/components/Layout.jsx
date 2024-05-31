import React from 'react';
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

function Layout({user}) {
  return (
    <div>
      <NavBar user={user} />
      <Outlet />
    </div>
  )
}

export default Layout
