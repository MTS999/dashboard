import React from "react";
import { Link, useLocation } from "react-router-dom";
import { MenuItem } from "@mui/material";
const AccountMenuItems = ({ to }) => {
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
  console.log(to);
  
  return (
    <>
    {/* <Link to={to}> */}
      <MenuItem >{label}</MenuItem>
    {/* </Link> */}
    </>
  );
};

export default AccountMenuItems;
