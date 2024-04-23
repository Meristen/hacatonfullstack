import React from "react";
import Navbar from "../widgets/navbar/Navbar";
import { Outlet } from "react-router-dom";
import Sliders from "../widgets/slider/Sliders";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
