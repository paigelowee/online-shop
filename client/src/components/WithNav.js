import React from "react";
import { Outlet } from "react-router";
import Footer from "./Footer";
import NavBar from "./Navbar";

export default function WithNav() {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}
