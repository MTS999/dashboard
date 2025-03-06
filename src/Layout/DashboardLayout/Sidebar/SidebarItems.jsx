import React from "react";
import { Link, useLocation } from "react-router-dom";
import { addRipple } from "../../../utils/ripple";

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

  // const currentItem = formatPathToTitle(location.pathname);
  // const isSelected = label===currentItem;
  const isSelected = to.split("/")[1] === location.pathname.split("/")[1];

  return (
    <Link to={to} >
      <div className="col px-2 ripple-effect" onClick={addRipple}>
        <div className={`flex-center justify-content-start px-3  rounded-4 py-2 sidebar-items ${isSelected?"background-primary":""}`}>
          <div className={`drawer-icons ${isSelected?"text--primary":"text--secondary"}`}>
            <Icon
              
            />
          </div>
          <div className="flex-center">
            <p className="mb-0 sidebar-items-p">
              {label.charAt(0).toUpperCase() + label.slice(1)}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SidebarItems;

// import React from "react";
// import { Link, useLocation } from "react-router-dom";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import Typography from "@mui/material/Typography";

// const SidebarItems = ({ to, icon: Icon }) => {
//   const formatPathToTitle = (path) => {
//     const firstSegment = path.split("/")[1];
//     if (!firstSegment) return "";
//     return firstSegment
//       .split("-")
//       .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
//       .join(" ");
//   };

//   const location = useLocation();
//   const label = formatPathToTitle(to);

//   // const currentItem = formatPathToTitle(location.pathname);
//   // const isSelected = label===currentItem;
//   const isSelected = to.split("/")[1] === location.pathname.split("/")[1];

//   return (
//     <Link to={to}>
//       <ListItem
//         sx={{
//           display: "flex",
//           justifyContent: "space-between",
//           marginY: "4px",
//           borderRadius: (theme) => theme.shape.borderRadius,
//           backgroundColor: isSelected ? "primary.main" : "",
//           color: isSelected ? "text.light" : "text.primary",
//           "&:hover": {
//             bgcolor: "primary.main",
//             color: "text.light",
//             transform: "scaleX(1.05)",
//             boxShadow: 3,
//           },
//         }}
//         disablePadding
//       >
//         <ListItemButton>
//           <div className="drawer-icons">
//             <Icon
//               sx={{ color: isSelected ? "primary.main" : "primary.dark" }}
//             />
//           </div>
//           <Typography variant="body1" color="inherit">
//             {label.charAt(0).toUpperCase() + label.slice(1)}
//           </Typography>
//         </ListItemButton>
//       </ListItem>
//     </Link>
//   );
// };

// export default SidebarItems;
