import { Fragment, useState } from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "../components/Sidebar/Index";
import Navbar from "../components/Navbar/Index";

const AppLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggoleSidebarMenu = () => {
    console.log("toggle");
    setSidebarOpen(!sidebarOpen);
  };
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar sidebarOpen={sidebarOpen} />
      <div className="flex flex-col flex-1 w-full">
        <Navbar toggoleSidebarMenu={toggoleSidebarMenu} />
        <Fragment>{<Outlet />}</Fragment>
      </div>
    </div>
  );
};

export default AppLayout;
