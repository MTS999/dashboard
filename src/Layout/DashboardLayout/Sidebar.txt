import React from "react";
import { useState } from "react";

import List from "@mui/material/List";
import DashboardIcon from "@mui/icons-material/Dashboard";
import HailIcon from "@mui/icons-material/Hail";
import TimeToLeaveIcon from "@mui/icons-material/TimeToLeave";
import { TextField } from "@mui/material";
import { metaLogixLogo } from "../../assets";
import SidebarItems from "./SidebarItems";

const SideBar = () => {
  const [selectedItem, setSelectedItem] = useState("dashboard");
  const handleListItemClick = (item) => {
    setSelectedItem(item);
  };
  // const getIconColor = (item) => {
  //   return selectedItem === item ? "primary.main" : "primary.dark";
  // };

  return (
    <>
      <div>
        <div className="meta-logo">
          <img className="sidebar-logo" src={metaLogixLogo} alt="logo" />
        </div>
        {/* <div className="container-textfield">
          <TextField
            margin="4px"
            id="outlined-basic"
            label="Search.."
            variant="outlined"
            size="small"
          />
        </div> */}
        <List
          sx={{
            padding: 2,
          }}
        >
          <SidebarItems
            to="/dashboard"
            icon={DashboardIcon}
            label="Dashboard"
            selectedItem={selectedItem}
            handleListItemClick={handleListItemClick}
          />
          <SidebarItems
            to="/my-attendence"
            icon={TimeToLeaveIcon}
            label="Attendence"
            selectedItem={selectedItem}
            handleListItemClick={handleListItemClick}
          />
          <SidebarItems
            to="/leaves"
            icon={HailIcon}
            label="Leaves"
            selectedItem={selectedItem}
            handleListItemClick={handleListItemClick}
          />
        </List>
      </div>
    </>
  );
};

export default SideBar;
