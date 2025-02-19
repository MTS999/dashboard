import React from "react";
import {  Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import UserDataCard from "./UserDataCard";
import ProgressCard from "./ProgressCard";
const UserData = () => {
 
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems:"center",
          flexDirection: { xs: "column", md: "row" },

          gap: "20px",
        }}
      >
        <Grid container spacing={2} sx={{ width: { sm: "100%", md: "70%" } }}>
          <UserDataCard
            backgroundColor={"#76D297"}
            icon={CalendarMonthIcon}
            value={17}
            label={"Total allow leaves"}
          />
          <UserDataCard
            backgroundColor={"#40A5F4"}
            icon={CalendarMonthIcon}
            value={0}
            label={"Remaining relex minuts"}
          />
          <UserDataCard
            backgroundColor={"#E45779"}
            icon={CalendarMonthIcon}
            value={96}
            label={"Curent month Late minuts"}
          />
          <UserDataCard
            backgroundColor={"#EF9E15"}
            icon={CalendarMonthIcon}
            value={0}
            label={"Total Leaves yearly"}
          />
          <UserDataCard
            backgroundColor={"#6DCFCD"}
            icon={CalendarMonthIcon}
            value={0}
            label={"CurrentMonth leaves"}
          />
          <UserDataCard
            backgroundColor={"#A568F7"}
            icon={CalendarMonthIcon}
            value={36}
            label={"current month finable minuts"}
          />
        </Grid>
        <Box
          sx={{
            width: { xs: "100%", md: "30%" },
          }}
        >
          <ProgressCard />
        </Box>
      </Box>
    </>
  );
};

export default UserData;
