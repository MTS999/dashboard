import React from "react";
import List from "@mui/material/List";
import { metaLogixLogo } from "../../../assets";
import SidebarItems from "./SidebarItems";
import menuItems from "./config";

const SideBar = () => {
  return (
    <div className="container-fluid p-0 ">
      <div className="row">
        <div className="meta-logo">
          <img className="sidebar-logo" src={metaLogixLogo} alt="logo" />
        </div>
      </div>
      <div className="row px-2 gap-2">
        {menuItems.map(({ to, icon }) => (
          <SidebarItems key={to} to={to} icon={icon} />
        ))}
      </div>
    </div>
  );
};

export default SideBar;
// import React from "react";
// import List from "@mui/material/List";
// import { metaLogixLogo } from "../../../assets";
// import SidebarItems from "./SidebarItems";
// import menuItems from "./config";

// const SideBar = () => {
//   return (
//     <div>
//       <div className="meta-logo">
//         <img className="sidebar-logo" src={metaLogixLogo} alt="logo" />
//       </div>

//       <List sx={{ padding: 2 }}>
//         {menuItems.map(({ to, icon }) => (
//           <SidebarItems key={to} to={to} icon={icon} />
//         ))}
//       </List>
//     </div>
//   );
// };

// export default SideBar;
