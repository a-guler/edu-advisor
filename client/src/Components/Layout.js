import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <main class="h-svh">
      <Header />
      <Outlet class="bg-black h-full"/>
    </main>
  );
}

export default Layout;
