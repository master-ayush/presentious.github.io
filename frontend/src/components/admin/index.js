import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";
import { AccountCircle, Dashboard } from "@mui/icons-material";

const Admin = () => {
  const sidebarOptions = [
    {
      name: "Manage Profile",
      icon: <AccountCircle />,
      link: "/admin/profile",
    },
    // {
    //   name: "Dashboard",
    //   icon: <Dashboard />,
    //   link: "/admin/dashboard",
    // },
    {
      name: "Add New Slide",
      icon: <Dashboard />,
      link: "/admin/addslide",
    },
    {
      name: "Manage Slides",
      icon: <Dashboard />,
      link: "/admin/manageslide",
    },
  ];

  return (
    <div>
      <Sidebar sidebarOptions={sidebarOptions} title="Admin Dashboard">
        <Outlet />
      </Sidebar>
    </div>
  );
};

export default Admin;
