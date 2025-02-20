import React from "react";

const UserDataCard = ({ icon: Icon, backgroundColor, value, label }) => {
  console.log(label);
  console.log(value);
  console.log(backgroundColor);
  console.log("mts");

  return (
    <>
      <div
        // className="card-items py-4"
        className="col "
      >
        <div
          className="p-3  flex-center  rounded-3  user-data-card "
          style={{ backgroundColor: backgroundColor }}
        >
          <div className="d-flex flex-center  bg-white p-2 rounded-3 ">
            <Icon style={{ color: backgroundColor, fontSize: 30 }} />
          </div>
          <div className="d-flex flex-center flex-column flex-wrap w-100 ">
            <h5 className="text-light text-center fw-bold ">{value}</h5>
            <p className="text-light text-center text-12  p-0">{label}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDataCard;
