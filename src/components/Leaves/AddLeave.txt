import React, { useState, useEffect, useRef } from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid2";
import {
  Stack,
  IconButton,
  Paper,
  TextField,
  MenuItem,
  Button,
} from "@mui/material";
import KeyboardBackspaceSharpIcon from "@mui/icons-material/KeyboardBackspaceSharp";
import { useNavigate } from "react-router-dom";
import JoditEditor from "jodit-react";

const AddLeave = () => {
  const [leaveType, setLeavetype] = useState("");
  const [date, setDate] = useState("");
  const editor = useRef(null);
  const [content, setContent] = useState("");

  const Navigate = useNavigate();
  useEffect(() => {
    const today = new Date().toISOString().split("T")[0]; // Format: YYYY-MM-DD
    setDate(today);
  }, []);

  const config = {
    height: 400, 
    placeholder: "Write your leave reason here...",
    toolbarSticky: false,
  };
  return (
    <>
      <Container sx={{ padding: "0px" }}>
        <Stack direction={"row"} justifyItems={"center"} spacing={2}>
          <IconButton onClick={() => Navigate(-1)}>
            <KeyboardBackspaceSharpIcon />
          </IconButton>
          <Typography alignContent={"center"} variant="h4" color="initial">
            Add Leave Request
          </Typography>
        </Stack>
        <Paper elevation={4} sx={{ padding: "15px" }}>
          <Grid container spacing={2} mb={3}>
            <Grid size={{ md: 6, xs: 12 }} justifyContent={"center"}>
              <TextField
                select
                id="type"
                label="Type"
                value={leaveType}
                onChange={(e) => setLeavetype(e.target.value)}
                fullWidth
              >
                <MenuItem value="half">Half</MenuItem>
                <MenuItem value="full">Full</MenuItem>
              </TextField>
            </Grid>
            <Grid size={{ md: 6, xs: 12 }} justifyContent={"center"}>
              <TextField
                type="date"
                id="date"
                label="Date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                fullWidth
              />
            </Grid>
          </Grid>
          <Stack>
            <Typography mb={1} alignContent={"center"} variant="h4" color="initial">
              Leave Reason
            </Typography>
            <JoditEditor
              ref={editor}
              value={content}
              config={config}
              tabIndex={1} // tabIndex of textarea
              onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
              onChange={(newContent) => {}}
            />
            <Stack mt={2} direction={"row"} justifyContent={"flex-end"}>
              <Button variant="contained" size="small">
                Submit
              </Button>
            </Stack>
          </Stack>
        </Paper>
      </Container>
    </>
  );
};

export default AddLeave;
