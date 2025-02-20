import React from "react";
import { Link, useLocation } from "react-router-dom";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import Typography from "@mui/material/Typography";

const SidebarItems = ({ to, icon: Icon }) => {
  const formatPathToTitle = (path) => {
    const firstSegment = path.split("/")[1];
    if (!firstSegment) return "";
    return firstSegment
    
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  };
  
  const location = useLocation();
    const label = formatPathToTitle(to);
    const currentItem=formatPathToTitle(location.pathname)

    // console.log(label ,"label");
    // console.log(currentItem,"current");
    



  const isSelected = label===currentItem;

  
  return (
    <Link to={to} >
      <ListItem
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginY: "4px",
          borderRadius: (theme) => theme.shape.borderRadius,
          backgroundColor: isSelected ? "primary.main" : "",
          color: isSelected ? "text.light" : "text.primary",
          "&:hover": {
            bgcolor: "primary.main",
            color: "text.light",
            transform: "scaleX(1.05)",
            boxShadow: 3,
          },
        }}
        disablePadding
      >
        <ListItemButton>
          <div className="drawer-icons">
            <Icon sx={{ color: isSelected ? "primary.main" : "primary.dark" }} />
          </div>
          <Typography variant="body1" color="inherit">
            {label.charAt(0).toUpperCase() + label.slice(1)}
          </Typography>
        </ListItemButton>
      </ListItem>
    </Link>
  );
};

export default SidebarItems;
