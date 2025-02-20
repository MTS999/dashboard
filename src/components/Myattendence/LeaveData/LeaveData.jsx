import React from "react";
import LeaveDataItem from "./LeaveDataItem";
import leaveData from "./config";


const LeaveData = () => {
  return (
    <>
      <div className="container-fluid p-0">
        <div className="row row-cols-1 row-cols-md-3 row-cols-lg-3 g-4">
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
