import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import React from "react";
import { Paper } from "@mui/material";
import QuizIcon from "@mui/icons-material/Quiz";
import LiveHelpSharpIcon from "@mui/icons-material/LiveHelpSharp";
import RequestPageSharpIcon from "@mui/icons-material/RequestPageSharp";
import LeaveDataItem from "./LeaveDataItem";

const leaveData = [
  {
    count: 17,
    label: "Total Allow Leaves",
    icon: LiveHelpSharpIcon  ,
  },
  {
    count: 5,
    label: "Pending Leave Requests",
    icon: QuizIcon  ,
  },
  {
    count: 10,
    label: "Approved Leaves",
    icon: RequestPageSharpIcon ,
  },
];
const LeaveData = () => {
  return (
    <>
      <div className="container">
        <div className="row d-flex  flex-wrap justify-content-around  gap-4 mb-4">
          {
            leaveData.map((data,index)=>(

                <LeaveDataItem
                key={index}
                icon={data.icon}
                count={data.count}
                label={data.label}
                />
            ))
          }
        </div>
      </div>
    </>
  );
};

export default LeaveData;
