import React, { useEffect } from "react";
import AttendenceTable from "../components/Myattendence/AttendenceTable";
import LeaveData from "../components/Myattendence/LeaveData/LeaveData";
const MyAttendence = () => {
  const start = performance.now();
  useEffect(() => {
    console.log(performance.now()-start);
    
  ;
  }, [])

  return (
    <>
      <LeaveData/>
      <AttendenceTable />
      {/* <h2> {performance.now() - start}</h2> */}
    </>
  );
};

export default MyAttendence;
