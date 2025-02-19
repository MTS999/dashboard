import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";

import { Link } from "react-router-dom";
import Typography from '@mui/material/Typography'

const SidebarItems = ({
  to,
  icon: Icon,
  selectedItem,
  label,
  handleListItemClick,
}) => {
  const getIconColor = () => {
    return selectedItem === label.toLowerCase()
      ? "primary.main"
      : "primary.dark";
  };
  return (
    <Link to={to}>
      <ListItem
        sx={{
          display: "flex",
          justifyContent: "space-between",

          marginY: "4px",
          borderRadius: (theme) => theme.shape.borderRadius,
          backgroundColor:
            selectedItem === label.toLowerCase() ? "primary.main" : "",
          color:
            selectedItem === label.toLowerCase()
              ? "text.light"
              : "text.primary",

          "&:hover": {
            bgcolor: "primary.main",
            color: "text.light",
            transform: "scaleX(1.05)", // Scales the item by 5%
            boxShadow: 3, // Adds a subtle shadow on hover
          },
        }}
        key={label}
        onClick={() => handleListItemClick(label.toLowerCase())}
        disablePadding
      >
        <ListItemButton>
          <div className={`drawer-icons `}>
            <Icon sx={{ color: getIconColor(label) }} />
          </div>
          {/* <ListItemText primary={label} sx={{
             color:"inherit"
            
          }} /> */}
          <Typography variant="body1" color="inherit">{label}</Typography>
        </ListItemButton>
      </ListItem>
    </Link>
  );
};

export default SidebarItems;
