import React, { useState, useEffect, useRef } from "react";

import {
  IconButton,
  TextField,
  MenuItem,
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

      <div className="row mb-4 ">
        <div className=" flex-center justify-content-start">
          <div className="flex-center">

          <IconButton onClick={() => Navigate(-1)}>
            <KeyboardBackspaceSharpIcon />
          </IconButton>
          </div>
          <h3 className="ms-2"> Add Leave Request</h3>
        </div>
      </div>
      <div className="container-fluid box-shadow mt-2 rounded-3">
        <div className="row row-cols-1  row-cols-md-2 mb-2  mt-4 g-4">
          <div className="col">
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
          </div>
          <div className="col">
            <TextField
              type="date"
              id="date"
              label="Date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              fullWidth
            />
          </div>
        </div>

        <div className="row mb-1">
          <div className="mt-4">
            <h4> Leave Reason</h4>
          </div>
        </div>
        <div className="row mb-3">
          <div>
            <JoditEditor
              ref={editor}
              value={content}
              config={config}
              tabIndex={1} // tabIndex of textarea
              onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
              onChange={(newContent) => {}}
            />
          </div>
        </div>
        <div className="row mb-2">
          <div className="text-end mb-3">
            <button
              className="theme--button py-1 px-3 "
              type="submit"
              variant="contained"
            >
              submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddLeave;
