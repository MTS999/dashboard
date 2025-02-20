import React from "react";
import List from "@mui/material/List";
import { metaLogixLogo } from "../../../assets";
import SidebarItems from "./SidebarItems";
import menuItems from "./config";

// const menuItems = [
//   { to: "/dashboard", icon: DashboardIcon },
//   { to: "/my-attendence", icon: TimeToLeaveIcon },
//   { to: "/leaves", icon: HailIcon },
// ];

// menuItems=[]
const SideBar = () => {
  return (
    <div>
      <div className="meta-logo">
        <img className="sidebar-logo" src={metaLogixLogo} alt="logo" />
      </div>

      <List sx={{ padding: 2 }}>
        {menuItems.map(({ to, icon }) => (
          <SidebarItems key={to} to={to} icon={icon} />
        ))}
      </List>
    </div>
  );
};

export default SideBar;
