import React from "react";
import { CircularProgress, Typography, Box } from "@mui/material";
import Grid from "@mui/material/Grid2";

const ProgressCard = () => {
  const progress = 0; // Change this value for different progress percentages

  return (
    <Grid
      container
      spacing={2}
      sx={{ textAlign: "center", p: 2, backgroundColor: "#DDF0ED" }}
      height={"100%"}
      borderRadius={1}
    >
      <Grid size={12}>
        <Typography variant="subtitle2">Progress</Typography>
      </Grid>

      <Grid  size={12} textAlign={"center"}>
        <Box  sx={{ position: "relative", display: "inline-flex" }}>
          <CircularProgress
            variant="determinate"
            value={100}
            size={100}
            thickness={5}
            sx={{ color: "lightgrey" }}
          />
          <Box
            sx={{
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              position: "absolute",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <CircularProgress
              variant="determinate"
              value={progress}
              size={100}
              thickness={5}
              sx={{ color: "primary.main" }}
            />
            <Box
              sx={{
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                position: "absolute",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography
                variant="subtitle1"
                color="text.primary"
              >{`${progress}%`}</Typography>
            </Box>
          </Box>
        </Box>
      </Grid>

      <Grid size={12}>
        <Typography variant="subtitle2">Your Monthly Progress</Typography>
        <a href="/feedback-related" style={{ textDecoration: "none" }}>
          Details!
        </a>
      </Grid>
    </Grid>
  );
};

export default ProgressCard;
