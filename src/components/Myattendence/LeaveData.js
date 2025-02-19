import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import React from "react";
import { Paper } from "@mui/material";
import QuizIcon from "@mui/icons-material/Quiz";
import LiveHelpSharpIcon from '@mui/icons-material/LiveHelpSharp';
import RequestPageSharpIcon from '@mui/icons-material/RequestPageSharp';
const LeaveData = () => {
  return (
    <Grid container spacing={2} mb={3}>
     
     
      <Grid size={{ xs: 12, sm:6,lg:4 }}>
        <Paper elevation={1} sx={{padding:"15px"}}>
          <Grid container >
            <Grid size={9} justifyContent={"center"}>
              <Typography variant="h6" color="initial" textAlign={"center"}>
                17
              </Typography>
              <Typography variant="subtitle2" color="text.primary" textAlign={"center"}>
                Total Allow Leaves
              </Typography>
            </Grid>
            <Grid size={3} textAlign={"center"}>
              <div className="leave-icons">
                <LiveHelpSharpIcon fontSize="large" color="info" sx={{ marginBottom: 0 }} />
              </div>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid size={{ xs: 12, sm:6,lg:4 }}>
        <Paper elevation={1} sx={{padding:"15px"}}>
          <Grid container >
            <Grid size={9} justifyContent={"center"}>
              <Typography variant="h6" color="initial" textAlign={"center"}>
                17
              </Typography>
              <Typography variant="subtitle2" color="text.primary" textAlign={"center"}>
                Total Allow Leaves
              </Typography>
            </Grid>
            <Grid size={3} textAlign={"center"}>
              <div className="leave-icons">
                <QuizIcon fontSize="large" color="info" sx={{ marginBottom: 0 }} />
              </div>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid size={{ xs: 12, sm:6,lg:4 }}>
        <Paper elevation={1} sx={{padding:"15px"}}>
          <Grid container >
            <Grid size={9} justifyContent={"center"}>
              <Typography variant="h6" color="initial" textAlign={"center"}>
                17
              </Typography>
              <Typography variant="subtitle2" color="text.primary" textAlign={"center"}>
                Total Allow Leaves
              </Typography>
            </Grid>
            <Grid size={3} textAlign={"center"}>
              <div className="leave-icons">
                <RequestPageSharpIcon fontSize="large" color="info" sx={{ marginBottom: 0 }} />
              </div>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    
     
    </Grid>
  );
};

export default LeaveData;
