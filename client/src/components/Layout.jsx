import React from 'react';
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

function Layout({user, setUser}) {
  return (
    <div>
      <NavBar user={user} setUser={setUser}/>
      <Outlet />
    </div>
  )
}

export default Layout
