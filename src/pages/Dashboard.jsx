import React from "react";
import Welcome from "../components/Dashboard/Welcome";
import UserData from "../components/Dashboard/UserData";
import SidebarDrawer from "../components/GeneralComponents/SidebarDrawer";


const Dashboard = () => {
  return (
    <>
    <SidebarDrawer/>
      <Welcome />
      <UserData />
    </>
  );
};

export default Dashboard;
