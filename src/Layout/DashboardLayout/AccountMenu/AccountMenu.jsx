import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link, useNavigate } from "react-router-dom";
import { Avatar } from "@mui/material";
import AccountMenuItemsData from "./config";
import AccountMenuItems from "./AccountMenuItems";
import { useLocation } from "react-router-dom";
import { IconButton } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";

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
    console.log(path);

    const firstSegment = path.split("/")[1];
    console.log(firstSegment);

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
            padding: "10px",
          },
        }}
      >
        {AccountMenuItemsData.map((item, index) => (
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
            {/* <IconButton> */}
              <item.icon sx={{ color: item.color }} />
            {/* </IconButton> */}
            <p className="text-center flex-center ms-2 mb-0 text-12">
              {" "}
              {formatPathToTitle(item.to)}
            </p>
          </MenuItem>
        ))}
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
    </div>
  );
}

