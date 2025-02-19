import React from "react";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const UserDataCard = ({ icon: Icon, backgroundColor, value, label }) => {
  return (
    <Grid
      size={{ xs: 12, md: 4 }}
      borderRadius={1}
      className="data-card"
      sx={{ bgcolor: backgroundColor }}
      display={"flex"}
      justifyContent={"center"}
      textAlign={"center"}
      gap={2}
      spacing={2}
      height={"100px"}
      // color={"primary.light"}
    >
      <Grid
        container
        width={"100%"}
        sx={{ p: 2, alignItems: "center", justifyContent: "space-between" }}
      >
        <Grid size={3} display={"flex"} justifyContent={"center"}>
          <Box
            borderRadius={1}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "primary.light",
              paddingY: "8px",
              width: "40px",
            }}
          >
            <CalendarMonthIcon
              sx={{ fontSize: 30, color: `${backgroundColor}` }}
            />
          </Box>
        </Grid>
        <Grid size={9} height={"100%"}>
          <Typography
            variant="h6"
            color="text.light"
            //   className="MuiTypography-h6"
            sx={{ fontWeight: "bold", textAlign: "center" }}
          >
            {value}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.light"
            textAlign={"center"}
          >
            {label}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default UserDataCard;
