import * as React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link, useNavigate } from "react-router-dom";
import { Avatar } from "@mui/material";
// import AccountMenuItemsData from "./config";
// import AccountMenuItems from "./AccountMenuItems";
import { useLocation } from "react-router-dom";
// import LoginIcon from "@mui/icons-material/Login";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
// import AccessibilityIcon from "@mui/icons-material/Accessibility";
import KeyIcon from "@mui/icons-material/Key";
import LogoutIcon from "@mui/icons-material/Logout";
import ChangePassword from "../../../components/Profile/ChangePassword";
import GenericModal from "../../../components/GeneralComponents/GenericModal";

import SidebarDrawer from "../../../components/GeneralComponents/SidebarDrawer";
import Profile from "../../../components/Profile/Profile";

export default function AccountMenu() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const location = useLocation();
  const formatPathToTitle = (path) => {
    const firstSegment = path.split("/")[1];
    if (!firstSegment) return "";
    return firstSegment
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const label = formatPathToTitle(location.pathname);
  const handleLogout = () => {
    setAnchorEl(null);
    localStorage.removeItem("userData");
    // 🔹 Redirect to login or signup page
    navigate("/signup");
  };

  // for POP-UP Model

  const [openModal, setOpenModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [modalTitle, setModalTitle] = useState("");
  const openChangePassword = () => {
    setAnchorEl(null);
    setModalTitle("Change Password");
    setModalContent(<ChangePassword />);
    setOpenModal(true);
  };
  const handleModalClose = () => {
    setOpenModal(false);
  };

  // For Drawer

  const [openDrawer, setOpenDrawer] = useState(false);
  const [currentComponent, setCurrentComponent] = useState(null);

  const handleOpenDrawer = (component) => {
    setAnchorEl(null);

    setCurrentComponent(component);
    setOpenDrawer(true);
  };
  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        {/* < MoreVertIcon  /> */}
        <Avatar sx={{ backgroundColor: "primary.main", marginLeft: "auto" }}>
          A
        </Avatar>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
          sx: {
            // padding: "10px",
          },
        }}
      >
        {/* {AccountMenuItemsData.map((item, index) => (
          <MenuItem
            key={index}
            // to={item.to}
            onClick={() => navigate(item.to)}
            sx={{
              display: "flex",
              justifyContent: "start",
              minHeight: "32px",
            }}
          >
            <item.icon sx={{ color: item.color }} />
            <p className="text-center flex-center ms-2 mb-0 text-12">
              {" "}
              {formatPathToTitle(item.to)}
            </p>
          </MenuItem>
        ))} */}

        <MenuItem
          onClick={() => handleOpenDrawer(<Profile />)}
          sx={{
            display: "flex",
            justifyContent: "start",
            // padding:"0px",
            width: "170px",
            mt: "10px",
            minHeight: "32px",
          }}
        >
          <AccountBoxIcon
            sx={{
              color: "#e5719d",
            }}
          />
          <p className="text-center flex-center ms-2 mb-0 text-12">
            User Profile
          </p>
        </MenuItem>
        <MenuItem
          onClick={openChangePassword}
          sx={{
            display: "flex",
            justifyContent: "start",
            width: "170px",
            mt: "10px",
            minHeight: "32px",
          }}
        >
          <KeyIcon
            sx={{
              color: "#76D297",
            }}
          />
          <p className="text-center flex-center ms-2 mb-0 text-12">
            Change Passowrd
          </p>
        </MenuItem>

        <MenuItem
          onClick={handleLogout}
          sx={{
            display: "flex",
            justifyContent: "start",
            width: "170px",
            mt: "10px",
            minHeight: "32px",
          }}
        >
          <LogoutIcon
            sx={{
              color: "#256699",
            }}
          />
          <p className="text-center flex-center ms-2 mb-0 text-12">Logout</p>
        </MenuItem>
      </Menu>
      <GenericModal
        open={openModal}
        onClose={handleModalClose}
        title={modalTitle}
      >
        {modalContent}
      </GenericModal>

      <SidebarDrawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        {currentComponent}
      </SidebarDrawer>
    </div>
  );
}
