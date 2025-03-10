import React from "react";
import { useState } from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import UserDataCard from "./UserDataCard";

const userDataItems = [
  {
    backgroundColor: "#76D297",
    icon: CalendarMonthIcon,
    value: 17,
    label: "Total allowed leaves",
  },
  {
    backgroundColor: "#40A5F4",
    icon: CalendarMonthIcon,
    value: 0,
    label: "Remaining relax minutes",
  },
  {
    backgroundColor: "#E45779",
    icon: CalendarMonthIcon,
    value: 96,
    label: "Current month late minutes",
  },
  {
    backgroundColor: "#EF9E15",
    icon: CalendarMonthIcon,
    value: 0,
    label: "Total yearly leaves",
  },
  {
    backgroundColor: "#6DCFCD",
    icon: CalendarMonthIcon,
    value: 0,
    label: "Current month leaves",
  },
  {
    backgroundColor: "#A568F7",
    icon: CalendarMonthIcon,
    value: 36,
    label: "Current month fineable minutes",
  },
];
const UserData = () => {
  return (
    <>
      <div className="containor-fluid">
        <div className="row gap-3 gap-lg-0">
          <div className="col-12 col-lg-9 ">
            <div className="row row-cols-1  row-cols-lg-3 row-cols-xl-3 g-4">
              {userDataItems.map((userData, index) => (
                <UserDataCard
                  key={index}
                  backgroundColor={userData.backgroundColor}
                  icon={userData.icon}
                  value={userData.value}
                  label={userData.label}
                />
              ))}
            </div>
          </div>
          <div className="col-12 col-lg-3 rounded-3 flex-center flex-column  bg-info  ">
            <p className="fs-5 fw-bolder">Progress </p>
            <p className="fs-6 fw-bolder">your monthly Progress </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserData;
