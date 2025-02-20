import * as React from 'react';
import Drawer from '@mui/material/Drawer';


export default function SidebarDrawer({open,onClose,children}) {

  return (
    <div>
      <Drawer
        // sx={{ "& .MuiDrawer-paper": { width: 300 } }} // Set sidebar width

      anchor="right" open={open} onClose={onClose}>
        
         {children}
      </Drawer>
    </div>
  );
}
