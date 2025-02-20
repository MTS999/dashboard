import React from "react";

import EditIcon from "@mui/icons-material/Edit";
import Avatar from "@mui/material/Avatar";

const Profile = () => {

  
    const profileFields = [
        { label: "Full Name", value: "Muhammad Taimoor Shahid" },
        { label: "Email", value: "taimoor@example.com" },
        { label: "Phone", value: "+123 456 7890" },
        { label: "Address", value: "123 Main Street, City, Country" },
        { label: "Date of Birth", value: "January 1, 1995" },

     
      ];



  return (
    <div className="container-fluid box-shadow p-4  rounded-3   " style={{width:"500px"}}>
      {/* <div className="row mb-4">
        <div className="text-end">
          <EditIcon />
        </div>
      </div> */}
      <div className="row text-end">
        <div className=" flex-center">
            <Avatar   sx={{ width: 150, height: 150 }}
            >T</Avatar>
        </div>
      </div>
      <div className="row pb-5 row-cols-1  mt-4 g-5  rounded-4">
      {profileFields.map((field, index) => (
          <div className="col" key={index}>
            <div className="box-shadow position-relative p-3 rounded-4">
              <p className="position-absolute profile-label text-12">
                {field.label}
              </p>
              <div className="d-flex align-items-center">
                <EditIcon />
                <p className="mb-0 fs-6 ms-2">{field.value}</p>
              </div>
            </div>
          </div>
        ))}
       
      </div>
    </div>
  );
};

export default Profile;
