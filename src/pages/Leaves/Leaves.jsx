import React from "react";
import Leaverecord from "../../components/Leaves/LeaveRecord";
import { useEffect } from "react";

const Leaves = () => {
  const start=performance.now()

    useEffect(() => {
      console.log(performance.now() - start);
    }, []);
    
  return (
    <>
      <Leaverecord />
      
    </>
  );
};

export default Leaves;
