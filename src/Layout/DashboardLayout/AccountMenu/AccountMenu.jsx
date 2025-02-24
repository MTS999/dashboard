import * as React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";
import { Avatar } from "@mui/material";
import AccountMenuItemsData from "./config";
import ChangePassword from "../../../components/Profile/ChangePassword";
import GenericModal from "../../../components/GeneralComponents/GenericModal";
import SidebarDrawer from "../../../components/GeneralComponents/SidebarDrawer";
import ChangeProfile from "../../../components/Profile/ChangeProfile";


export default function AccountMenu() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  // model data
  const [openModal, setOpenModal] = useState(false);
  const [modelContent, setModelContent] = useState(null);
  const [modalTitle, setModalTitle] = useState("");

  // drawer data

  const [openDrawer, setOpenDrawer] = useState(false);
  const [drawerType, setDrawerType] = useState("");

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  // const location = useLocation();
  const formatPathToTitle = (path) => {
    return path
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const handleMenuClick = (label) => {
    if (label === "logout") {
      handleLogout();
    } else if (label === "change-password") {
      openModalWithType("Change Password", "change-password");
    } else if (label === "change-profile") {
      openDrawerWithType("change-profile");
    }
  };

  const handleLogout = () => {
    setAnchorEl(null);
    localStorage.removeItem("userData");
    // 🔹 Redirect to login or signup page
    navigate("/login");
  };

  const handleModalClose = () => {
    setOpenModal(false);
  };

 

  // model functionnality

  const openModalWithType = (title, type) => {
    setAnchorEl(null);
    setModelContent(type);
    setModalTitle(title);
    setOpenModal(true);
  };
  const renderModalContent = () => {
    switch (modelContent) {
      case "change-password":
        return <ChangePassword />;

      default:
        return null;
    }
  };

  // Drawer functionality

  // Open drawer dynamically based on type
  const openDrawerWithType = (type) => {
    setAnchorEl(null);
    setDrawerType(type);
    setOpenDrawer(true);
  };
  const renderDrawerContent = () => {
    console.log("mtssssss");
    
    switch (drawerType) {
      case "change-profile":
        return <ChangeProfile />;

      default:
        return null;
    }
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
        <Avatar className="menu-avatar ">A</Avatar>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {AccountMenuItemsData.map((item, index) => (
          <MenuItem key={index} onClick={() => handleMenuClick(item.to)}>
            <item.icon sx={{ color: item.color }} />
            <p className="text-center flex-center ms-2 mb-0 text-12">
              {formatPathToTitle(item.to)}
            </p>
          </MenuItem>
        ))}
      </Menu>
      <GenericModal
        open={openModal}
        onClose={handleModalClose}
        title={modalTitle}
      >
        {renderModalContent()}
      </GenericModal>

      <SidebarDrawer
        open={Boolean(openDrawer)}
        onClose={() => setOpenDrawer(false)}
      >
        {renderDrawerContent()}
      </SidebarDrawer>
    </div>
  );
}
