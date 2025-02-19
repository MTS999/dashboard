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
        className=" d-flex align-items-center rounded-3   py-3 px-3 width--30 box-shadow"
        style={{ backgroundColor: backgroundColor }}
      >
        <div className="d-flex flex-center  bg-white p-2 rounded-3 ">
          <Icon style={{ color: backgroundColor, fontSize: 30 }} />
        </div>
        <div className="d-flex flex-center flex-column flex-wrap w-100">
          <h5 className="text-light text-center fw-bold ">{value}</h5>
          <p className="text-light text-center fs-6">{label}</p>
        </div>
      </div>
    </>
  );
};

export default UserDataCard;
