import React from 'react'
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import AccountMenu from "./AccountMenu/AccountMenu";
import { Stack,CssBaseline } from "@mui/material";

const AppBarNav = ({handleDrawerToggle}) => {
    const drawerWidth = 280;

  return (
    <>
    <CssBaseline />

   <AppBar
        elevation={0}
        position="fixed"
        sx={{
          width: { lg: `calc(100% - ${drawerWidth}px)` },
          ml: { lg: `${drawerWidth}px` },
          backgroundColor: "transparent",
        }}
      >
        <Toolbar>
          <IconButton
            color="primary.dark"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { lg: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Stack textAlign={"end"} width={"100%"}>
            <AccountMenu />
          </Stack>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default AppBarNav
