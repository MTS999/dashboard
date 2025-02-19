import React from "react";

const LeaveDataItem = ({ icon: Icon, count, label }) => {
  return (
    <div className="d-flex align-items-center  rounded-3  py-1 px-3 width--30 bg-light box-shadow ">
      <div className="d-flex flex-center flex-column flex-wrap  w-100">
        <h5 className="text-dark text-center fw-bold ">{count}</h5>
        <p className="text-dark text-center fs-6">{label}</p>
      </div>
      <div className="d-flex flex-center  text-white p-2 rounded-3  primary-color">
        <Icon />
      </div>
    </div>
  );
};

export default LeaveDataItem;
